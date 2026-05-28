import { ScheduleAPI } from "../connection_f_b/api.js";

async function loadSchedule() {
  const clubId = 1;

  const result = await ScheduleAPI.getByClub(clubId);
  const schedule = result.data;

  document.getElementById("schedule-title").textContent = schedule.title;
}

document.addEventListener("DOMContentLoaded", loadSchedule);
