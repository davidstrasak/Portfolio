/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				cyberpunk: ['"Kode Mono"', "monospace"]
			}
		}
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
					neutral: "#ff00ff",
					"neutral-content": "#160016",
					"base-100": "#0A100D",
					"base-200": "#0d1320",
					"base-300": "#090f1a",
					"base-content": "#00ff00",
					info: "#0000ff",
					"info-content": "#c6dbff",
					success: "#00ff00",
					"success-content": "#001600",
					warning: "#facc15",
					"warning-content": "#001600",
					error: "#ff0000",
					"error-content": "#160000"
				}
			}
		]
	},
	plugins: [require("daisyui")]
};
