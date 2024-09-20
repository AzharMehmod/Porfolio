const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")
const line=document.querySelectorAll("#line")
hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  line.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    line.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})