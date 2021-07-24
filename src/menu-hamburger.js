
export default function menuHamburger(btn,menu){
    document.addEventListener("click",function(e){
        if(e.target.matches(btn) || e.target.matches(btn+" *")){
            document.querySelector(menu).classList.toggle("show")
        }
    })
}