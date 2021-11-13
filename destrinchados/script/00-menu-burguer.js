var cobre_tela = document.querySelector('#cobre-tela')

document.querySelector('.abre-menu').onclick = () => {
   cobre_tela.style.display = 'flex'
   document.querySelector("ul").style.display = 'block'

   if (window.innerWidth > 500) {
      document.querySelector("ul").style.animation = 'mostra-menu .2s linear forwards'
   }

   else if (window.innerWidth <= 500) {
      document.querySelector("ul").style.animation = 'mostra-menu-500 .3s linear forwards'
   }
}

cobre_tela.onclick = () => { fecha_menu() }
document.querySelector('.fecha-menu').onclick = () => { fecha_menu() }

function fecha_menu() {
   cobre_tela.style.display = 'none'

   if (window.innerWidth > 500) {
      document.querySelector("ul").style.animation = 'esconde-menu .3s linear forwards'
   }

   else if (window.innerWidth <= 500) {
      document.querySelector("ul").style.animation = 'esconde-menu-500 .4s linear forwards'
   }
}