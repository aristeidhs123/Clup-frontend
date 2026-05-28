document.addEventListener("DOMContentLoaded", () => {
  // TODO: Αντικατάσταση με fetch από backend

  const clubs = [
    { title: "Tech Club", desc: "Σύλλογος τεχνολογίας", category: "Τεχνολογία" },
    { title: "Music Society", desc: "Σύλλογος μουσικής", category: "Μουσική" },
    { title: "Θεατρική Ομάδα", desc: "Σύλλογος θεάτρου", category: "Θέατρο" },
    { title: "Χορευτικός Όμιλος", desc: "Σύλλογος χορού", category: "Χορός" },
    { title: "Ενημέρωση+", desc: "Σύλλογος ενημέρωσης", category: "Ενημέρωση" },
    { title: "Πολιτιστικός Σύλλογος", desc: "Σύλλογος πολιτισμού", category: "Πολιτισμός" },
  ];

  const events = [
    { title: "Hackathon 2024", desc: "24ωρος διαγωνισμός", location: "Patras", seats: 50 },
    { title: "Music Night", desc: "Live βραδιά", location: "Aula", seats: 120 },
  ];

  const announcements = [
    { title: "New Meeting", desc: "Συνάντηση μελών", club: "Tech Club", date: "2024-05-01" },
  ];

  const reviews = [
    { event: "Hackathon 2024", rating: 5, text: "Φοβερή εμπειρία", reviewer: "User #5" },
  ];

  const profile = {
    name: "Όνομα Επώνυμο",
    role: "user",
    interests: "Music, Tech",
    bio: "Σύντομη περιγραφή χρήστη...",
  };

  renderClubs(clubs);
  renderEvents(events);
  renderAnnouncements(announcements);
  renderReviews(reviews);
  renderProfile(profile);
});

function renderClubs(clubs) {
  const grid = document.getElementById("clubsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  clubs.forEach(c => {
    const card = document.createElement("div");
    card.className = "card card-blue";
    card.innerHTML = `
      <div class="card-top gradient-1"></div>
      <div class="card-content">
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="tags">
          <span class="tag ${getCategoryClass(c.category)}">${c.category}</span>
        </div>
        <button class="card-btn">View Club</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function getCategoryClass(category) {
  switch (category) {
    case "Τεχνολογία": return "tech";
    case "Μουσική": return "music";
    case "Θέατρο": return "theatre";
    case "Χορός": return "dance";
    case "Ενημέρωση": return "info";
    case "Πολιτισμός": return "culture";
    default: return "";
  }
}

function renderEvents(events) {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  events.forEach(e => {
    const card = document.createElement("div");
    card.className = "card card-purple";
    card.innerHTML = `
      <div class="card-top gradient-2"></div>
      <div class="card-content">
        <h3>${e.title}</h3>
        <p>${e.desc}</p>
        <p><strong>Location:</strong> ${e.location}</p>
        <p><strong>Seats:</strong> ${e.seats}</p>
        <button class="card-btn">View Event</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderAnnouncements(list) {
  const grid = document.getElementById("announcementsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach(a => {
    const card = document.createElement("div");
    card.className = "card card-cyan";
    card.innerHTML = `
      <div class="card-top gradient-3"></div>
      <div class="card-content">
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
        <p><strong>Club:</strong> ${a.club}</p>
        <p><strong>Date:</strong> ${a.date}</p>
        <button class="card-btn">View Announcement</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderReviews(list) {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach(r => {
    const card = document.createElement("div");
    card.className = "card card-blue";
    card.innerHTML = `
      <div class="card-top gradient-1"></div>
      <div class="card-content">
        <h3>${r.event}</h3>
        <p><strong>Rating:</strong> ${"★".repeat(r.rating)}</p>
        <p>${r.text}</p>
        <p><strong>Reviewer:</strong> ${r.reviewer}</p>
        <button class="card-btn">View Review</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderProfile(p) {
  const nameEl = document.getElementById("profileName");
  if (!nameEl) return;
  nameEl.textContent = p.name;
  // τα υπόλοιπα πεδία μπορείς να τα προσθέσεις όταν τα βάλεις στο HTML
}
