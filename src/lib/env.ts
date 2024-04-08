import {createEnv} from "@t3-oss/env-nextjs";
import {z} from "zod";

export const env = createEnv({
  server: {
    // Database
    DATABASE_URL: z.string().url(),

    // GitHub
    // AUTH_GITHUB_ID: z.string().min(1),
    // AUTH_GITHUB_SECRET: z.string().min(1),

    // Google
    // AUTH_GOOGLE_ID: z.string().min(1),
    // AUTH_GOOGLE_SECRET: z.string().min(1),

    // Apple
    // AUTH_APPLE_ID: z.string().min(1),
    // AUTH_APPLE_SECRET: z.string().min(1),

    // Others
    REGISTER_SECRET_KEY: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
    NODE_ENV: z.enum(["development", "production"]),
  },
  client: {},
  experimental__runtimeEnv: {}
});
