"use client";

import React, {useState} from "react";
import {DashboardNav} from "@/components/dashboard/dashboard-nav";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon} from "lucide-react";
import {useTranslations} from "next-intl";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const t = useTranslations("dashboard.MobileSidebar");

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon/>
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                {t("overview")}
              </h2>
              <div className="space-y-1">
                <DashboardNav setOpen={setOpen}/>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
