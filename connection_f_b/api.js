// ===============================
// 🔗 BASE URL
// ===============================
const API_BASE = "http://localhost:3000/api";

// ===============================
// 📌 Helper: Unified Fetch Wrapper
// ===============================
async function apiRequest(endpoint, method = "GET", body = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" }
  };

  if (body) options.body = JSON.stringify(body);

  const res = await fetch(`${API_BASE}${endpoint}`, options);

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "API Error");
  }

  return res.json();
}

// ===============================
// 📌 CLUBS API
// ===============================
export const ClubsAPI = {
  getAll: () => apiRequest("/clubs"),
  getById: (id) => apiRequest(`/clubs/${id}`),
  create: (data) => apiRequest("/clubs", "POST", data),
  join: (id) => apiRequest(`/clubs/${id}/join`, "POST"),
  getPending: () => apiRequest("/clubs/pending"),
  approve: (id) => apiRequest(`/clubs/${id}/approve`, "POST"),
  reject: (id) => apiRequest(`/clubs/${id}/reject`, "POST")
};

// ===============================
// 📌 EVENTS API
// ===============================
export const EventsAPI = {
  getAll: () => apiRequest("/events"),
  getById: (id) => apiRequest(`/events/${id}`),
  create: (data) => apiRequest("/events", "POST", data),
  participate: (id) => apiRequest(`/events/${id}/participate`, "POST"),
  getCompletedForReview: (userId) => apiRequest(`/reviews/completed/${userId}`)
};

// ===============================
// 📌 ANNOUNCEMENTS API
// ===============================
export const AnnouncementsAPI = {
  getAll: () => apiRequest("/announcements"),
  getById: (id) => apiRequest(`/announcements/${id}`),
  create: (data) => apiRequest("/announcements", "POST", data)
};

// ===============================
// 📌 REVIEWS API
// ===============================
export const ReviewsAPI = {
  getPublic: (eventId) => apiRequest(`/reviews/public/${eventId}`),
  create: (eventId, data) => apiRequest(`/reviews/${eventId}`, "POST", data)
};

// ===============================
// 📌 PROFILE API
// ===============================
export const ProfileAPI = {
  get: (id) => apiRequest(`/profile/${id}`),
  update: (id, data) => apiRequest(`/profile/${id}`, "PUT", data)
};

// ===============================
// 📌 CHATBOT API
// ===============================
export const ChatbotAPI = {
  ask: (data) => apiRequest("/chatbot/ask", "POST", data),
  contactAdmin: (data) => apiRequest("/chatbot/contact-admin", "POST", data),
  history: (userId) => apiRequest(`/chatbot/user/${userId}`),
  unread: () => apiRequest("/chatbot/admin/unread"),
  answer: (contactId, data) =>
    apiRequest(`/chatbot/admin/answer/${contactId}`, "PATCH", data)
};

// ===============================
// 📌 STATISTICS API
// ===============================
export const StatisticsAPI = {
  appOptions: () => apiRequest("/app-statistics/options"),
  chatbotUsage: () => apiRequest("/app-statistics/chatbot-usage"),
  chatbotEfficiency: () => apiRequest("/app-statistics/chatbot-efficiency"),
  appUsage: () => apiRequest("/app-statistics/app-usage"),

  clubOptions: () => apiRequest("/club-statistics/options"),
  clubEvents: (clubId) => apiRequest(`/club-statistics/events/${clubId}`),
  finalizeEvent: (eventId, data) =>
    apiRequest(`/club-statistics/events/${eventId}/finalize`, "POST", data),
  memberParticipation: (clubId) =>
    apiRequest(`/club-statistics/member-participation/${clubId}`),
  recordVisit: (clubId, data) =>
    apiRequest(`/club-statistics/visit/${clubId}`, "POST", data),
  visitStats: (clubId) =>
    apiRequest(`/club-statistics/visits/${clubId}`)
};
