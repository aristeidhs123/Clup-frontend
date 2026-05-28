import { ClubsAPI, MembershipAPI, ChatbotAPI } from "../connection_f_b/api.js";

async function loadPendingClubs() {
  const result = await ClubsAPI.getPending();
  console.log(result);
}

async function loadPendingMembers() {
  const result = await MembershipAPI.getPending();
  console.log(result);
}

async function loadAdminMessages() {
  const result = await ChatbotAPI.unread();
  console.log(result);
}

document.addEventListener("DOMContentLoaded", () => {
  loadPendingClubs();
  loadPendingMembers();
  loadAdminMessages();
});
