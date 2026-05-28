import { ChatbotAPI } from "../connection_f_b/api.js";

async function sendMessage() {
  const text = document.getElementById("message").value;

  const result = await ChatbotAPI.ask({
    user_id: 1,
    problem: text
  });

  document.getElementById("chat").innerHTML += `
    <p><strong>You:</strong> ${text}</p>
    <p><strong>Bot:</strong> ${result.answer}</p>
  `;
}

document.getElementById("send-btn").addEventListener("click", sendMessage);
