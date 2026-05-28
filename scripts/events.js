import { EventsAPI } from "../connection_f_b/api.js";

async function loadEvents() {
  try {
    const result = await EventsAPI.getAll();
    const events = result.data || [];

    const grid = document.getElementById("events-list");
    grid.innerHTML = "";

    events.forEach(ev => {
      const card = document.createElement("div");
      card.className = "card card-purple";

      card.innerHTML = `
        <div class="card-top gradient-2"></div>
        <div class="card-content">
          <h3>${ev.ev_title}</h3>
          <p>${ev.ev_description}</p>
          <p>Start: ${ev.ev_starttime}</p>

          <button class="card-btn" data-id="${ev.event_id}">
            View Event
          </button>
        </div>
      `;

      grid.appendChild(card);
    });

  } catch (error) {
    document.getElementById("events-list").innerHTML =
      "<p>Δεν ήταν δυνατή η φόρτωση των events.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadEvents);
