import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url:'postgresql://PetiB_geminiAI_Power_owner:IgA9PEkf7Ywa@ep-still-hall-a2zn2m8d.eu-central-1.aws.neon.tech/PetiB_geminiAI_Power?sslmode=require'
  }
});
