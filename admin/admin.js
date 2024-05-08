// Function to toggle the status and save it in localStorage
function toggleStatus(bnbNumber) {
    const statusElement = document.getElementById(`status${bnbNumber}`);
    const currentStatus = statusElement.textContent;

    // Toggle the status in the dashboard
    const newStatus = (currentStatus === 'Available') ? 'Booked' : 'Available';
    statusElement.textContent = newStatus;

    // Save the new status in localStorage
    localStorage.setItem(`status${bnbNumber}`, newStatus);

 // Send an AJAX request to the PHP file
 const xhr = new XMLHttpRequest();
 xhr.open("POST", "update_status.php", true);
 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
         const newStatus = xhr.responseText;
         // Update the status in the HTML
         const statusElement = document.getElementById(`status${bnbNumber}`);
         statusElement.innerHTML = newStatus;
     }
 };
 xhr.send("bnb_number=" + bnbNumber)
}

// Function to initialize the status from localStorage
function initializeStatusFromLocalStorage(bnbNumber) {
    const statusElement = document.getElementById(`status${bnbNumber}`);
    const savedStatus = localStorage.getItem(`status${bnbNumber}`);

    if (savedStatus) {
        statusElement.textContent = savedStatus;
    }
}

// Add event listeners for each button with the respective bnbNumber
document.getElementById("toggle1").addEventListener("click", function() {toggleStatus(101);});
document.getElementById("toggle2").addEventListener("click", function() {toggleStatus(202);});
document.getElementById("toggle3").addEventListener("click", function() {toggleStatus(303);});
document.getElementById("toggle4").addEventListener("click", function() {toggleStatus(404);});
document.getElementById("toggle5").addEventListener("click", function() {toggleStatus(505);});

// Initialize status from localStorage when the page loads
initializeStatusFromLocalStorage(101);
initializeStatusFromLocalStorage(202);
initializeStatusFromLocalStorage(303);
initializeStatusFromLocalStorage(404);
initializeStatusFromLocalStorage(505);

// const status1 = document.getElementById("status101");
// const bookbtn101 = document.getElementById("bookbtn101");
// status1.style.display = "block";
// if(status1 === "Available"){
//     bookbtn101.style.display = "block";

// }else if(status1 === "Booked"){
//     bookbtn101.style.display = "none";
// }


$(document).ready(function() {
  // Select all buttons whose IDs start with 'bookbtn'
  $('button[id^="bookbtn"]').click(function() {
    const unitId = this.id.slice(7); // Extract the unit ID from the button ID

    console.log("clicked", unitId);
    alert(`Booking confirmation for unit ${unitId}: Click OK to continue`);
    localStorage.setItem(`status${unitId}`, 'Booked');

    // Make an AJAX request to your server, incorporating unitId
    $.ajax({
      url: 'book_unit.php?unitId=' + unitId,
      method: 'POST',
      success: function(response) {
          // Handle successful response from server
          console.log('Booking successful:', response);
          // Update UI or display success message
      },
      error: function(jqXHR, textStatus, errorThrown) {
          // Handle AJAX errors
          console.error('AJAX error:', textStatus, errorThrown);
          // Display error message to the user
      }
  });  
  });
});
