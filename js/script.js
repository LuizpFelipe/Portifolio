function openNav() {
	var x = document.getElementById("navigation");

	if (x.className === "navigation") {
		x.className += " menu-js"
		document.getElementById("barra-de-opcoes").innerHTML = "&#215;"
	}else{
		x.className = "navigation"
		document.getElementById("barra-de-opcoes").innerHTML = "&#9776;"
	}
}