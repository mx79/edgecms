import React from "react";
import {Metadata} from "next";
import {getMessages, getTranslations} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

type AppLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('LocaleLayout');

  return {
    title: {
      template: `%s | ${t("title")}`,
      default: t("title"),
    },
    description: t('description'),
    metadataBase: new URL("https://edgecms.io"),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://edgecms.io",
      title: t('title'),
      description: t('description'),
      siteName: t('title'),
    },
    applicationName: t('title'),
    authors: [
      {name: 'Max Lesage'}
    ],
    generator: 'Next.js',
    keywords: ['CMS', 'EdgeCMS', 'Next.js', 'React', 'Open Source', 'Drizzle', 'Tailwind CSS', 'TypeScript', 'Edge', 'i18n'],
    creator: 'Max Lesage',
  }
}

export default async function LocaleLayout({children, params: {locale}}: AppLayoutProps) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};
