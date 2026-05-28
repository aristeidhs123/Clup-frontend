// API base URL – άλλαξέ το όταν στήσεις backend
const API_BASE = "http://localhost:3000/api";

// --------- USERS ---------

// TODO: Σβήσε το mock όταν συνδεθείς με backend
export async function getCurrentUser() {
  // return fetch(`${API_BASE}/user/me`).then(r => r.json());
  return {
    user_id: 1,
    name: "Dionysia",
    lastname: "Mavrothalassiti",
    email: "user@example.com",
    role: "user",
    user_bio: "Short bio...",
    user_interests: "Music, Tech"
  };
}

// --------- CLUBS ---------

export async function getClubs() {
  // return fetch(`${API_BASE}/showclubs`).then(r => r.json());
  return {
    data: [
      { club_id: 1, title: "Club 1", description: "Περιγραφή club 1", status: "approved" },
      { club_id: 2, title: "Club 2", description: "Περιγραφή club 2", status: "pending" }
    ]
  };
}

// --------- EVENTS ---------

export async function getEvents() {
  // return fetch(`${API_BASE}/events`).then(r => r.json());
  return [
    {
      event_id: 1,
      ev_title: "Hackathon 2024",
      ev_description: "24-hour coding challenge",
      ev_location: "Patras",
      ev_seats: 50,
      ev_status: "upcoming"
    }
  ];
}

// --------- ANNOUNCEMENTS ---------

export async function getAnnouncements() {
  // return fetch(`${API_BASE}/announcements`).then(r => r.json());
  return [
    {
      announc_id: 1,
      ann_title: "New Meeting",
      ann_descr: "Συνάντηση μελών την Παρασκευή",
      ann_date: "2024-05-01"
    }
  ];
}

// --------- REVIEWS ---------

export async function getReviews() {
  // return fetch(`${API_BASE}/reviews`).then(r => r.json());
  return [
    {
      rev_id: 1,
      event_title: "Hackathon 2024",
      r_review: 5,
      r_descr: "Amazing event!"
    }
  ];
}

// --------- ADMIN DASHBOARD ---------

export async function getAdminDashboard() {
  // return fetch(`${API_BASE}/admin/dashboard`).then(r => r.json());
  return {
    pendingClubs: 3,
    pendingMessages: 5,
    statsAvailable: true
  };
}
