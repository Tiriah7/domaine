// Initialize slide indices for each slideshow container
let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
let slideIndex5 = 1;
let slideIndex7 = 1;


// Function to show slides for a given container
function showSlides(containerClass, n) {
    let i;
    let slides = document.querySelector("." + containerClass).getElementsByClassName("mySlides");
    if (n > slides.length) { n = 1 }
    if (n < 1) { n = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[n - 1].style.display = "block";
}

// Initial display for each slideshow
showSlides("slideshow-container1", slideIndex1);
showSlides("slideshow-container2", slideIndex2);
showSlides("slideshow-container3", slideIndex3);
showSlides("slideshow-container4", slideIndex4);
showSlides("slideshow-container5", slideIndex5);
showSlides("slideshow-container7", slideIndex7);


// Function to navigate to the next or previous slide for a given container
function navigateSlides(n, containerClass) {
   let slides = document.querySelector("." + containerClass).getElementsByClassName("mySlides");
    
    if (containerClass === "slideshow-container1") {
        slideIndex1 += n;

        if (slideIndex1 > slides.length) {
            slideIndex1 = 1; // Wrap around to the first slide
        }
        if (slideIndex1 < 1) {
            slideIndex1 = slides.length; // Wrap around to the last slide
        }
        showSlides(containerClass, slideIndex1);


    } else if (containerClass === "slideshow-container2") {
        slideIndex2 += n;

        if (slideIndex2 > slides.length) {
            slideIndex2 = 1; // Wrap around to the first slide
        }
        if (slideIndex2 < 1) {
            slideIndex2 = slides.length; // Wrap around to the last slide
        }
        showSlides(containerClass, slideIndex2);

    
    } else if (containerClass === "slideshow-container3") {
        slideIndex3 += n;

        if (slideIndex3 > slides.length) {
            slideIndex3 = 1; // Wrap around to the first slide
        }
        if (slideIndex3 < 1) {
            slideIndex3 = slides.length; // Wrap around to the last slide
        }
        showSlides(containerClass, slideIndex3);


    } else if (containerClass === "slideshow-container4") {
        slideIndex4 += n;

        if (slideIndex4 > slides.length) {
            slideIndex4 = 1; // Wrap around to the first slide
        }
        if (slideIndex4 < 1) {
            slideIndex4 = slides.length; // Wrap around to the last slide
        }
        showSlides(containerClass, slideIndex4);


    } else if (containerClass === "slideshow-container5") {
        slideIndex5 += n;

        if (slideIndex5 > slides.length) {
            slideIndex5 = 1; // Wrap around to the first slide
        }
        if (slideIndex5 < 1) {
            slideIndex5 = slides.length; // Wrap around to the last slide
        }
        showSlides(containerClass, slideIndex5);


    } else if (containerClass === "slideshow-container7") {
        slideIndex7 += n;

        if (slideIndex7 > slides.length) {
            slideIndex7 = 1; // Wrap around to the first slide
        }
        if (slideIndex7 < 1) {
            slideIndex7 = slides.length; // Wrap around to the last slide
        }
        showSlides(containerClass, slideIndex7);
    }
}

// Next/previous controls for each container
document.querySelector(".prev1").addEventListener("click", function () {
    navigateSlides(-1, "slideshow-container1");
});

document.querySelector(".next1").addEventListener("click", function () {
    navigateSlides(1, "slideshow-container1");
});

document.querySelector(".prev2").addEventListener("click", function () {
    navigateSlides(-1, "slideshow-container2");
});

document.querySelector(".next2").addEventListener("click", function () {
    navigateSlides(1, "slideshow-container2");
});

document.querySelector(".prev3").addEventListener("click", function () {
    navigateSlides(-1, "slideshow-container3");
});

document.querySelector(".next3").addEventListener("click", function () {
    navigateSlides(1, "slideshow-container3");
});

document.querySelector(".prev4").addEventListener("click", function () {
    navigateSlides(-1, "slideshow-container4");
});

document.querySelector(".next4").addEventListener("click", function () {
    navigateSlides(1, "slideshow-container4");
});

document.querySelector(".prev5").addEventListener("click", function () {
    navigateSlides(-1, "slideshow-container5");
});

document.querySelector(".next5").addEventListener("click", function () {
    navigateSlides(1, "slideshow-container5");
});

document.querySelector(".prev7").addEventListener("click", function () {
    navigateSlides(-1, "slideshow-container7");
});

document.querySelector(".next7").addEventListener("click", function () {
    navigateSlides(1, "slideshow-container7");
});


// //
// Get the toggle button and content elements
//
const toggleButton = document.getElementById('toggleButton');
const toggleButton1 = document.getElementById('toggleButton1')
const contentElements = document.querySelectorAll('[data-en]');
//
// Function to toggle between English and French
function toggleLanguage() {
    contentElements.forEach(element => {
        const currentLanguage = element.getAttribute('data-lang') || 'en'; // Default to English
        const newLanguage = currentLanguage === 'en' ? 'fr' : 'en'; // Toggle between English and French
        element.setAttribute('data-lang', newLanguage); // Set the new language

        // Update the element's text content based on the selected language
        element.textContent = element.getAttribute(`data-${newLanguage}`);
    });
}

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', toggleLanguage);
toggleButton1.addEventListener('click',toggleLanguage);

//
//
const navLinks = document.querySelectorAll('nav a');

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
    event.preventDefault();

    // Get the target section's ID from the link's href
    const targetId = this.getAttribute('href').substring(1);

    // Find the target section by its ID
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });
}
//
//
// Get the contact button and popup elements
const contactButton = document.getElementById('contactButton');
const contactButton1 = document.getElementById('contactButton1');
const contactPopup = document.getElementById('contactPopup');
const closeButton = document.getElementById('closeButton');

// Add click event listeners to open and close the popup
contactButton.addEventListener('click', openContactPopup);
contactButton1.addEventListener('click',openContactPopup);
closeButton.addEventListener('click', closeContactPopup);

function openContactPopup() {
    contactPopup.style.display = 'block';
}

function closeContactPopup() {
    contactPopup.style.display = 'none';
}

// Close the popup if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === contactPopup) {
        closeContactPopup();
    }
});
//
//
// Function to open the popup
function openPopup() {
    var popup = document.querySelector(".popup1");
    popup.style.right = "0"; // Slide in from the right
    popup.style.display = "block";
  }
  
  // Function to close the popup
  function closePopup() {
    var popup = document.querySelector(".popup1");
    popup.style.right = "-400px"; // Slide out to the right
    popup.style.display = "none";
  }
  document.querySelector(".mobile-menu-icon").addEventListener("click", function() {
    var mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
});
//
//
// Function to update the status from localStorage
function updateStatusFromStorage(bnbNumber) {
    const statusElement = document.getElementById(`status${bnbNumber}`);
    const storedStatus = localStorage.getItem(`status${bnbNumber}`);

    // Update the status in the index.html
    if (storedStatus) {
        statusElement.textContent = storedStatus;
    }
}

// Call the function to update the status from localStorage for each BNB listing
updateStatusFromStorage(1);
updateStatusFromStorage(2);
updateStatusFromStorage(3);
updateStatusFromStorage(4);
updateStatusFromStorage(5);

// JavaScript for the login popup
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and popup
    const loginButton = document.getElementById("LoginButton");
    const loginButtons = document.getElementById("LoginButton1");
    const loginButtons1 = document.getElementById("LoginButton2");
    const RegPopup = document.getElementById("RegPopup");

    // Add a click event listener to the Login button
    loginButton.addEventListener("click", function () {
        // Toggle the visibility of the login popup
        if (RegPopup.style.display === "none" || RegPopup.style.display === "") {
            RegPopup.style.display = "block"; // Show the popup
        } else {
            RegPopup.style.display = "none"; // Hide the popup
        }
    });
    loginButtons.addEventListener("click", function () {
        // Toggle the visibility of the login popup
        if (RegPopup.style.display === "none" || RegPopup.style.display === "") {
            RegPopup.style.display = "block"; // Show the popup
        } else {
            RegPopup.style.display = "none"; // Hide the popup
        }
    });
    loginButtons1.addEventListener("click", function () {
        // Toggle the visibility of the login popup
        if (RegPopup.style.display === "none" || RegPopup.style.display === "") {
            RegPopup.style.display = "block"; // Show the popup
        } else {
            RegPopup.style.display = "none"; // Hide the popup
        }
    });
});
function closePopup1() {
    var popup = document.querySelector(".popup2");
    popup.style.right = "-400px"; // Slide out to the right
    popup.style.display = "none";
  }
  function closePopup2() {
    var popup = document.querySelector(".popup3");
    popup.style.right = "-400px"; // Slide out to the right
    popup.style.display = "none";
  }

//   document.addEventListener("DOMContentLoaded", function () {
//     const logbtn = document.getElementById("logbtn");
//     const LoginPopup = document.getElementById("LoginPopup");

//     logbtn.addEventListener("click", function () {
//         if(RegPopup.style.display === "block" || RegPopup.style.display === ""){
//             RegPopup.style.display = "none";
//             LoginPopup.style.display = "block"; 
//         } else {
//             LoginPopup.style.display = "none";
//         }
//     })
//   });
//   document.addEventListener("DOMContentLoaded", function() {
//     const regbtn = document.getElementById("regbtn");
//     const LoginPopup =document.getElementById("LoginPopup");

//     regbtn.addEventListener("click", function(){
//         if(RegPopup.style.display === "block" || RegPopup.style.display === ""){
//             RegPopup.style.display = "none";
//             LoginPopup.style.display = "block"; 
//         } else {
//             LoginPopup.style.display = "none";
//         }
//     }) 
//   })

  let textContent1, textContent2, textContent3, textContent4, textContent5;
// Send an AJAX request to check login status
fetch('check_login.php')
    .then(response => response.json())
    .then(data => {
        if (data.userLoggedIn) {


            // If the user is logged in, make the status element visible.
            //status1
            const status1 = document.getElementById("status1");
            const textContent1 = localStorage.getItem("status101");
            const bookbtn101 = document.getElementById("bookbtn101");
            status1.style.display = "block";
            if(textContent1 === "Available"){
                bookbtn101.style.display = "block";
        
            }else if(textContent1 === "Booked"){
                bookbtn101.style.display = "none";
            }

            //status2
            const status2 = document.getElementById("status2");
            const textContent2 = localStorage.getItem("status202");
            const bookbtn202 = document.getElementById("bookbtn202");
            status2.style.display = "block";
            if(textContent2 === "Available"){
                bookbtn202.style.display = "block";
        
            }else if(textContent2 === "Booked"){
                bookbtn202.style.display = "none";
            }
        
            //status3
            const status3 = document.getElementById("status3");
            const textContent3 = localStorage.getItem("status303");
            const bookbtn303 = document.getElementById("bookbtn303");
            status3.style.display = "block";
            if(textContent3 === "Available"){
                bookbtn303.style.display = "block";
        
            }else if(textContent3 === "Booked"){
                bookbtn303.style.display = "none";
            }
        
            //status4
            const status4 = document.getElementById("status4");
            const textContent4 = localStorage.getItem("status404");
            const bookbtn404 = document.getElementById("bookbtn404");
            status4.style.display = "block";
            if(textContent4 === "Available"){
                bookbtn404.style.display = "block";
        
            }else if(textContent4 === "Booked"){
                bookbtn404.style.display = "none";
            }
        
            //status5
            const status5 = document.getElementById("status5");
            const textContent5 = localStorage.getItem("status505");
            const bookbtn505 = document.getElementById("bookbtn505");
            status5.style.display = "block";
            if(textContent5 === "Available"){
                bookbtn505.style.display = "block";
        
            }else if(textContent5 === "Booked"){
                bookbtn505.style.display = "none";
            }
        
            
        }
    })
    .catch(error => {
        console.error('Error checking login status:', error);
    });


// Use jQuery to fetch the status from the server
// Function to fetch and update status based on bnb_number and id
function fetchAndUpdateStatus(bnb_number, id) {
    $.ajax({
        url: 'get_status.php', // Replace with the correct URL of your server-side script
        method: 'GET',
        data: { bnb_number: bnb_number },
        success: function(response) {
            // Update the status in the HTML
            $(`#${id}`).text(response);
            // Set local storage to be the same as the status in the HTML
            localStorage.setItem(id, response);
        },
        error: function() {
            // Handle errors, e.g., set the status to an error message
            $(`#${id}`).text('Error fetching status');
        }
    });
}

// Use the function to fetch and update status for each element
$(document).ready(function() {
    fetchAndUpdateStatus(101, 'status1');
    fetchAndUpdateStatus(202, 'status2');
    fetchAndUpdateStatus(303, 'status3');
    fetchAndUpdateStatus(404, 'status4');
    fetchAndUpdateStatus(505, 'status5');
});

document.getElementById("regbtn").addEventListener("click", function(event) {
  
    const enteredEmail = document.getElementById("new_email").value;
    localStorage.setItem("registeredEmail", enteredEmail);
  
    // Retrieve the stored email from local storage
    const storedEmail = localStorage.getItem("registeredEmail");
  
    // Log the stored email to the console
    console.log("Stored email:", storedEmail);
  
  });
  


