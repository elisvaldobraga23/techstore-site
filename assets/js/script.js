import produtos from "../js/produtos.js";

// Seção Produtos

let secaoProdutos = document.querySelector(".produtos");

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

        <button class="btn btn-detalhe">Ver Detalhes</button>
      </div>`,
  )
  .join("");

secaoProdutos.innerHTML = card;

const btnBuscarCEP = document.querySelector(".btn-cep");
const inputCEP = document.querySelector(".input-cep");
const inputEndereco = document.querySelector(".endereco");

async function buscarCEP() {
  const cep = inputCEP.value.replace(/\D/g, ""); // remove tudo que não é número

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

    inputEndereco.value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
  } catch (error) {
    resultado.innerHTML = "Erro ao buscar CEP";
  }
}

btnBuscarCEP.addEventListener("click", buscarCEP);
