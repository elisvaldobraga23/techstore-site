import produtos from "../js/produtos.js";


// SEÇÃO PRODUTOS
const secaoProdutos = document.querySelector("#produtos");

const card = produtos
  .map(
    (produto) =>
      `
    <div class="produto">
        <img
          class="img-produto"
          src="${produto.fotos}"
          alt="imagem produto"
        />

        <div class="texto">
          <h2 class="titulo-produto">${produto.nome}</h2>
          <p class="descricao">${produto.descricao}</p>
          <p class="preco-produto">R$ ${produto.preco.toFixed(2)}</p>
        </div>

        <button data-id="${produto.id}" class="btn btn-detalhe">
          Ver Detalhes
        </button>
    </div>
  `
  )
  .join("");

secaoProdutos.innerHTML = card;



// MODAL PRODUTOS
const modal = document.querySelector("#modal");
const modalImg = document.querySelector(".modal-img");
const modalNome = document.querySelector(".modal-nome");
const modalDescricao = document.querySelector(".modal-descricao");
const modalPreco = document.querySelector(".modal-preco");
const modalEspecificacoes = document.querySelector(".modal-especificacoes");
const btnFechar = document.querySelector(".fechar-modal");

// ABRIR MODAL
function abrirModal(id) {
  console.log("abrindo modal");
  modal.classList.add("ativo");
  console.log(modal.classList);

  const produto = produtos.find((p) => p.id == id);

  modalImg.src = produto.fotos;
  modalNome.textContent = produto.nome;
  modalDescricao.textContent = produto.descricao;
  modalPreco.textContent = `R$ ${produto.preco.toFixed(2)}`;

  modalEspecificacoes.innerHTML = "";

  Object.values(produto.especificacoes).forEach((item) => {
    modalEspecificacoes.innerHTML += `
      <h2>${item.label}: <strong>g${item.valor}</strong></h2
      
    `;
  });

  modal.classList.add("ativo");
}

// FECHAR MODAL
btnFechar.addEventListener("click", () => {
  modal.classList.remove("ativo");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("ativo");
  }
});

// EVENTO DOS BOTÕES (PROFISSIONAL)
secaoProdutos.addEventListener("click", (e) => {
  const botao = e.target.closest(".btn-detalhe");

  if (!botao) return;

  abrirModal(botao.dataset.id);
});



// CEP (VIA CEP)
const btnBuscarCEP = document.querySelector(".btn-cep");
const inputCEP = document.querySelector(".input-cep");
const inputEndereco = document.querySelector(".endereco");

async function buscarCEP() {
  const cep = inputCEP.value.replace(/\D/g, "");

  if (cep.length !== 8) {
    Toastify({
      text: "CEP Inválido!",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "#EF4444",
        borderRadius: "10px",
        width: "250px",
        height: "70px",
        fontSize: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
    }).showToast();
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      Toastify({
        text: "CEP não encontrado!",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
          background: "#EF4444",
          borderRadius: "10px",
          width: "250px",
          height: "70px",
          fontSize: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
      }).showToast();
      return;
    }

    inputEndereco.value =
      `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;

  } catch (error) {
    Toastify({
      text: "Erro ao buscar CEP",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "#EF4444",
        borderRadius: "10px",
      },
    }).showToast();
  }
}

btnBuscarCEP.addEventListener("click", buscarCEP);