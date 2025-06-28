let button=document.querySelector(".click");
let birthday=document.querySelector(".happy-text");
let image=document.querySelector(".cont");
button.addEventListener("click",()=>{
    birthday.classList.add("happy-text2");
    image.classList.add("cont2");
    button.classList.add("click2");
});
