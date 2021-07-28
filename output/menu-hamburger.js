export default function menuHamburger(btn,menu, removeMenu){

  document.addEventListener("click",function(e){

      if(e.target.matches(btn) || e.target.matches(btn+" *")){
          document.querySelector(menu).classList.toggle("show")
          document.querySelector(btn).classList.toggle("is-active")
      }
      if(e.target.matches(removeMenu)){
        console.log("worrking")
          document.querySelector(menu).classList.remove("show")
          document.querySelector(btn).classList.remove("is-active")
      }
  })
}