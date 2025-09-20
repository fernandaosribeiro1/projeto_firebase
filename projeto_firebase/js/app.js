let produtoService;

function inicializarApp(){
    produtoService = new ProdutoService();
    produtoService.carregarProdutos();
}

document.addEventListener('DOMContentLoaded',inicializarApp)