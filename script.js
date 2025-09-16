// Page Handling
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    // Simple login simulation
    loginPage.classList.remove('active');
    dashboardPage.classList.add('active');
});

// Logout
logoutBtn.addEventListener('click', () => {
    dashboardPage.classList.remove('active');
    loginPage.classList.add('active');
});

let map, marker;

// Map initialization
function initMap() {
    const defaultLocation = { lat: 28.6139, lng: 77.209 }; // Delhi default
    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLocation,
        zoom: 12
    });

    marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: "Vehicle Location"
    });

    simulateMovement();
}

// Simulate live movement
function simulateMovement() {
    let lat = 28.6139;
    let lng = 77.209;
    setInterval(() => {
        lat += (Math.random() - 0.5) * 0.001;
        lng += (Math.random() - 0.5) * 0.001;
        const pos = { lat, lng };
        marker.setPosition(pos);
        map.panTo(pos);
    }, 3000);
}

// Engine & Motor Switches
document.getElementById('engineSwitch').addEventListener('change', function(){
    alert(`Engine is now ${this.checked ? 'ON' : 'OFF'}`);
});

document.getElementById('motorSwitch').addEventListener('change', function(){
    alert(`Motors are now ${this.checked ? 'ON' : 'OFF'}`);
});