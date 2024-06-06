import { base } from "$app/paths";
let id = 1;

interface proj{
	id: number;
	title: string;
	description: string;
	modal: string;
	image: string;
}

let arduinoVest:proj = {
	id: id++,
	title: "Arduino - Vest with LEDs",
	description: `It included six LEDs soldered to cables running into one Arduino
            Uno, running on a 9V battery.`,
	modal: '<span class="text-secondary">vest</span>',
	image: `${base}/images/Vest_with_LEDs.jpg`
};

let automaticWindow:proj = {
	id: id++,
	title: "Arduino - Automatic window",
	description: `This window prototype adjusts its opening and closing based on
            weather forecasts, room temperature or if it is time to ventilate
            your room.`,
	modal: '<span class="text-secondary">window</span>',
	image: `${base}/images/Automatic_Window.jpeg`
};

let PICvariety:proj = {
	id: id++,
	title: "C - Various PIC projects",
	description:
		"This was about creating one big project on a PIC18 development board for a school project",
	modal: '<span class="text-secondary">pic</span>',
	image: `${base}/images/Embedded_System.jpeg`
};

let thisWebsite:proj = {
	id: id++,
	title: "Sveltekit - This website",
	description: `It was created by using some knowledge from a full-stack development
            Udemy course and by taking bits of code from websites that I liked.`,
	modal: '<span class="text-secondary">website</span>',
	image: `${base}/images/This_Website.jpg`
};

let tableRows:proj = {
	id: id++,
	title: "Excel VBA  - Function that adds rows to a table",
	description: `I've used this fucntion multiple times to create spreadsheets that fell fluent to use. 
	It is a simple macro that makes sure there is an empty row at the end of the table every time.`,
	modal: '<span class="text-secondary">table</span>',
	image: `${base}/images/TableRows.jpg`
};

let stockSS:proj = {
	id: id++,
	title: "Excel - Stock spreadsheet",
	description: `This spreadsheet imports 8 tables of financial data about a given
            stock into one worksheet and uses functions to calculate value
            investing criteria.`,
	modal: '<span class="text-secondary">stockss</span>',
	image: `${base}/images/Stock_analysis.jpg`
};

let info = {
	arduinoVest: arduinoVest,
	automaticWindow: automaticWindow,
	PICvariety: PICvariety,
	thisWebsite: thisWebsite,
	tableRows: tableRows,
	stockSS: stockSS
};

export default info;
