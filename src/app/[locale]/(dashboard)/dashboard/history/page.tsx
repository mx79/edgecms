import {getTranslations} from "next-intl/server";
import type {Metadata} from "next";

export async function generateMetadata({params: {locale}}: any): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: "pages.dashboard.DashboardHistoryPage"});

  return {
    title: t("title"),
  };
}

export default async function DashboardHistoryPage() {
  return (
    <>

    </>
  );
}
