import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				cyberpunk: ['"Kode Mono"', "monospace"]
			},
			margin: {
				"10px": "10px"
			}
		}
		// fontSize: {
		// 	sm: "0.8rem",
		// 	base: "1rem",
		// 	xl: "1.25rem",
		// 	"2xl": "1.563rem",
		// 	"3xl": "1.953rem",
		// 	"4xl": "2.441rem",
		// 	"5xl": "3.052rem"
		// }
	},
	daisyui: {
		themes: [
			{
				darkcyberpunk: {
					primary: "#00ff00",
					"primary-content": "#0a1301",
					secondary: "#E0E722",
					"secondary-content": "#150f00",
					accent: "#04D9FF",
					"accent-content": "#001616",
					neutral: "#111827",
					"neutral-content": "#160016",
					"base-100": "#0A100D",
					"base-200": "#0d1320",
					"base-300": "#090f1a",
					"base-content": "#00ff00",
					info: "#e5e7eb",
					"info-content": "#c6dbff",
					success: "#00ff00",
					"success-content": "#001600",
					warning: "#facc15",
					"warning-content": "#001600",
					error: "#ff0000",
					"error-content": "#160000"
				},
				breeze: {
					primary: "#6807f0",
					secondary: "#6b21a8",
					accent: "#db2777",
					neutral: "#170824",
					"base-100": "#f2f2f2",
					info: "#2ac3de",
					success: "#9ece6a",
					warning: "#e0af68",
					error: "#f7768e"
				}
			},
			"lemonade"
		]
	},
	plugins: [daisyui]
};
