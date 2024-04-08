import React from "react";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import {ScrollArea} from "@/components/ui/scroll-area";
import {auth} from "@/lib/auth/helper";
import {redirect} from "next/navigation";

export default async function DashboardLayout({
                                                children,
                                              }: {
  children: React.ReactNode;
}) {
  const user = await auth();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <Header/>
      <div className="flex h-screen overflow-hidden">
        <Sidebar/>
        <main className="w-full pt-16">
          <ScrollArea className="h-full">
            {children}
          </ScrollArea>
        </main>
      </div>
    </>
  );
}
