# TimmerJS CDN

Welcome to **TimmerJS CDN**! This is a lightweight and easy-to-use JavaScript library for creating and controlling timers on your website. You can start, pause, and stop timers with minimal setup using our CDN-hosted version.


## CDN Link

```bash
https://cdn.jsdelivr.net/gh/abhaykhawas/timmerJS-CDN/main.js
```

## Example Usage

### HTML Structure

To use the timer, first create the necessary HTML elements for displaying and controlling the timer:

```html
<div class="container">
  <span id="hh">00</span> :
  <span id="mm">00</span> :
  <span id="ss">00</span>
  <br><br>
  
  <button id="start_timmer">Start</button>
  <button id="stop_timmer">Stop/Reset</button>
  <button id="pause_timmer">Pause</button>
</div>
```

- id="hh", id="mm", and id="ss" are used to display the hours, minutes, and seconds of the timer. These IDs are essential for the timer to work properly and will be updated dynamically as the timer runs.

## JavaScript Usage

```bash
// Import the Timmer class from the CDN
import { Timmer } from "https://cdn.jsdelivr.net/gh/abhaykhawas/timmerJS-CDN/main.js";

// Create a new instance of the Timmer class
const time1 = new Timmer();

// Start the timer when the "Start" button is clicked
document.getElementById('start_timmer').addEventListener('click', () => {
  time1.startTimmer('hh', 'mm', 'ss');  // Starts the timer and updates the HTML elements
});

// Stop or reset the timer when the "Stop/Reset" button is clicked
document.getElementById('stop_timmer').addEventListener('click', () => {
  time1.stopTimmer('hh', 'mm', 'ss');  // Stops and resets the timer to 00:00:00
});

// Pause the timer when the "Pause" button is clicked
document.getElementById('pause_timmer').addEventListener('click', () => {
  time1.pauseTimmer();  // Pauses the timer but doesn't reset it
});
```