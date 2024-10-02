document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const phoneInput = document.getElementById("phone-number");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  phoneInput.addEventListener("input", (e) => {
    let phoneNumber = e.target.value;
    phoneNumber = phoneNumber.replace(/\D/g, "");

    if (phoneNumber.length > 11) {
      phoneNumber = phoneNumber.substring(0, 11);
    }

    e.target.value = phoneNumber;
  });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

btn.onclick = openModal;

span.onclick = closeModal;
