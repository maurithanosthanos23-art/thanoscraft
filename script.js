// LOGIN
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

// CONTATO
document.getElementById('contatoForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset();
});

// LOJA
let carrinho = [];
function adicionarCarrinho(produto, preco) {
    carrinho.push({produto, preco});
    atualizarCarrinho();
}
function atualizarCarrinho() {
    const lista = document.getElementById('carrinho-lista');
    const total = document.getElementById('total');
    lista.innerHTML = '';
    let soma = 0;
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.produto} - R$ ${item.preco}`;
        lista.appendChild(li);
        soma += item.preco;
    });
    total.textContent = soma;
}