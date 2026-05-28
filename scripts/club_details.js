import { ClubsAPI, EventsAPI, StatisticsAPI } from "../connection_f_b/api.js";

async function loadClubDetails() {
  const params = new URLSearchParams(window.location.search);
  const clubId = params.get("id");

  const container = document.getElementById("club-details");

  try {
    const club = await ClubsAPI.getById(clubId);

    container.innerHTML = `
      <h2>${club.data.title}</h2>
      <p>${club.data.description}</p>
      <p>Status: ${club.data.status}</p>
      <p>Manager: User #${club.data.manager_id}</p>

      <button id="join-btn">Join Club</button>
    `;

    document.getElementById("join-btn").addEventListener("click", async () => {
      await ClubsAPI.join(clubId);
      alert("Αίτηση συμμετοχής στάλθηκε!");
    });

    await StatisticsAPI.recordVisit(clubId, { user_id: 1 });

  } catch (error) {
    container.innerHTML = "<p>Σφάλμα φόρτωσης συλλόγου.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadClubDetails);
