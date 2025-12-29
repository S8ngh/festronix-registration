var submitted = false;

document.querySelector("form").addEventListener("submit", function () {
  document.getElementById("successMsg").innerText =
    "✅ Registration Successful! Your data has been saved.";
});
