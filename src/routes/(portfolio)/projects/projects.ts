import { base } from "$app/paths";

interface Project {
	projectTitle: string;
	overview: string;
	thumbnail: string;
	demoLink: string;
	technologies: string[];
}
const vestWithLEDs: Project = {
	projectTitle: "Vest with LEDs",
	overview: `My favourite hardware project. It included six LEDs soldered to cables
		connected to one Arduino Uno, powered by a 9V battery.`,
	thumbnail: `${base}/images/projects/Vest_with_LEDs.jpg`,
	demoLink: `${base}/projects/arduino-vest`,
	technologies: ["Arduino"]
};
const automaticWindow: Project = {
	projectTitle: "Automatic window",
	overview: `This window prototype <span class="text-secondary">opens and closes</span> based on
		weather forecasts, temperature or if it is time to ventilate your room.`,
	thumbnail: `${base}/images/projects/Automatic_Window.jpeg`,
	demoLink: `${base}/projects/automatic-window`,
	technologies: ["Arduino", "Motor control shield"]
};
const stockSpreadsheet: Project = {
	projectTitle: "Stock spreadsheet",
	overview: `This spreadsheet imports 8 tables of financial data about a given stock into one worksheet and
		<span class="text-secondary">uses functions to calculate value investing criteria</span>.`,
	thumbnail: `${base}/images/projects/Stock_analysis.jpg`,
	demoLink: `${base}/projects/stockspreadsheet`,
	technologies: ["Excel VBA"]
};

const picProjects: Project = {
	projectTitle: "Various PIC projects",
	overview: `In this school project I was programming <span class="text-secondary">five projects and a menu</span>
		using the PIC18F46K22 microcontroller in C.`,
	thumbnail: `${base}/images/projects/PICVariety.jpg`,
	demoLink: `${base}/projects/picvariety`,
	technologies: ["C", "PIC microcontrollers"]
};

const portfolio: Project = {
	projectTitle: "This website",
	overview: `I wrote this website myself using sveltekit. It is a <span class="text-secondary">static
		single page application</span> that makes use of a lot of
		web development frameworks and GitHub Pages.`,
	thumbnail: `${base}/images/projects/This_Website.jpg`,
	demoLink: `${base}/projects/this-website`,
	technologies: ["SvelteKit", "GitHub Pages"]
};

const piHole: Project = {
	projectTitle: "PiHole application",
	overview: `This is a network-wide ad blocker that uses a Raspberry Pi clone to <span class="text-secondary">
		block ads and malicious links</span> on all devices connected to my home network.`,
	thumbnail: `${base}/images/projects/PiHole.jpg`,
	demoLink: `${base}/projects/pi-hole`,
	technologies: ["Linux", "Raspberry Pi"]
};

const ConveyorController: Project = {
	projectTitle: "Conveyor controller",
	overview: `This is a system I designed to make it as easy as possible to check quality of conveyor installation as a Bachelor's thesis. In this project I designed a <span class="text-secondary">PCB with a microcontroller</span>, a <span class="text-secondary">mobile application</span> and I made them communicate through <span class="text-secondary>nodeMCU</span>.`,
	thumbnail: `${base}/images/projects/Conveyor_Controller.jpg`,
	demoLink: `${base}/projects/conveyor-controller`,
	technologies: ["PCB Design", "Arduino", "Mobile application", "NodeMCU"]
};

const projects: Project[] = [
	ConveyorController,
	picProjects,
	portfolio,
	piHole,
	stockSpreadsheet,
	vestWithLEDs,
	automaticWindow
];

export default projects;
