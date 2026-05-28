import { ClubsAPI } from "../connection_f_b/api.js";

async function loadClubs() {
  try {
    const result = await ClubsAPI.getAll();
    const clubs = result.data || [];

    const grid = document.getElementById("clubs-list");
    grid.innerHTML = "";

    clubs.forEach(club => {
      const card = document.createElement("div");
      card.className = "card card-blue";

      card.innerHTML = `
        <div class="card-top gradient-1"></div>
        <div class="card-content">
          <h3>${club.title}</h3>
          <p>${club.description}</p>

          <div class="tags">
            <span>Status: ${club.status}</span>
            <span>Manager: User #${club.manager_id}</span>
          </div>

          <button class="card-btn" data-id="${club.club_id}">
            View Club
          </button>

          <button class="secondary-btn join-btn" data-id="${club.club_id}">
            Join Club
          </button>
        </div>
      `;

      grid.appendChild(card);
    });

    attachJoinEvents();

  } catch (error) {
    console.error(error);
    document.getElementById("clubs-list").innerHTML =
      "<p>Δεν ήταν δυνατή η φόρτωση των συλλόγων.</p>";
  }
}

function attachJoinEvents() {
  document.querySelectorAll(".join-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const clubId = btn.dataset.id;
      await ClubsAPI.join(clubId);
      alert("Αίτηση συμμετοχής στάλθηκε!");
    });
  });
}

document.addEventListener("DOMContentLoaded", loadClubs);
