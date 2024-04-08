'use client';

import React from "react";
import {useRouter} from 'next/navigation';
import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";

export default function BackButton() {
  const t = useTranslations("pages.NotFoundPage");

  const router = useRouter();

  return (
    <Button
      size="lg"
      onClick={() => router.back()}
      className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
           stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
      </svg>

      <span>{t("backToBefore")}</span>
    </Button>
  );
}
