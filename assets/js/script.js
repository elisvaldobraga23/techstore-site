import produtos from "../js/produtos.js"

let secaoProdutos = document.querySelector(".produtos")

const card = produtos.map(produto => 
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
      </div>`
).join("")

secaoProdutos.innerHTML = card

produtos.forEach(produto => {
  console.log(produto.fotos)
})