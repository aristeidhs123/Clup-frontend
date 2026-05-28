import { AnnouncementsAPI } from "../connection_f_b/api.js";

async function loadAnnouncements() {
  try {
    const result = await AnnouncementsAPI.getAll();
    const announcements = result.data || [];

    const list = document.getElementById("announcements-list");
    list.innerHTML = "";

    announcements.forEach(a => {
      const item = document.createElement("div");
      item.className = "announcement-item";

      item.innerHTML = `
        <h3>${a.ann_title}</h3>
        <p>${a.ann_descr}</p>
        <button data-id="${a.ann_id}" class="view-btn">View</button>
      `;

      list.appendChild(item);
    });

  } catch (error) {
    document.getElementById("announcements-list").innerHTML =
      "<p>Σφάλμα φόρτωσης ανακοινώσεων.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadAnnouncements);
