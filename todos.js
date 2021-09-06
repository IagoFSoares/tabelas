function fazGet(url) {
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();
	return request.responseText;


}


function criaLinha(tudo) {
	console.log(tudo)
	linha = document.createElement("tr");
	tdUserId = document.createElement("td");
	tdID = document.createElement("td");
	tdTitle = document.createElement("td");
	tdCompleted = document.createElement("td");
	tdUserId.innerHTML = tudo.userId;
	tdID.innerHTML = tudo.id;
	tdTitle.innerHTML = tudo.title;
	tdCompleted.innerHTML = tudo.body;
	
	linha.appendChild(tdUserId);
	linha.appendChild(tdID);
	linha.appendChild(tdTitle);
	linha.appendChild(tdCompleted);
	

	return linha;


}

function main() {
	let data = fazGet("https://jsonplaceholder.typicode.com/posts");
	let todos = JSON.parse(data);
	let tabela = document.getElementById("tabela");
	todos.forEach(element => {
		let linha = criaLinha(element);
		tabela.appendChild(linha);
	})


}

main();
