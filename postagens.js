// postagens

function fazGet(url) {
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();
	return request.responseText;
}

function criaLinha(postagem) {
	console.log(postagem)
	linha = document.createElement("tr");
	tdUserId = document.createElement("td");
	tdID = document.createElement("td");
	tdTitle = document.createElement("td");
	tdBody = document.createElement("td");
	tdUserId.innerHTML = postagem.userId;
	tdID.innerHTML = postagem.id;
	tdTitle.innerHTML = postagem.title;
	tdBody.innerHTML = postagem.body;
	
	linha.appendChild(tdUserId);
	linha.appendChild(tdID);
	linha.appendChild(tdTitle);
	linha.appendChild(tdBody);
	

	return linha;


}

function main() {
	let data = fazGet("https://jsonplaceholder.typicode.com/posts");
	let postagens = JSON.parse(data);
	let tabela = document.getElementById("tabela");
	postagens.forEach(element => {
		let linha = criaLinha(element);
		tabela.appendChild(linha);
	})
}

main();

//fim postagens

