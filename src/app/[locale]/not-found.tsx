import Link from "next/link";
import {Button} from "@/components/ui/button";
import {getTranslations} from "next-intl/server";
import BackButton from "@/components/buttons/back-button";

export async function generateMetadata() {
  const t = await getTranslations("pages.NotFoundPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function NotFoundPage() {
  const t = await getTranslations("pages.NotFoundPage");

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-16 items-center justify-center text-center">
      <span
        className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        404
      </span>
      <h2 className="my-2 font-heading text-2xl font-bold">
        {t("title")}
      </h2>
      <p>
        {t("description")}
      </p>
      <div className="mt-8 flex justify-center gap-2">
        <BackButton/>

        <Link href="/">
          <Button size="lg">
            {t("backToHome")}
          </Button>
        </Link>
      </div>
    </div>
  );
};
