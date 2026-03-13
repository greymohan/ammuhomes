import { ConvexClient } from "https://esm.sh/convex@latest/browser";

// Your actual Convex Deployment URL
const CONVEX_URL = "https://amiable-butterfly-994.convex.cloud";

const client = new ConvexClient(CONVEX_URL);

/**
 * PROJECTS LOGIC
 */
export async function fetchProjects() {
    try {
        const cached = sessionStorage.getItem('ammu_projects');
        if (cached) {
            // Fetch fresh data in background
            client.query("projects:getProjects").then(res => {
                sessionStorage.setItem('ammu_projects', JSON.stringify(res));
            }).catch(e => console.error(e));
            return JSON.parse(cached);
        }

        const data = await client.query("projects:getProjects");
        sessionStorage.setItem('ammu_projects', JSON.stringify(data));
        return data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
}

export async function addProject(projectData) {
    try {
        return await client.mutation("projects:addProject", projectData);
    } catch (error) {
        console.error("Error adding project:", error);
        throw error;
    }
}

export async function updateProject(projectData) {
    try {
        return await client.mutation("projects:updateProject", projectData);
    } catch (error) {
        console.error("Error updating project:", error);
        throw error;
    }
}

export async function deleteProject(id) {
    try {
        return await client.mutation("projects:deleteProject", { id });
    } catch (error) {
        console.error("Error deleting project:", error);
        throw error;
    }
}

/**
 * BLOGS LOGIC
 */
export async function fetchBlogs() {
    try {
        const cached = sessionStorage.getItem('ammu_blogs');
        if (cached) {
            // Fetch fresh data in background
            client.query("blogs:getBlogs").then(res => {
                sessionStorage.setItem('ammu_blogs', JSON.stringify(res));
            }).catch(e => console.error(e));
            return JSON.parse(cached);
        }

        const data = await client.query("blogs:getBlogs");
        sessionStorage.setItem('ammu_blogs', JSON.stringify(data));
        return data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
}

export async function addBlog(blogData) {
    try {
        return await client.mutation("blogs:addBlog", blogData);
    } catch (error) {
        console.error("Error adding blog:", error);
        throw error;
    }
}

export async function updateBlog(blogData) {
    try {
        return await client.mutation("blogs:updateBlog", blogData);
    } catch (error) {
        console.error("Error updating blog:", error);
        throw error;
    }
}

export async function deleteBlog(id) {
    try {
        return await client.mutation("blogs:deleteBlog", { id });
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw error;
    }
}

/**
 * IMAGE UPLOAD LOGIC
 */

async function convertToWebP(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Set max dimension to 2000px while maintaining aspect ratio
                const maxDim = 2000;
                let width = img.width;
                let height = img.height;

                if (width > maxDim || height > maxDim) {
                    if (width > height) {
                        height = Math.round((height * maxDim) / width);
                        width = maxDim;
                    } else {
                        width = Math.round((width * maxDim) / height);
                        height = maxDim;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    if (blob) {
                        // Create a new File object from the blob
                        const optimizedFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".webp", {
                            type: "image/webp"
                        });
                        resolve(optimizedFile);
                    } else {
                        reject(new Error("Canvas toBlob failed"));
                    }
                }, 'image/webp', 0.85); // 0.85 quality for webp
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export async function uploadImage(file) {
    try {
        // Automatically optimize to WebP before upload
        console.log("Optimizing image to WebP...");
        const optimizedFile = await convertToWebP(file);
        console.log(`Optimization complete: ${(file.size / 1024).toFixed(1)}KB -> ${(optimizedFile.size / 1024).toFixed(1)}KB`);

        // 1. Get an upload URL
        const postUrl = await client.mutation("projects:generateUploadUrl");

        // 2. Post the file to the URL
        const result = await fetch(postUrl, {
            method: "POST",
            headers: { "Content-Type": optimizedFile.type },
            body: optimizedFile,
        });

        const { storageId } = await result.json();
        return storageId;
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

export async function getImageUrl(storageId) {
    if (!storageId) return null;
    return await client.query("projects:getImageUrl", { storageId });
}
