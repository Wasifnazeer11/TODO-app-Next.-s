import { integer, pgTable, serial, text, timestamp, varchar,boolean } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel } from 'drizzle-orm';
import { sql } from '@vercel/postgres'

import exp from 'constants';

export const todoTable = pgTable("todos",{
id: serial("id").primaryKey(),
task:varchar("task",{length: 250}).notNull()

})

export type Todo = InferModel<typeof todoTable>;
export type NewTodo = InferModel<typeof todoTable, "insert"> ;

export const db = drizzle(sql);


