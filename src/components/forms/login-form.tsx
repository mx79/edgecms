"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";
import {signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import FormLoader from "@/components/loaders/form-loader";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm} from "@/components/ui/form";
import {loginSchema, LoginType} from "@/lib/zod/loginSchema";
import {useMutation} from "@tanstack/react-query";
import {toast} from "sonner";
import {getServerUrl} from "@/lib/server-url";
import {useSearchParams} from "next/navigation";
import {ProviderButton} from "@/components/buttons/provider-button";

export default function LoginForm() {
  const t = useTranslations("forms.LoginForm");

  const [loading, setLoading] = useState<boolean>(false);

  const form = useZodForm({
    schema: loginSchema,
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const searchParams = useSearchParams();

  const submitMutation = useMutation({
    mutationFn: async (values: LoginType) => {
      setLoading(true);

      await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        redirectTo: searchParams.get("callbackUrl") ?? `${getServerUrl()}/`,
      }).then(() => {
        toast(t("toast_success.title"), {
          description: t("toast_success.description"),
          action: {
            label: t("toast_success.button"),
            onClick: () => console.log(t("toast_success.button")),
          },
        });
        // router.push("/verify-email");
      }).catch(() => {
        toast(t("toast_error.title"), {
          description: t("toast_error.description"),
          action: {
            label: t("toast_error.button"),
            onClick: () => console.log(t("toast_error.button")),
          },
        });
      }).finally(() => {
        setLoading(false);
      });
    },
  });

  return (
    <>
      <Form
        form={form}
        onSubmit={async (values) => submitMutation.mutateAsync(values)}
        className="space-y-2 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>{t("label_email")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("placeholder_email")}
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({field}) => (
            <FormItem>
              <FormLabel>{t("label_password")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("placeholder_password")}
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          className="ml-auto w-full mt-6 disabled:cursor-not-allowed disabled:bg-opacity-80"
        >
          {loading && <FormLoader className="mr-2 h-4 w-4"/>}
          {t("button")}
        </Button>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"/>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t("or_continue_with")}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-2">
        <ProviderButton providerId="google"/>
        <ProviderButton providerId="apple"/>
      </div>
    </>
  );
};
