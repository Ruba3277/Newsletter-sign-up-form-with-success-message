
const form = document.querySelector(".newsletter-form");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector(".email-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  if (email === "") {
    emailInput.reportValidity();
    emailError.style.display = "none";
    return;
  }
  const emailPattern =  /^[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;

  if (!emailPattern.test(email)) {
    emailError.style.display = "block";
    emailInput.classList.add("invalid");
    return;
  }

  emailError.style.display = "none";
  emailInput.classList.remove("invalid");

  window.location.href = `./thankyou.html?email=${encodeURIComponent(email)}`;
});

