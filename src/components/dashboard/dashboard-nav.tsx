"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Icons} from "@/components/icons";
import {cn} from "@/lib/utils";
import {Dispatch, SetStateAction} from "react";
import {useLocale} from "next-intl";

interface DashboardNavProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

type NavItem = {
  title: string;
  href: string;
  icon: string;
  label: string;
  disabled?: boolean;
};

const navItemsEnglish: NavItem[] = [
  {
    title: "Dashboard",
    href: "/en/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Tutorial",
    href: "/en/dashboard/tutorial",
    icon: "tutorial",
    label: "tutorial",
  },
  {
    title: "Users",
    href: "/en/dashboard/users",
    icon: "user",
    label: "users",
  },
  {
    title: "History",
    href: "/en/dashboard/history",
    icon: "history",
    label: "history",
  },
  {
    title: "Profile",
    href: "/en/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
];

const navItemsFrench: NavItem[] = [
  {
    title: "Tableau de bord",
    href: "/fr/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Tutoriel",
    href: "/fr/dashboard/tutorial",
    icon: "tutorial",
    label: "tutorial",
  },
  {
    title: "Utilisateurs",
    href: "/fr/dashboard/users",
    icon: "user",
    label: "users",
  },
  {
    title: "Historique",
    href: "/fr/dashboard/history",
    icon: "history",
    label: "history",
  },
  {
    title: "Profile",
    href: "/fr/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
];

export function DashboardNav({setOpen}: DashboardNavProps) {
  const path = usePathname();

  const locale = useLocale();

  const items = locale === "en" ? navItemsEnglish : navItemsFrench;

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        // @ts-ignore
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "/" : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4"/>
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
