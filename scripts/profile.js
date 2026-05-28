import { ProfileAPI } from "../connection_f_b/api.js";

async function loadProfile() {
  const userId = 1;

  const result = await ProfileAPI.get(userId);
  const user = result.data;

  document.getElementById("name").textContent = user.name;
  document.getElementById("email").textContent = user.email;
}

document.addEventListener("DOMContentLoaded", loadProfile);
