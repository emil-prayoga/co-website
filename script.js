document.addEventListener("DOMContentLoaded", function () {
  const userName = prompt("Masukkan nama Anda:");
  const welcomeElement = document.getElementById("welcomeText");
  const finalText = userName
    ? `Hi ${userName}, Welcome To TechNova`
    : "Hi, Welcome To TechNova";

  welcomeElement.classList.add('typing');

  function typeLoop(text, speed = 80, pause = 1200) {
    let i = 0;
    let isDeleting = false;

    function typing() {
      if (!isDeleting) {
        welcomeElement.textContent = text.substring(0, i + 1);
        i++;
        if (i === text.length) {
          isDeleting = true;
          setTimeout(typing, pause);
          return;
        }
      } else {
        welcomeElement.textContent = text.substring(0, i - 1);
        i--;
        if (i === 0) {
          isDeleting = false;
        }
      }
      setTimeout(typing, speed);
    }
    typing();
  }

  typeLoop(finalText, 80, 1200);

  document.querySelector('.logo').classList.add('visible');
  document.querySelector('nav').classList.add('visible');
  document.getElementById('hero').classList.add('visible');

  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("messageForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

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
    alert(`Pesan dari ${name} (${email}) pada ${now} telah dikirim:\n\n${userMessage}`);
    form.reset();
  });

  const sections = document.querySelectorAll('.fade-in');

  sections.forEach(sec => sec.classList.remove('visible'));

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100 && rect.bottom >= 0;
  }

  function revealOnScroll() {
    sections.forEach(sec => {
      if (isInViewport(sec)) {
        sec.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); 
});