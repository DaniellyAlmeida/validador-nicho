function checkPassword() {
  const password = document.getElementById('password').value;
  if (password === "Pdrx2025") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById('error').innerText = "Chave incorreta, tente novamente.";
  }
}