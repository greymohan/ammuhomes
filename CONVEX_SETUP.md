# Setting Up Your Convex Backend

Follow these steps to connect your Ammu Homes website to the Convex database and file storage.

## 1. Create a Convex Account
If you haven't already, sign up at [convex.dev](https://www.convex.dev/).

## 2. Initialize the Project
Open your terminal in the project directory and run:

```bash
npx convex dev
```

- This will ask you to log in and create a new project.
- It will automatically detect your `convex/` folder and deploy your schema and functions.
- Once finished, it will provide your **Deployment URL**.

## 3. Configure the Website
✅ **Configuration Complete**: Your deployment URL `https://brilliant-guineapig-877.convex.cloud` has been added to `js/convex-logic.js`.

## 4. Admin Access
The `admin.html` page is currently protected by a simple password:
**Password:** `ammuhomes2026`

You can change this password in the `<script>` tag at the bottom of `admin.html`.

## 5. Deployment
When you are ready to go live:
1. Run `npx convex deploy` to push your final changes to production.
2. Ensure your GitHub repo is updated with the latest code.

---

## 🚨 IMPORTANT: Running Locally
Because this project uses **JavaScript Modules** (for Convex), you **cannot** simply double-click the `.html` files in your browser. If you do, you will see "CORS" errors and login will fail.

### How to run correctly:
1. Open your terminal in the project folder.
2. Run this command:
   ```bash
   npx serve .
   ```
3. Open the link it gives you (usually `http://localhost:3000`).
4. **Everything will work perfectly from there!**
