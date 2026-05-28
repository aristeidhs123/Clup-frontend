import { EventsAPI, ReviewsAPI } from "../connection_f_b/api.js";

async function loadEventDetails() {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("id");

  const container = document.getElementById("event-details");

  try {
    const event = await EventsAPI.getById(eventId);

    container.innerHTML = `
      <h2>${event.data.ev_title}</h2>
      <p>${event.data.ev_description}</p>
      <p>Location: ${event.data.ev_location}</p>

      <button id="participate-btn">Participate</button>
    `;

    document.getElementById("participate-btn").addEventListener("click", async () => {
      await EventsAPI.participate(eventId);
      alert("Η συμμετοχή καταχωρήθηκε!");
    });

  } catch (error) {
    container.innerHTML = "<p>Σφάλμα φόρτωσης event.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadEventDetails);
