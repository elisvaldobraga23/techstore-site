import produtos from "../js/produtos.js"

let secaoProdutos = document.querySelector(".produtos")

const card = produtos.map(produto => 
    `
    <div class="produto">
        <img
          class="img-produto"
          src="./assets/img/img-iphone.jpg"
          alt="imagem produto"
        />

        <div class="texto">
          <h2 class="titulo-produto"></h2>
          <p class="descricao">Desempenho incrivel com o chip A17 Pro.</p>
          <p class="preco-produto">R$ 8.999,00</p>
        </div>

        <button class="btn btn-detalhe">Ver Detalhes</button>
      </div>`
).join("")

secaoProdutos.innerHTML = card