import {getTranslations} from "next-intl/server";

export default async function SectionLoader() {
  const t = await getTranslations("loaders.SectionLoader");

  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="w-16 h-16 border-t-4 border-b-4 border-primary rounded-full animate-spin"/>
      <div className="text-lg text-primary font-bold animate-pulse">{t("text")}</div>
    </div>
  );
}
