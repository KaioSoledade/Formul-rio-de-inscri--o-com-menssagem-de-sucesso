
function submit(){
   document.querySelector('#sucesso').classList.add('show')
   document.querySelector('#sucesso').classList.remove('sucesso')

   var n1 = document.querySelector('.email')
   document.querySelector('.recebe').innerHTML = n1.value
}

function vlt(){
    document.querySelector('#sucesso').classList.add('sucesso')
   document.querySelector('#sucesso').classList.remove('show')

}




