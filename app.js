const toggleMenu = document.querySelector("#toggle-menu")
const burgerMenu = document.querySelector("#nav-menu")
const cursor = document.querySelector("#circle-cursor") 




toggleMenu.addEventListener("click", ()=>{
if(burgerMenu.style.display === "" || burgerMenu.style.display === 'none' ){
  burgerMenu.style.display = "block"
}else if(burgerMenu.style.display === "block"){
 burgerMenu.style.display = "none"
}
})

document.addEventListener('mousemove', (e)=>{
   cursor.style.left=e.pageX - (cursor.offsetWidth /2) +"px";
  //  console.log(cursor.offsetWidth)
   cursor.style.top =e.pageY - (cursor.offsetHeight /2) +"px"
   console.log(e.pageY)
})