import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import {db} from "@/lib/database";
import {compareSync} from 'bcrypt-edge';

export const {handlers, auth: baseAuth} = NextAuth((req) => ({
  session: {strategy: "jwt"},
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: '/login',
    error: '/error',
  },
  providers: [
    // github({ allowDangerousEmailAccountLinking: true }),
    // google({allowDangerousEmailAccountLinking: true}),
    // apple({clientId: env.AUTH_APPLE_ID, clientSecret: env.AUTH_APPLE_SECRET}),
    CredentialsProvider({
      name: "Sign in",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await db.query.users.findFirst({
          where: (users, {eq}) => eq(users.email, String(credentials.email)),
        });

        if (
          !user ||
          !(compareSync(String(credentials.password), user.password!))
        ) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          randomKey: "Hey cool",
        };
      },
    }),
  ],
  callbacks: {
    authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user;
      const paths = ["/profile", "/client-side", "/api/session"];
      const isProtected = paths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("/login", nextUrl.origin);
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href);
        return Response.redirect(redirectUrl);
      }
      return true;
    },
    jwt: ({token, user}) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
    session(params) {
      return {
        ...params.session,
        user: {
          ...params.session.user,
          id: params.token.id as string,
          randomKey: params.token.randomKey,
        },
      };
    },
  },
}));

