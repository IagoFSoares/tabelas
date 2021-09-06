// albuns


function fazGet(url) {
	let request = new XMLHttpRequest();
	request.open("GET", url, false);
	request.send();
	return request.responseText;
}

function criaLinha(album) {
	console.log(album)
	linha = document.createElement("tr");
	tdUserId = document.createElement("td");
	tdID = document.createElement("td");
	tdTitle = document.createElement("td");
	tdBody = document.createElement("td");
	tdUserId.innerHTML = album.userId;
	tdID.innerHTML = album.id;
	tdTitle.innerHTML = album.title;
	
	
	linha.appendChild(tdUserId);
	linha.appendChild(tdID);
	linha.appendChild(tdTitle);
	
	

	return linha;


}

function main() {
	let data = fazGet("https://jsonplaceholder.typicode.com/albums");
	let albuns = JSON.parse(data);
	let tabela = document.getElementById("tabela");
	albuns.forEach(element => {
		let linha = criaLinha(element);
		tabela.appendChild(linha);
	})
}

main();