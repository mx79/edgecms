"use client";

import React from "react";
import {useLocale} from "next-intl";
import {usePathname, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Icons} from "@/components/icons";

type SelectOption = {
  title: string;
  lang: string;
};

export default function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages: SelectOption[] = [
    {
      title: locale === "en" ? "English" : "Anglais",
      lang: "en",
    },
    {
      title: locale === "en" ? "French" : "Français",
      lang: "fr",
    },
  ]

  const onSelectChange = (value: string) => {
    const nextLocale = value;

    let newPathname;
    const pathParts = pathname.split('/').filter(Boolean); // Split and remove empty parts

    if (nextLocale === 'en') {
      // If switching to default locale, redirect to '/en' instead of '/'
      newPathname = '/en' + (['en', 'fr'].includes(pathParts[0]) ? '/' + pathParts.slice(1).join('/') : pathname);
    } else {
      // If switching to a non-default locale, add or update the locale prefix
      if (['en', 'fr'].includes(pathParts[0])) {
        pathParts[0] = nextLocale; // Update the existing locale prefix
      } else {
        pathParts.unshift(nextLocale); // Add the locale prefix
      }
      newPathname = '/' + pathParts.join('/');
    }

    router.push(newPathname);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {locale === "en" ? <Icons.uk/> : <Icons.fr/>}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((option, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => onSelectChange(option.lang)}
          >
            {option.lang === "en" ? <Icons.uk className="mr-2"/> : <Icons.fr className="mr-2"/>}
            {option.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
