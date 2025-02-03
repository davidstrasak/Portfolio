import { base } from "$app/paths";
// ...existing code...
interface Project {
	completionDate: string;
	projectTitle: string;
	overview: string;
	thumbnail: string;
	demoLink: string;
	technologies: string[];
}

const projects: Project[] = [
	{
		completionDate: "01.01.2020",
		projectTitle: "Arduino - Vest with LEDs",
		overview: `My favourite hardware project. It included six LEDs soldered to cables
            connected to one Arduino Uno, powered by a 9V battery.`,
		thumbnail: `${base}/images/projects/Vest_with_LEDs.jpg`,
		demoLink: `${base}/projects/arduino-vest`,
		technologies: []
	},
	{
		completionDate: "02.01.2020",
		projectTitle: "Arduino - Automatic window",
		overview: `This window prototype <span class="text-secondary">opens and closes</span> based on
            weather forecasts, temperature or if it is time to ventilate your room.`,
		thumbnail: `${base}/images/projects/Automatic_Window.jpeg`,
		demoLink: `${base}/projects/automatic-window`,
		technologies: []
	},
	{
		completionDate: "03.01.2020",
		projectTitle: "C - Various PIC projects",
		overview: `In this school project I was programming <span class="text-secondary">five projects and a menu</span>
            using the PIC18F46K22 microcontroller in C.`,
		thumbnail: `${base}/images/projects/PICVariety.jpg`,
		demoLink: `${base}/projects/picvariety`,
		technologies: []
	},
	{
		completionDate: "04.01.2020",
		projectTitle: "SvelteKit - This website",
		overview: `I wrote this website myself using sveltekit. It is a <span class="text-secondary">static
            single page application</span> that makes use of a lot of <span class="text-secondary">
            web-dev frameworks and GitHub Pages</span>.`,
		thumbnail: `${base}/images/projects/This_Website.jpg`,
		demoLink: `${base}/projects/this-website`,
		technologies: []
	},
	{
		completionDate: "05.01.2020",
		projectTitle: "Excel VBA - Stock spreadsheet",
		overview: `This spreadsheet imports 8 tables of financial data about a given stock into one worksheet and
            <span class="text-secondary">uses functions to calculate value investing criteria</span>.`,
		thumbnail: `${base}/images/projects/Stock_analysis.jpg`,
		demoLink: `${base}/projects/stockspreadsheet`,
		technologies: []
	},
	{
		completionDate: "06.01.2020",
		projectTitle: "Linux - PiHole application",
		overview: `This is a network-wide ad blocker that uses a Raspberry Pi clone to <span class="text-secondary">
            block ads and malicious links</span> on all devices connected to my home network.`,
		thumbnail: `${base}/images/projects/PiHole.jpg`,
		demoLink: `${base}/projects/pi-hole`,
		technologies: []
	}
];

export default projects;
