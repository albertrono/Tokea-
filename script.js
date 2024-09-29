// Function to open modals for events
function openModal(eventId) {
    const modal = document.getElementById(eventId);
    modal.style.display = "block";
}

// Function to close modals for events
function closeModal(eventId) {
    const modal = document.getElementById(eventId);
    modal.style.display = "none";
}

// Event listener to close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

// Countdown Timer
const countdown = () => {
    const eventDate = new Date('October 10, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeDiff = eventDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (timeDiff < 0) {
        document.getElementById('countdown').innerHTML = 'Event Started!';
    }
};

// Call the countdown function every second
setInterval(countdown, 1000);






//JS for Events page
// Search Events Functionality
function searchEvents() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        const eventTitle = card.querySelector('h2').textContent.toLowerCase();
        if (eventTitle.includes(searchInput)) {
            card.style.display = 'block'; // Show the event card
        } else {
            card.style.display = 'none'; // Hide the event card
        }
    });
}
// Event Data
const events = [
    {
        title: 'Rock Music Fest',
        date: '2024-10-10',
        type: 'concert',
        location: 'New York, Madison Square Garden',
        description: 'Experience the best of rock music from top bands across the world.',
        image: 'event1.jpg'
    },
    {
        title: 'Jazz Night Live',
        date: '2024-11-15',
        type: 'concert',
        location: 'Chicago, Blue Note Jazz Club',
        description: 'An elegant evening of jazz, featuring renowned musicians.',
        image: 'event2.jpg'
    },
    {
        title: 'Tech Conference 2024',
        date: '2024-09-25',
        type: 'conference',
        location: 'San Francisco, Moscone Center',
        description: 'Learn about the latest trends in technology and innovation.',
        image: 'event3.jpg'
    }]




    //JS for Ticketing page
    function calculateTotal() {
        const eventSelect = document.getElementById("event-select").value;
        const ticketType = document.getElementById("ticket-type").value;
        const ticketQuantity = document.getElementById("ticket-quantity").value;
        const totalPriceElement = document.getElementById("total-price");
    
        if (!eventSelect || !ticketType || ticketQuantity <= 0) {
            alert("Please select event, ticket type, and quantity.");
            totalPriceElement.innerText = "Total: $0";
            return;
        }
    
        // Prices for different ticket types
        const prices = {
            "Regular": 50,
            "VIP": 100,
            "Student": 30
        };
    
        // Calculate total price
        const totalPrice = prices[ticketType] * ticketQuantity;
        totalPriceElement.innerText = `Total: $${totalPrice}`;
    }
    
    // Form submission and validation
    const ticketForm = document.getElementById("ticket-form");
    
    ticketForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for demo purposes
    
        const fullName = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const eventSelect = document.getElementById("event-select").value;
        const ticketType = document.getElementById("ticket-type").value;
        const ticketQuantity = document.getElementById("ticket-quantity").value;
        const paymentMethod = document.getElementById("payment-method").value;
    
        // Validate form fields
        if (!fullName || !email || !eventSelect || !ticketType || !ticketQuantity || !paymentMethod) {
            alert("Please fill in all required fields.");
            return;
        }
    
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        // If everything is valid, show success message (or redirect to payment)
        alert(`Thank you, ${fullName}! Your tickets for ${eventSelect} (${ticketQuantity} ${ticketType} ticket(s)) are being processed.`);
        // You could redirect to a payment gateway or another page here
    });
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    


    //Code for the Contact page
    // Contact Form Submission Handling
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset(); // Reset form fields
});
