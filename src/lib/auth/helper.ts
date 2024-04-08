import {baseAuth} from "@/lib/auth/index";

export const auth = async () => {
  const session = await baseAuth();

  if (session?.user) {
    const user = session.user;
    return user;
  }

  return null;
};
