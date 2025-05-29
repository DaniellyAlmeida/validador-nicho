
const correctPassword = "Pdrx2025";

function checkAccess() {
  const input = document.getElementById("access-key").value;
  if (input === correctPassword) {
    document.getElementById("auth-screen").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    document.getElementById("auth-error").innerText = "Chave incorreta, tente novamente";
  }
}

function searchTrends() {
  const query = document.getElementById("nicheInput").value.trim();
  if (query) {
    const url = `https://trends.google.com/trends/explore?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  } else {
    alert("Digite um nicho para pesquisar tendências.");
  }
}

function showSuggestions() {
  const list = [
    "Garrafa térmica inteligente",
    "Massageador elétrico portátil",
    "Aspirador portátil para carros",
    "Fone Bluetooth com cancelamento",
    "Organizador de cabos magnético",
    "Luminária LED com carregador wireless",
    "Kit de skincare coreano",
    "Relógio smartwatch para pets",
    "Mini projetor portátil",
    "Rastreador antifurto para chaves e bolsas"
  ];

  const ul = document.getElementById("suggestion-list");
  ul.innerHTML = "";
  list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  document.getElementById("suggestions").classList.remove("hidden");
}

function generatePDF() {
  const doc = new jsPDF();
  const title = "Plano do Produto - Validador de Nicho";
  const content = document.getElementById("suggestion-list").innerText || "Nenhum conteúdo listado.";

  doc.text(title, 10, 10);
  doc.text(content, 10, 20);
  doc.save("plano-do-produto.pdf");
}
