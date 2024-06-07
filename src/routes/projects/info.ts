import { base } from "$app/paths";
let id = 1;

interface proj {
	id: number;
	image: string;
	title: string;
	description: string;
	modal: any;
}

let arduinoVest:proj = {
	id: id++,
	image: `${base}/images/Vest_with_LEDs.jpg`,
	title: `<p><span class="text-accent">Arduino</span> - Vest with LEDs</p>`,
	description: `My favourite hardware project. It included six LEDs soldered to cables connected to one Arduino
            Uno, powered by a 9V battery.`,
	modal: "ArduinoVest"
};

let automaticWindow:proj = {
	id: id++,
	image: `${base}/images/Automatic_Window.jpeg`,
	title: `<p><span class="text-accent">Arduino</span> - Automatic window</p>`,
	description: `This window prototype adjusts its opening and closing based on
			weather forecasts, temperature or if it is time to ventilate
			your room.`,
	modal: `<span class="text-secondary">window</span>`
};

let PICvariety:proj = {
	id: id++,
	image: `${base}/images/PICVariety.jpg`,
	title: `<p><span class="text-accent">C</span> - Various PIC projects</p>`,
	description:
		`This was about creating one big project on a PIC18 development board for a school project`,
	modal: `<span class="text-secondary">pic</span>`
};

let thisWebsite:proj = {
	id: id++,
	image: `${base}/images/This_Website.jpg`,
	title: `<p><span class="text-accent">SvelteKit</span> - This website</p>`,
	description: `It was created by using some knowledge from a full-stack development
			Udemy course and by taking bits of code from websites that I liked.`,
	modal: `<span class="text-secondary">website</span>`
};

let stockSS:proj = {
	id: id++,
	image: `${base}/images/Stock_analysis.jpg`,
	title: `<p><span class="text-accent">Excel VBA</span> - Stock spreadsheet</p>`,
	description: `This spreadsheet imports 8 tables of financial data about a given
			stock into one worksheet and uses functions to calculate value
			investing criteria.`,
	modal: `<span class="text-secondary">stockss</span>`
};

let info = {
	arduinoVest: arduinoVest,
	automaticWindow: automaticWindow,
	PICvariety: PICvariety,
	thisWebsite: thisWebsite,
	stockSS: stockSS
};

export default info;
