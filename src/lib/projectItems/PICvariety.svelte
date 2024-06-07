<script>
	import { base } from "$app/paths";
</script>

<img
	style="float: right"
	src="{base}/images/Embedded_System.jpeg"
	width="30%"
	height="30%"
	alt="A board with a bunch of electrical parts "
/>
<div>
	<a
		style="color: #ea1f4b"
		href="https://github.com/davidstrasak/PIC18_UART_LED_controls"
		target="_blank"><h2 style="color: #ea1f4b">Code here</h2></a
	>
	<h2>Lessons learned:</h2>
	<ul>
		<li>How to program embedded systems.</li>
		<li>Setting TRIS, PORT and LAT pins.</li>
		<li>Getting to know timers, interrupts and UART.</li>
		<li>And also it was my first experience programming in C.</li>
	</ul>
	<h2>Description:</h2>
	<p>
		I've been able to take a course on working with embedded systems at school. The main curriculum
		is programming in the C language and programming the PIC18F46K22 processor by MicroChip.
	</p>
	<p>
		The whole concept of low level programming is interesting to me and I will be doing some more
		when possible.
	</p>
	<p>
		This specific lesson is about using commands to set different functions, which control the LEDs
		(On/Off, Blinking, Continuous, Blinking for certain times). The processor is communicating with
		the UART module, which is communicating with the PC through USB.
	</p>
</div>
