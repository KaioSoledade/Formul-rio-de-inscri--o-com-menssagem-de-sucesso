
var urlImpri = new URLSearchParams(window.location.search)
var nome = urlImpri.get('email');

document.write("nome: + email")

function vlt(){
    window.location = "index.html"
}