import daisyui from "daisyui";
import { readable } from "svelte/store";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Roboto", "sans-serif"],
				systemancer: ["Kode mono", "serif"]
			}
		},
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"5xl": "3.052rem"
		}
	},
	daisyui: {
		themes: [
			{
				systemancer: {
					primary: "#00FF00",
					secondary: "#ADFFAD",
					accent: "#87CEEB",
					neutral: "#2a323c",
					"neutral-content": "#CCCCCC",
					"base-100": "#1E1E1E",
					"base-200": "#191e24",
					"base-300": "#121212",
					"base-content": "#CCCCCC"
				}
				// darkcyberpunk: {
				//   primary: "#00ff00",
				//   "primary-content": "#0a1301",
				//   secondary: "#E0E722",
				//   "secondary-content": "#150f00",
				//   accent: "#04D9FF",
				//   "accent-content": "#001616",
				//   neutral: "#111827",
				//   "neutral-content": "#160016",
				//   "base-100": "#000000",
				//   "base-200": "#000000",
				//   "base-300": "#000000",
				//   "base-content": "#00ff00",
				//   info: "#e5e7eb",
				//   "info-content": "#c6dbff",
				//   success: "#00ff00",
				//   "success-content": "#001600",
				//   warning: "#facc15",
				//   "warning-content": "#001600",
				//   error: "#ff0000",
				//   "error-content": "#160000",
				// },
			}
		]
	},

	plugins: [daisyui]
};
