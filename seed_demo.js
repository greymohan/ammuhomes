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
            title: "5 Tips for First-Time Home Builders",
            content: "Building your first home can be a daunting process. In this post, we share our top 5 tips for a smooth and successful build in Western Sydney...",
            author: "Ammu Homes Admin",
            publishedDate: Date.now(),
            imageStorageId: null
        });

        await addBlog({
            title: "Why Choose a Custom Builder?",
            content: "Standard home designs don't always fit your lifestyle. Discover the benefits of working with a custom builder to create your perfect space...",
            author: "Ammu Homes Admin",
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
