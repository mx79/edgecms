import {createSafeActionClient} from "next-safe-action";
import {auth} from "@/lib/auth/helper";

export class ActionError extends Error {
  constructor(message: string) {
    super(message);
  }
}

type HandleReturnedServerError = (e: Error) => string;

const handleReturnedServerError: HandleReturnedServerError = (e) => {
  if (e instanceof ActionError) {
    return e.message;
  }

  return "An error occurred. Please try again.";
};

export const action = createSafeActionClient({
  handleReturnedServerError,
});

const getUser = async () => {
  const user = await auth();

  if (!user) {
    throw new ActionError("Session not found!");
  }

  if (!user.id || !user.email) {
    throw new ActionError("Session is not valid!");
  }

  return user;
};

export const authAction = createSafeActionClient({
  handleReturnedServerError,

  async middleware() {
    const user = await getUser();

    return {
      user: user,
    };
  },
});

