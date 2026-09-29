const form = document.getElementById("loginForm");

const camera = document.getElementById("camera");
const locationResult = document.getElementById("locationResult");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    console.log("Name:", name);
    console.log("Phone:", phone);

    // Camera permission
    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });

        camera.srcObject = stream;

    } catch (error) {

        console.log("Camera permission denied");

    }

    // Location permission
    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            locationResult.innerHTML =
                `Latitude: ${latitude}<br>
                 Longitude: ${longitude}`;

        },

        function () {

            locationResult.textContent =
                "Location permission denied.";

        }
    );

});