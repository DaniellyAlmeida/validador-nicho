
function validateKey() {
  const key = document.getElementById('accessKey').value;
  const error = document.getElementById('error-message');
  if (key === "Pdrx2025") {
    document.getElementById("auth-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    error.textContent = "Chave incorreta, tente novamente.";
  }
}
