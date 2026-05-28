import { EventsAPI, ReviewsAPI } from "../connection_f_b/api.js";

async function loadCompletedEvents() {
  const userId = 1;

  const result = await EventsAPI.getCompletedForReview(userId);
  const events = result.events || [];

  const select = document.getElementById("event-select");

  events.forEach(ev => {
    const opt = document.createElement("option");
    opt.value = ev.event_id;
    opt.textContent = ev.ev_title;
    select.appendChild(opt);
  });
}

async function submitReview() {
  const eventId = document.getElementById("event-select").value;
  const rating = document.getElementById("rating").value;
  const description = document.getElementById("description").value;

  await ReviewsAPI.create(eventId, {
    user_id: 1,
    rating,
    description
  });

  alert("Η αξιολόγηση υποβλήθηκε!");
}

document.addEventListener("DOMContentLoaded", loadCompletedEvents);
document.getElementById("submit-btn").addEventListener("click", submitReview);
