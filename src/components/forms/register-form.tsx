"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import FormLoader from "@/components/loaders/form-loader";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useZodForm} from "@/components/ui/form";
import {useMutation} from "@tanstack/react-query";
import {toast} from "sonner";
import {ProviderButton} from "@/components/buttons/provider-button";
import {registerSchema, RegisterType} from "@/lib/zod/registerSchema";
import {useParams} from "next/navigation";

export default function RegisterForm() {
  const t = useTranslations("forms.RegisterForm");

  const [loading, setLoading] = useState<boolean>(false);

  const params = useParams();
  console.log(params);

  const form = useZodForm({
    schema: registerSchema,
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      secret: params.secret as string ?? "",
    }
  });

  const submitMutation = useMutation({
    mutationFn: async (values: RegisterType) => {
      setLoading(true);

      await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
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
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>{t("label_name")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("placeholder_name")}
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({field}) => (
            <FormItem>
              <FormLabel>{t("label_password_confirm")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("placeholder_password_confirm")}
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
