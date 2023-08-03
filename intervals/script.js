// Function to format time in HH:MM:SS format
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  // Function to update the time counter
  function updateTimeCounter() {
    // Calculate the time spent on the webpage (in seconds)
    timeSpent++;
  
    // Update the displayed time
    const timeCounter = document.getElementById('timeCounter');
    timeCounter.textContent = formatTime(timeSpent);
  }
  
  // Initialize the time counter variable
  let timeSpent = 0;
  
  // Start the interval to update the time counter every second (1000 milliseconds)
  const intervalId = setInterval(updateTimeCounter, 1000);
  
  // You may add other event listeners or functionality as needed for your webpage.
  // For this example, we are just updating the time counter.

