import { fetchProjects, addProject, addBlog } from './js/convex-logic.js';

async function seedDemoData() {
    console.log("🚀 Starting Demo Data Seed...");

    try {
        // 1. Create Demo Projects
        console.log("Creating demo projects...");
        await addProject({
            title: "Modern Family Home - Penrith",
            description: "A beautiful 4-bedroom home featuring open-plan living and premium finishes.",
            status: "Completed",
            imageStorageId: null // We'll add real images via the admin panel
        });

        await addProject({
            title: "Luxury Villa - Parramatta",
            description: "High-end custom build with bespoke architectural features and landscaping.",
            status: "In Progress",
            imageStorageId: null
        });

        // 2. Create Demo Blogs
        console.log("Creating demo blog posts...");
        await addBlog({
            title: "The Ultimate Guide to Building Your Custom Home: Why Bespoke is Better",
            content: "Building a custom home is more than just a construction project; it's the realization of a lifelong dream. Unlike volume-built houses, a custom home is tailored specifically to your family's lifestyle, site orientation, and future needs. From selecting the perfect plot to choosing the finest finishes, every decision is yours. At Ammu Homes, we specialize in turning these visions into reality, ensuring that your home is as unique as your story. Discover why more homeowners are choosing the custom path in 2026.",
            author: "Ammu Homes Team",
            publishedDate: Date.now(),
            imageStorageId: null
        });

        await addBlog({
            title: "Navigating the DA and CDC Process: What You Need to Know for Your Next Build",
            content: "Starting a new build can feel overwhelming, especially with the complex local council requirements in NSW. Whether you're going through a Development Application (DA) or Complying Development Certificate (CDC), understanding the process is key to a smooth project. We work closely with consultants and local councils across Sydney and the Macarthur region to streamline approvals. In this post, we break down the timelines, costs, and common pitfalls to avoid when planning your custom home.",
            author: "Building Consultant",
            publishedDate: Date.now(),
            imageStorageId: null
        });

        await addBlog({
            title: "Sustainable Luxury: Designing Energy-Efficient Homes for the Future",
            content: "Modern custom homes are leading the way in sustainability. By incorporating passive solar design, high-performance insulation, and smart energy systems, you can create a home that is both luxurious and cost-effective to run. At Ammu Homes, we believe that 'green' doesn't mean compromising on style. Learn how we utilize thermal mass, cross-ventilation, and sustainable materials to build homes that stay cool in the Sydney summer and warm in the winter while reducing your carbon footprint.",
            author: "Design Specialist",
            publishedDate: Date.now(),
            imageStorageId: null
        });

        await addBlog({
            title: "2026 Interior Trends: Creating the Heart of Your Custom Home",
            content: "The kitchen and living areas are the heart of any home. This year, we're seeing a move towards 'warm minimalism'—combining sleek, functional lines with natural textures and rich earthy tones. Integrated butler's pantries, oversized stone islands, and seamless indoor-outdoor flows are more popular than ever. Whether you're an avid entertainer or a busy parent, discover how to design a space that balances aesthetic beauty with everyday functionality.",
            author: "Interior Stylist",
            publishedDate: Date.now(),
            imageStorageId: null
        });

        console.log("✅ Demo data seeded successfully!");
        console.log("Refresh your admin dashboard to see the updates.");
    } catch (error) {
        console.error("❌ Seeding failed:", error);
        console.log("Tip: Make sure you have run 'npx convex dev' first to deploy your backend.");
    }
}

// Run the seed
seedDemoData();
