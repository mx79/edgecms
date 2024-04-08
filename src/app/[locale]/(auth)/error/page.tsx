import {getTranslations} from "next-intl/server";
import {Metadata} from "next";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.auth.ErrorPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ErrorPage() {
  const t = await getTranslations("pages.auth.ErrorPage");

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400"/>
      <div className="relative z-10 mx-4 pb-4">
        <Card>
          <CardHeader>
            <CardTitle>{t("title")}</CardTitle>
            <CardDescription>{t("description")}</CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center gap-2">
            <Link href="/" className={buttonVariants({ size: "sm" })}>
              {t("backToHome")}
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
