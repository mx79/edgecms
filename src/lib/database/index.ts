import * as schema from './schema';

import {neon} from '@neondatabase/serverless';
import {drizzle} from 'drizzle-orm/neon-http';
import {env} from "@/lib/env";

const connectionString = env.DATABASE_URL!;
const client = neon(connectionString);

export const db = drizzle(client, {schema: schema, logger: true});
