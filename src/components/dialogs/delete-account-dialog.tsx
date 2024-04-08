"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

export default function DeleteAccountDialog() {
  const t = useTranslations("dialogs.DeleteAccountDialog");
  const router = useRouter();

  const serverAction = async () => {
    // const deleted = await deleteCurrentUser();
    const deleted = true;

    if (deleted) {
      toast(t("toast_success.title"), {
        description: t("toast_success.description"),
        action: {
          label: t("toast_success.button"),
          onClick: () => console.log(t("toast_success.button")),
        },
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      toast(t("toast_error.title"), {
        description: t("toast_error.description"),
        action: {
          label: t("toast_error.button"),
          onClick: () => console.log(t("toast_error.button")),
        },
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">{t("dialog_title")}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>{t("description")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
          <AlertDialogAction onClick={serverAction}>{t("delete")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
