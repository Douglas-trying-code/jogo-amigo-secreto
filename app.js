let amigos = [];

//Função que adiciona valores a lista e também verifica se o valor esta vazio ou ja não foi adicionado.
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeNovo = inputAmigo.value.trim();
    
    if (nomeNovo === '') {
        alert('Por favor, digite um nome antes de adicionar.');
        return;
    }
   
    if (nomeNovo && !amigos.includes(nomeNovo)){
        amigos.push(nomeNovo);
        atualizarListaTela();
        document.getElementById("amigo").value = '';
    } else{
        alert('Nome ja inserido!!')
    }
    console.log(amigos)
}

//Atualiza a lista dos amigos que fica visivel na tela.
function atualizarListaTela() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

//Verifica se a quantia de nomes é suficiente, sorteia um dos nome adicionados e o mostra na tela.  
function sortearAmigo(){
    let quantiaAmigos = amigos.length;
    if (quantiaAmigos < 3){
        alert('Adicione ao menos 3 nomes!');
        return;
    } else{
        let indexLista = (Math.floor(Math.random()*quantiaAmigos));
        let amigoSorteado = amigos[indexLista];
        document.getElementById('resultado').textContent = `O amigo sorteado foi: ${amigoSorteado}`;
    }
}
