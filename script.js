
function submit(){
   
   var n2 = document.querySelector('.email').value
   if(n2 !== ""){
      document.querySelector('#fundo').classList.add('fundo-de-sucesso-add')
      document.querySelector('#fundo').classList.remove('fundo-de-sucesso')
      var n1 = document.querySelector('.email')
      document.querySelector('.recebe').innerHTML = n1.value
   } else{
      document.querySelector('.label-email').innerHTML = 'Coloque um email valido!'
   }
   
}

function vlt(){
    document.querySelector('#fundo').classList.add('fundo-de-sucesso')
   document.querySelector('#fundo').classList.remove('fundo-de-sucesso-add')
   location.reload()
}




