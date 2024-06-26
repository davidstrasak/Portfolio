import { base } from "$app/paths";
let id = 1;

interface proj {
	id: number;
	image: string;
	title: string;
	description: string;
	modal: any;
}

let ArduinoVest: proj = {
	id: id++,
	image: `${base}/images/Vest_with_LEDs.jpg`,
	title: `<span><span class="text-accent">Arduino</span> - Vest with LEDs</span>`,
	description: `My favourite hardware project. It included six LEDs soldered to cables connected to one Arduino
            Uno, powered by a 9V battery.`,
	modal: "ArduinoVest"
};

let AutomaticWindow: proj = {
	id: id++,
	image: `${base}/images/Automatic_Window.jpeg`,
	title: `<span><span class="text-accent">Arduino</span> - Automatic window</span>`,
	description: `This window prototype <span class="text-secondary">opens and closes</span> based on
			weather forecasts, temperature or if it is time to ventilate
			your room.`,
	modal: "AutomaticWindow"
};

let PICvariety: proj = {
	id: id++,
	image: `${base}/images/PICVariety.jpg`,
	title: `<span><span class="text-accent">C</span> - Various PIC projects</span>`,
	description: `In this school project I was programming <span class="text-secondary">five projects and a menu</span> using the PIC18F46K22 microcontroller in C.`,
	modal: "PICvariety"
};

let ThisWebsite: proj = {
	id: id++,
	image: `${base}/images/This_Website.jpg`,
	title: `<span><span class="text-accent">SvelteKit</span> - This website</span>`,
	description: `I wrote this website myself using sveltekit. It is a <span class="text-secondary">static single page application</span> that makes use of a lot of <span class="text-secondary">web-dev frameworks and github pages</span>.`,
	modal: "ThisWebsite"
};

let StockSS: proj = {
	id: id++,
	image: `${base}/images/Stock_analysis.jpg`,
	title: `<span><span class="text-accent">Excel VBA</span> - Stock spreadsheet</span>`,
	description: `This spreadsheet imports 8 tables of financial data about a given
			stock into one worksheet and <span class="text-secondary">uses functions to calculate value
			investing criteria</span>.`,
	modal: "StockSS"
};

let PiHole: proj = {
	id: id++,
	image: `${base}/images/PiHole.jpg`,
	title: `<span><span class="text-accent">Linux</span> - PiHole application</span>`,
	description: `This is a network-wide ad blocker that uses a Raspberry Pi clone to <span class="text-secondary">block ads and malicious links </span> on all devices connected to my home network.`,
	modal: "PiHole"
};

let info = {
	arduinoVest: ArduinoVest,
	automaticWindow: AutomaticWindow,
	PICvariety: PICvariety,
	thisWebsite: ThisWebsite,
	stockSS: StockSS,
	PiHole: PiHole
};

export default info;
