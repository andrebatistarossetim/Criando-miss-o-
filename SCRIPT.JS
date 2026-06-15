// 📦 alternativas do quiz
const opcoes = [
  "IA Generativa",
  "Redes Neurais",
  "Cozinhar comida",
  "Aprendizado de Máquina"
];

const container = document.getElementById("alternativas");

// 🚀 cria alternativas dinamicamente
function carregarOpcoes() {

  container.innerHTML = "";

  opcoes.forEach(function(opcao) {

    const div = document.createElement("div");
    div.classList.add("opcao");
    div.innerText = opcao;

    // 🖱️ evento de clique
    div.addEventListener("click", function () {

      if (opcao === "Redes Neurais") {
        div.style.backgroundColor = "green";
        div.innerText = "✔ Correto!";
      } else {
        div.style.backgroundColor = "red";
        div.innerText = "✖ Errado!";
      }

      console.log("Você clicou em: " + opcao);
    });

    container.appendChild(div);
  });
}

// 🚀 evento de carregamento
window.addEventListener("load", carregarOpcoes);
