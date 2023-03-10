const navbarE1 = document.querySelector(".navbar");

const bottonContainerE1 = document.querySelector(".bottom-container")
console.log(navbarE1.offsetHeight);

console.log(bottonContainerE1.offsetTop);
window.addEventListener("scroll" , () => {
    // console.log(window.scrollY);
    if(window.scrollY > bottonContainerE1.offsetTop - navbarE1.offsetHeight - 50){   //we added 50 padding 
        navbarE1.classList.add("active")
    }  
    else {
        navbarE1.classList.remove("active")
    }
});

//  54 804  1073