
function submit(){
   
   var n2 = document.querySelector('.email')
   if(n2){
      document.querySelector('#sucesso').classList.add('show')
      document.querySelector('#sucesso').classList.remove('sucesso')
      var n1 = document.querySelector('.email')
      document.querySelector('.recebe').innerHTML = n1.value
   } else{
      document.querySelector('.label-email').innerHTML = 'Coloque um email valido!'
   }
   
}

function vlt(){
    document.querySelector('#sucesso').classList.add('sucesso')
   document.querySelector('#sucesso').classList.remove('show')

}




