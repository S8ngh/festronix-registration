document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("successMsg").innerText =
    "🎉 Registration Successful! See you at FESTRONIX 2025.";

  document.getElementById("regForm").reset();
});
