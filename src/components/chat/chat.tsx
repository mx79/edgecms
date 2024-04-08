"use client";

import {useChat} from "ai/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {MessageCircle} from "lucide-react";
import handler from "./chat.action";
import {useTranslations} from "next-intl";
import {Separator} from "@/components/ui/separator";

export default function Chat() {
  const t = useTranslations("chat");

  const {messages, setMessages, input, handleInputChange, handleSubmit} = useChat({
    api: handler,
  });

  return (
    <Sheet>
      <SheetTrigger asChild className="fixed bottom-0 right-0 mb-4 mr-4 z-50">
        <Button variant="outline">
          <div className="sr-only">Open chat</div>
          <MessageCircle/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
          <SheetDescription>{t("description")}</SheetDescription>
        </SheetHeader>
        <div className="container mx-auto p-4">
          <Separator className="my-4"/>
          <div className="overflow-y-auto max-h-[60vh]">
            <ul>
              {messages.map((m, index) => (
                <li key={index} className="mb-3">
                  {m.role === "user" ? "User: " : "AI: "}
                  {m.role === "user" ? m.content : m.ui}
                </li>
              ))}
            </ul>
          </div>
          <Separator className="my-4"/>
          <form
            className="flex gap-2 w-full pt-2"
            onSubmit={handleSubmit}
          >
            <input
              className="border border-gray-500 rounded p-2 w-full"
              placeholder={t("message_placeholder")}
              value={input}
              onChange={handleInputChange}
              autoFocus
            />

            <Button type="submit" variant="outline">
              {t("button_send")}
            </Button>
          </form>
        </div>
        <SheetFooter className="sm:justify-center">
          <Button variant="destructive" onClick={() => setMessages([])}>
            {t("button_clear")}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
