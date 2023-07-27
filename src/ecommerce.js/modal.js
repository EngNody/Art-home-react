// =======================================================================
// show modal on load
// =======================================================================

window.onload= function () {
  document.querySelector(".site").classList.toggle("showmodal")
}
document.querySelector(".modalclose").addEventListener("click",() => {
document.querySelector(".site").classList.remove("showmodal")  
})
