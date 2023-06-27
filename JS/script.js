
//Somente para voltar a tela inicial 
function vlt(){
    document.querySelector('#fundo').classList.add('fundo-de-sucesso')
   document.querySelector('#fundo').classList.remove('fundo-de-sucesso-add')
   location.reload()
}



//Validação do cadastro
const campoEmail = document.getElementById('email');
const spanErro = document.getElementById('span');

function setError() {
    campoEmail.style.border = '4px solid #e63636';
    spanErro.classList.remove('span-none');
}

function removeError() {
    campoEmail.style.border = '';
    spanErro.classList.add('span-none');
}

campoEmail.addEventListener('input', emailValidate);

function emailValidate() {
    const input = campoEmail.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(input);

    if (!isValid) {
        setError();
    } else {
        removeError();
    }

    return isValid; // Retorna o valor de isValid
}

function submit() {
   const isValid = emailValidate(); // Chama emailValidate() para obter o valor de isValid

   if (isValid) {
       document.querySelector('#fundo').classList.add('fundo-de-sucesso-add');
       document.querySelector('#fundo').classList.remove('fundo-de-sucesso');
       var n1 = document.querySelector('.email');
       document.querySelector('.recebe').innerHTML = n1.value;
   } else {
       setError();
   }
}



