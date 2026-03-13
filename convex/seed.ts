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
      description: "A stunning 4-bedroom executive home featuring high ceilings, open-plan living, and premium finishes. Built with quality and family in mind.",
      imageStorageIds: [],
      status: "Completed",
    });

    await ctx.db.insert("projects", {
      title: "Luxury Hillside Villa - Blue Mountains",
      description: "A bespoke custom design that integrates perfectly with the mountain landscape. Modern architecture meets functional living.",
      imageStorageIds: [],
      status: "In Progress",
    });

    // 3. Seed Blogs
    await ctx.db.insert("blogs", {
      title: "The Ultimate Guide to Building Your Custom Home: Why Bespoke is Better",
      content: "Building a custom home is more than just a construction project; it's the realization of a lifelong dream. Unlike volume-built houses, a custom home is tailored specifically to your family's lifestyle, site orientation, and future needs. From selecting the perfect plot to choosing the finest finishes, every decision is yours. At Ammu Homes, we specialize in turning these visions into reality, ensuring that your home is as unique as your story. Discover why more homeowners are choosing the custom path in 2026.",
      author: "Ammu Homes Team",
      imageStorageId: "kg24d6b9g2nfbd58b30x6mbnnx82tgbw" as any,
      publishedDate: Date.now(),
    });

    await ctx.db.insert("blogs", {
      title: "Navigating the DA and CDC Process: What You Need to Know for Your Next Build",
      content: "Starting a new build can feel overwhelming, especially with the complex local council requirements in NSW. Whether you're going through a Development Application (DA) or Complying Development Certificate (CDC), understanding the process is key to a smooth project. We work closely with consultants and local councils across Sydney and the Macarthur region to streamline approvals. In this post, we break down the timelines, costs, and common pitfalls to avoid when planning your custom home.",
      author: "Building Consultant",
      imageStorageId: "kg2715ccde7zv20r18wjjne1tx82v7mx" as any,
      publishedDate: Date.now(),
    });

    await ctx.db.insert("blogs", {
      title: "Sustainable Luxury: Designing Energy-Efficient Homes for the Future",
      content: "Modern custom homes are leading the way in sustainability. By incorporating passive solar design, high-performance insulation, and smart energy systems, you can create a home that is both luxurious and cost-effective to run. At Ammu Homes, we believe that 'green' doesn't mean compromising on style. Learn how we utilize thermal mass, cross-ventilation, and sustainable materials to build homes that stay cool in the Sydney summer and warm in the winter while reducing your carbon footprint.",
      author: "Design Specialist",
      imageStorageId: "kg232k1wymk0ntx22yn9ag7x7x82tph9" as any,
      publishedDate: Date.now(),
    });

    await ctx.db.insert("blogs", {
      title: "2026 Interior Trends: Creating the Heart of Your Custom Home",
      content: "The kitchen and living areas are the heart of any home. This year, we're seeing a move towards 'warm minimalism'—combining sleek, functional lines with natural textures and rich earthy tones. Integrated butler's pantries, oversized stone islands, and seamless indoor-outdoor flows are more popular than ever. Whether you're an avid entertainer or a busy parent, discover how to design a space that balances aesthetic beauty with everyday functionality.",
      author: "Interior Stylist",
      imageStorageId: "kg2brg6ae60p2csh0dmg2qbktd82vajk" as any,
      publishedDate: Date.now(),
    });

    return "✅ Demo data seeded successfully!";
  },
});
