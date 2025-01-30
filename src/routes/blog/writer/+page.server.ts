import { json } from "@sveltejs/kit";
import * as fs from "fs/promises";
/** @type {import('./$types').RequestHandler} */

export const prerender = false;

interface WriteFileRequest {
	path: string;
	content: string;
}

export const actions = {
	save: async ({ cookies, request }) => {
		try {
			const data = await request.formData();
			let html = data.get("html") as string;
			let path = data.get("path") as string;
			let fullPath = `src/routes/blog/(posts)/${path}/+page.svelte`;

			// Create directory if it doesn't exist
			const directory = fullPath.split("/").slice(0, -1).join("/");
			await fs.mkdir(directory, { recursive: true });

			// Write the file
			await fs.writeFile(fullPath, html);

			return { success: true, path: fullPath };
		} catch (error) {
			console.error("Error saving blog:", error);
			return {
				error: "Failed to save blog",
				details: error instanceof Error ? error.message : "Unknown error"
			};
		}
	}
};
