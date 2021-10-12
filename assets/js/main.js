// OBBIETTIVO: mostrare - nascondere menù 

// Analizzando il file style.css appare la necessità di applicare una classe .active al div.hamburger-menu del file html per rendere funzionante la proprietà applicata in fase responsive.

// Variabili

const element = document.querySelector(".hamburger-menu");

const icon = document.querySelector(".fa-bars");

const button = document.querySelector(".close");


// Eventi

icon.addEventListener("click", function() {
        
    element.classList.add("active")
});


button.addEventListener("click", function(){

    element.classList.remove("active")
});