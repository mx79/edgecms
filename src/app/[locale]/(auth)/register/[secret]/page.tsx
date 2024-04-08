import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import Link from "next/link";
import {Icons} from "@/components/icons";
import {env} from "@/lib/env";
import RegisterForm from "@/components/forms/register-form";
import {redirect} from "next/navigation";
import {ScrollArea} from "@/components/ui/scroll-area";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.auth.RegisterPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

type Props = {
  params: {
    secret: string;
  };
};

export default async function RegisterPage(props: Props) {
  const t = await getTranslations("pages.auth.RegisterPage");

  const secret = props.params.secret;

  if (secret !== env.REGISTER_SECRET_KEY) {
    redirect("/login");
  }

  return (
    <div
      className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900"/>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/">
            <Icons.logo className="w-8 h-8 hover:text-muted-foreground"/>
          </Link>
        </div>
        <div className="hidden lg:block">

        </div>
      </div>
      <ScrollArea className="h-full">
        <div className="p-4 lg:p-8 h-full flex items-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-4 text-center items-center">
              <Link href="/" className="block lg:hidden">
                <Icons.logo className="w-8 h-8 hover:text-muted-foreground"/>
              </Link>
              <h1 className="text-2xl font-semibold tracking-tight">
                {t("title")}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t("description")}
              </p>
            </div>
            <RegisterForm/>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
