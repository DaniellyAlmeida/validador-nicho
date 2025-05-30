let consultas = 0;
const limiteGratis = 3;

function buscar() {
  if (consultas >= limiteGratis) {
    alert("Limite diário atingido. Assine o plano PRO para acesso ilimitado.");
    return;
  }
  const termo = document.getElementById('keyword').value;
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<p><strong>Buscando tendências para:</strong> ${termo}...</p>`;
  consultas++;
}

function sugerir() {
  if (consultas >= limiteGratis) {
    alert("Limite diário atingido. Assine o plano PRO para acesso ilimitado.");
    return;
  }
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = "<ul><li>Smartwatch Fitness - R$150 - Potencial Alto</li><li>Luminária LED Gamer - R$80 - Potencial Médio</li><li>Massageador Portátil - R$120 - Potencial Alto</li><li>Caneta 3D Criativa - R$90 - Potencial Médio</li><li>Câmera de Segurança WiFi - R$180 - Potencial Alto</li></ul>";
  consultas++;
}