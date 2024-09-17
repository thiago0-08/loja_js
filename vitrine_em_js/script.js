document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um evento de submit ao formulário
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        // Impede o envio padrão do formulário
        event.preventDefault();
    });
});

// Defina os detalhes dos produtos
const produtos = [
    {
        "titulo": "Tênis Masculino Begin #001",
        "imagens": {
            "Verde": "./img/tenis01/tenis_verde.jpg",
            "Laranja": "./img/tenis01/tenis_laranja.jpg"
        },
        "preco": 279.9,
        "descricao": ["Características: Ajustável, Respirável", "Material da Palmilha: EVA", "Material da Sola: Borracha"],
        "tamanhos": [38, 39, 40, 41, 42],
        "cores": ["Verde", "Laranja"]
    },
    {
        "titulo": "TÊNIS MASCULINO PURPOSE",
        "imagens": {
            "Marrom": "./img/tenis02/tenis_marrom.webp",
            "Preto": "./img/tenis02/tenis_preto.jpg",
            "Cinza": "./img/tenis02/tenis_cinza.jpg",
            "Branco": "./img/tenis02/tenis_branco.jpg"
        },
        "preco": 249.9,
        "descricao": ["Características: Ajustável, Respirável", "Material da Palmilha: EVA", "Material da Sola: Borracha"],
        "tamanhos": [38, 39, 40, 41, 42],
        "cores": ["Marrom", "Preto", "Cinza", "Branco"]
    },
    {
        "titulo": "Tênis Nike Air Max SC Masculino",
        "imagens": {
            "Azul escuro": "./img/tenis04/azul_escuro.avif",
            "Preto": "./img/tenis04/preto.avif",
            "Branco": "./img/tenis04/branco.avif",
            "Branco e verde": "./img/tenis04/branco_e_verde.avif",
            "Cinza": "./img/tenis04/cinza_e_azul.avif",
            "Marrom": "./img/tenis04/marrom.avif",
            "Prata": "./img/tenis04/prata_e_azul.avif",
            "Branco e vermelho": "./img/tenis04/branco_e_vermelho.avif"
        },
        "preco": 531.99,
        "descricao": ["Características: Ajustável, Respirável", "Material da Palmilha: EVA", "Material da Sola: Borracha"],
        "tamanhos": [38, 39, 40, 41, 42],
        "cores": ["Azul escuro", "Preto", "Branco", "Branco e verde", "Cinza", "Marrom", "Prata", "Branco e vermelho"]
    },
    {
        "titulo": "TÊNIS MASCULINO BRAND",
        "imagens": {
            "Azul":"./img/tenis03/tenis_azul.webp",
            "Amarelo":"./img/tenis03/tenis_amarelo.webp",
            "Preto": "./img/tenis03/tenis_preto.webp",
            "Branco": "./img/tenis03/tenis_branco.webp"
        },
        "preco": 531.9,
        "descricao": ["Características: Ajustável, Respirável", "Material da Palmilha: EVA", "Material da Sola: Borracha"],
        "tamanhos": [38, 39, 40, 41, 42],
        "cores": ["Azul", "Amarelo", "Preto", "Branco"]
    },
    {
        "titulo": "TÊNIS MASCULINO PURPOSE",
        "imagens": {
            "Laranja":"./img/tenis05/laranja.avif",
            "Branco":"./img/tenis05/branco",
            "Azul":"./img/tenis05/azul.png",
            "Verde":"./img/tenis05/verde.jpg",
            "Aqua":"./img/tenis05/aqua.webp",
            "Blue":"./img/tenis05/branco_azul.webp"
        },
        "preco": 1490.90,
        "descricao": ["Características: Ajustável, Respirável", "Material da Palmilha: EVA", "Material da Sola: Borracha"],
        "tamanhos": [38, 39, 40, 41, 42],
        "cores": ["Laranja","Branco","Azul","Verde","Aqua","Blue"]
    },
    {
        "titulo": "Nike Air Max Plus III",
        "imagens": {
           "Azul":"./img/tenis06/azul.avif",
           "Branco":"./img/tenis06/branco.webp",
           "Branco e Rosa": "./img/tenis06/branco_rosa.webp",
           "Preto e Verde": "./img/tenis06/preto_verde.avif",
           "Roxo":"./img/tenis06/roxo.webp",
           "Vermelho":"./img/tenis06/vermelho.webp"
        },
        "preco": 1490.90,
        "descricao": ["Características: Ajustável, Respirável", "Material da Palmilha: EVA", "Material da Sola: Borracha"],
        "tamanhos": [38, 39, 40, 41, 42],
        "cores": ["Azul","Branco","Branco e Rosa","Preto e Verde","Roxo","Vermelho"]
    },
    {
        "titulo": "Sandalia Rasteira Melissa",
        "imagens": {
            "Bege":"./img/tenis07/bege.jpeg",
            "Rosa": "./img/tenis07/rosa.jpg"
            
        },
        "preco": 111.93,
        "descricao": ["Características: Material: Melflex"],
        "tamanhos": [38, 39, 40, 41, 42],
        "cores": ["Bege", "Rosa"]
    },
    {
        "titulo": "Sandalia Rasteira Melissa",
        "imagens": {
            "Cinza":"./img/tenis08/cinza.webp",
            "Branco": "./img/tenis08/branco.webp"
            
        },
        "preco": 1490.9,
        "descricao": ["Características: Material: Melflex"],
        "tamanhos": [36, 37, 38, 39],
        "cores": ["Cinza", "Branco"]
    }
];


// Adiciona um evento de clique ao botão "Informações"
const informacoesButton = document.getElementById("informacoes-button");
informacoesButton.addEventListener("click", function () {
    // Itera sobre todos os produtos e chama showProduct(index) para cada um
    produtos.forEach((produto, index) => {
        showProduct(index + 1); // Adiciona 1 ao índice para corresponder ao número do produto
    });
});

// Função para mostrar detalhes do produto
function showProduct(index) {
    const produto = produtos[index - 1]; // Subtrai 1 para corresponder ao índice do array
    const titulo = document.getElementById("titulo_produto");
    const preco = document.getElementById("preco");
    const productImage = document.getElementById("product-image");
    const sizesButton = document.getElementById("sizes-button");
    const seleCor = document.getElementById("seleCor");
    const descricaoList = document.getElementById("descricao");

    titulo.innerHTML = produto.titulo;
    preco.innerHTML = produto.preco;
    productImage.src = produto.imagens[Object.keys(produto.imagens)[0]]; // Define a imagem inicial como a primeira cor
    sizesButton.innerHTML = ""; // Limpa os botões de tamanho
    seleCor.innerHTML = ""; // Limpa os botões de cor
    descricaoList.innerHTML = ""; // Limpa a lista de descrição

    // Adiciona botões de tamanho
    produto.tamanhos.forEach(tamanho => {
        let button = document.createElement("button");
        button.className = "size-button";
        button.innerText = tamanho;
        button.addEventListener("click", () => changeSize(tamanho));
        sizesButton.appendChild(button);
    });

    // Adiciona botões de cor
    produto.cores.forEach(cor => {
        let button = document.createElement("button");
        button.innerText = cor;
        button.className = "color-button btn btn-outline-secondary";
        button.addEventListener('click', () => changeColor(cor, produto));
        seleCor.appendChild(button);
    });

    // Adiciona descrições
    produto.descricao.forEach(descricao => {
        let li = document.createElement("li");
        li.innerText = descricao;
        descricaoList.appendChild(li);
    });
}

// Função para alterar a cor selecionada e a imagem
function changeColor(selectedColor, produto) {
    var image = document.getElementById("product-image");
    var colorSelected = document.getElementById("color-selected");

    // Verifique se a cor selecionada existe nas cores do produto
    if (produto.cores.includes(selectedColor)) {
        // Atualize a cor selecionada
        colorSelected.innerText = selectedColor;

        // Atualize a imagem, se houver imagem correspondente
        if (produto.imagens[selectedColor]) {
            image.src = produto.imagens[selectedColor];
        } else {
            console.error("Imagem correspondente à cor não encontrada para este produto.");
        }
    } else {
        console.error("Cor selecionada não encontrada para este produto.");
    }
}

// Função para alterar o tamanho selecionado
function changeSize(selectedSize) {
    var sizeSelected = document.getElementById("selected-size");
    sizeSelected.innerText = selectedSize;
}

// Inicialmente, mostra o primeiro produto
showProduct(1);