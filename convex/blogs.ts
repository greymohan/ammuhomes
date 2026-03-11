import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getBlogs = query({
  handler: async (ctx) => {
    return await ctx.db.query("blogs").order("desc").collect();
  },
});

export const addBlog = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    author: v.string(),
    imageStorageId: v.optional(v.id("_storage")),
    publishedDate: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("blogs", { ...args });
  },
});

export const updateBlog = mutation({
  args: {
    id: v.id("blogs"),
    title: v.string(),
    content: v.string(),
    author: v.string(),
    imageStorageId: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    await ctx.db.patch(id, { ...rest });
  },
});

export const deleteBlog = mutation({
  args: { id: v.id("blogs") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
