import { ReviewsAPI } from "../connection_f_b/api.js";

async function loadReviews() {
  const eventId = 1; // example

  try {
    const result = await ReviewsAPI.getPublic(eventId);
    const reviews = result.reviews || [];

    const list = document.getElementById("reviews-list");
    list.innerHTML = "";

    reviews.forEach(r => {
      const item = document.createElement("div");
      item.className = "review-item";

      item.innerHTML = `
        <h4>${r.name} ${r.lastname}</h4>
        <p>Rating: ${r.r_review}</p>
        <p>${r.r_descr}</p>
      `;

      list.appendChild(item);
    });

  } catch (error) {
    document.getElementById("reviews-list").innerHTML =
      "<p>Σφάλμα φόρτωσης αξιολογήσεων.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadReviews);
