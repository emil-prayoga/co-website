function typeEffect(element, text, speed = 80) {
  element.textContent = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", function () {
  const userName = prompt("Masukkan nama Anda:");
  const welcomeElement = document.getElementById("welcomeText");
  const finalText = userName
    ? `Hi ${userName}, Welcome To TechNova`
    : "Hi, Welcome To TechNova";

  typeEffect(welcomeElement, finalText, 80);

document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  const nameInput = document.getElementById("name");
  
  const emailInput = document.getElementById("email");

  nameInput.addEventListener("input", function () {
    const name = nameInput.value.trim();
    const nameRegex = /^[A-Za-z\s]+$/;

    if (name === "") {
      nameInput.setCustomValidity("Nama tidak boleh kosong.");
    } else if (!nameRegex.test(name)) {
      nameInput.setCustomValidity("Nama hanya boleh berisi huruf dan spasi.");
    } else {
      nameInput.setCustomValidity("");
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const userMessage = messageInput.value.trim();

    if (!name || !email || !userMessage) {
      alert("Mohon lengkapi semua isian!");
      return;
    }

    const now = new Date().toLocaleString();

    preview.innerHTML = `
      <b>Waktu:</b> ${now}<br>
      <b>Nama:</b> ${name}<br>
      <b>Email:</b> ${email}<br>
      <b>Pesan:</b> ${userMessage}
     `;
    });
  });
});