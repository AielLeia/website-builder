import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const EnvConfig = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().readonly(),
    DB_USERNAME: z.string().readonly(),
    DB_PASSWORD: z.string().readonly(),
    UPLOADTHING_SECRET: z.string().readonly(),
    UPLOADTHING_APP_ID: z.string().readonly(),
    STRIPE_SECRET_KEY: z.string().readonly(),
    STRIPE_WEBHOOK_SECRET: z.string().readonly(),
    DATABASE_URL: z.string().url().readonly(),
    SHADOW_DATABASE_URL: z.string().url().readonly(),
    PROD_DATABASE_URL: z.string().url().readonly(),
    LOCAL_DATABASE_URL: z.string().url().readonly(),
  },

  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().readonly(),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().readonly(),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().readonly(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().readonly(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().readonly(),
    NEXT_PUBLIC_URL: z.string().readonly(),
    NEXT_PUBLIC_DOMAIN: z.string().readonly(),
    NEXT_PUBLIC_SCHEME: z.string().readonly(),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().readonly(),
    NEXT_PUBLIC_STRIPE_CLIENT_ID: z.string().readonly(),
    NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT: z.number().readonly(),
    NEXT_PUBLIC_PLATFORM_ONETIME_FEE: z.number().readonly(),
    NEXT_PUBLIC_PLATFORM_AGENCY_PERCENT: z.number().readonly(),
    NEXT_PUBLIC_BUILDER_API_KEY: z.string().readonly(),
  },

  runtimeEnv: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
    UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    SHADOW_DATABASE_URL: process.env.SHADOW_DATABASE_URL,
    PROD_DATABASE_URL: process.env.PROD_DATABASE_URL,
    LOCAL_DATABASE_URL: process.env.LOCAL_DATABASE_URL,

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_SCHEME: process.env.NEXT_PUBLIC_SCHEME,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_STRIPE_CLIENT_ID: process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID,
    NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT:
      process.env.NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT,
    NEXT_PUBLIC_PLATFORM_ONETIME_FEE:
      process.env.NEXT_PUBLIC_PLATFORM_ONETIME_FEE,
    NEXT_PUBLIC_PLATFORM_AGENCY_PERCENT:
      process.env.NEXT_PUBLIC_PLATFORM_AGENCY_PERCENT,
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  },
});
