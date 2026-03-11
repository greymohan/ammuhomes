import { mutation } from "./_generated/server";

export const seedDemo = mutation({
  handler: async (ctx) => {
    // 1. Clear existing (optional, but good for a fresh start)
    const existingProjects = await ctx.db.query("projects").collect();
    for (const p of existingProjects) {
      await ctx.db.delete(p._id);
    }
    
    const existingBlogs = await ctx.db.query("blogs").collect();
    for (const b of existingBlogs) {
        await ctx.db.delete(b._id);
    }

    // 2. Seed Projects
    await ctx.db.insert("projects", {
      title: "Executive Modern Home - Penrith",
      description: "A stunning 4-bedroom executive home featuring high ceilings, open-plan living, and premium Western Sydney finishes. Built with quality and family in mind.",
      status: "Completed",
    });

    await ctx.db.insert("projects", {
      title: "Luxury Hillside Villa - Blue Mountains",
      description: "A bespoke custom design that integrates perfectly with the mountain landscape. Modern architecture meets functional living.",
      status: "In Progress",
    });

    // 3. Seed Blogs
    await ctx.db.insert("blogs", {
      title: "Why Western Sydney is the Best Place to Build in 2026",
      content: "With new infrastructure and growing communities, Western Sydney offers unique opportunities for custom home builders. Here is why we love building here...",
      author: "Ammu Homes Admin",
      publishedDate: Date.now(),
    });

    await ctx.db.insert("blogs", {
      title: "Top 3 Design Trends for Modern Homes",
      content: "From sustainable materials to smart home integration, discover the trends that are shaping custom homes this year.",
      author: "Ammu Homes Admin",
      publishedDate: Date.now(),
    });

    return "✅ Demo data seeded successfully!";
  },
});
