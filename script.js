
const senha = "Pdrx2025";

function checkPassword() {
    const input = document.getElementById("password-input").value;
    if (input === senha) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error-msg").innerText = "Chave incorreta, tente novamente.";
    }
}

function buscarTendencias() {
    const termo = document.getElementById("keyword").value;
    document.getElementById("output").innerText = `🔍 Buscando tendências para: ${termo}...`;
    setTimeout(() => {
        document.getElementById("output").innerText += `\n📈 Tendência simulada: Alta demanda em regiões específicas.`;
    }, 1000);
}

function gerarSugestoes() {
    const ideias = [
        "Garrafa térmica com design premium",
        "Mini projetor portátil para celular",
        "Tapete inteligente para yoga",
        "Relógio fitness com análise de sono",
        "Luminária LED com carregamento sem fio"
    ];
    document.getElementById("output").innerText = "💡 Sugestões de produtos promissores:\n";
    ideias.forEach((item, i) => {
        document.getElementById("output").innerText += `\n${i+1}. ${item}`;
    });
}
