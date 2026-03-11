import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    imageStorageId: v.optional(v.id("_storage")),
    status: v.string(), // "In Progress" or "Completed"
  }),
  blogs: defineTable({
    title: v.string(),
    content: v.string(),
    imageStorageId: v.optional(v.id("_storage")),
    author: v.string(),
    publishedDate: v.number(), // Timestamp
  }),
});
