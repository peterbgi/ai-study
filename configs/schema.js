import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";

export const User_Table = pgTable('users', {
    id: serial().primaryKey(),
    name: varchar().notNull(),
    email: varchar().notNull(),
    isMember: boolean().default(false)
})