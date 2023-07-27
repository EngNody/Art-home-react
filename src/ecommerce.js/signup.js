

const loginlink=document.querySelector(".login-link")
const logregister=document.querySelector(".register-link")
const wrapper=document.querySelector(".wrapper")
const btnpopup=document.querySelector(".btnlogin-popup")
const iconclose=document.querySelector(".icon-close")


logregister.addEventListener("click",(eo) => {
  wrapper.classList.add("active")
})

loginlink.addEventListener("click",(eo) => {
  wrapper.classList.remove("active")
})

btnpopup.addEventListener("click",(eo) => {
  wrapper.classList.add("active-popup")
})

iconclose.addEventListener("click",(eo) => {
eo.target.parentElement.parentElement.classList.remove("active-popup")
})













