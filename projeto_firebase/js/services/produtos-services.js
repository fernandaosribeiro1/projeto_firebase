//Serviço para manipulação dos produtos
class ProdutoService{
    constructor(){
        //referência da coleção com o conversor aplicado
        this.produtosRef = db.collection('produtos')
        .withConverter(produtoConverter);

        //elementos da Dom
        this.produtoLista = document.getElementById('produtosLista');
        this.produtosTabela = document.getElementById('produtosTabela');
        this.loadingDiv = document.getElementById('loading');
    }

    //carregar os produtos
    carregarProdutos(){
        this.produtosRef.onSnapshot(
            (snapshot) => this.processarSnapshot(snapshot),
            (error) => this.tratarErro(error)
        )
    }

    //processar o snapshot
    processarSnapshot(snapshot){
        this.produtoLista.innerHTML = '';
        this.loadingDiv.style.display = 'none';
        this.produtosTabela.style.display = 'table';

        snapshot.forEach( (doc) => {
            const produto = doc.data();
            this.adicionarProdutoNaTabela(produto);
        });
    }

    //colocar os produtos na tabela
    adicionarProdutoNaTabela(produto){
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.descricao}</td>
        <td>${produto.precoFormatado()}</td>
        <td>${produto.estoque}</td>
        <td>${produto.categoria}</td>
        `;
        this.produtoLista.appendChild(tr);
    }
}