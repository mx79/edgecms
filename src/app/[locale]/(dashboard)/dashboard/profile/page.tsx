import {getTranslations} from "next-intl/server";
import type {Metadata} from "next";

export async function generateMetadata({params: {locale}}: any): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: "pages.dashboard.DashboardProfilePage"});

  return {
    title: t("title"),
  };
}

export default async function DashboardProfilePage() {
  return (
    <>

    </>
  );
}
