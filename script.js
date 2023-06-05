
function submit(){
    var email = document.querySelector('.email').value;
    localStorage.setItem('email', email);


    window.location.herf = "sucesso.html?nome=" + encodeURIComponent(email);
}




