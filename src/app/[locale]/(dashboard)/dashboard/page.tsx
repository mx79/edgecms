import {getTranslations} from "next-intl/server";
import type {Metadata} from "next";

export async function generateMetadata({params: {locale}}: any): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: "pages.dashboard.DashboardHomePage"});

  return {
    title: t("title"),
  };
}

export default async function DashboardHomePage() {
  const t = await getTranslations("pages.dashboard.DashboardHomePage");

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          {t("hi")} 👋
        </h2>
      </div>
    </div>
  );
}
