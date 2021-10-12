// OBBIETTIVO: mostrare - nascondere menù 

// Analizzando il file style.css appare la necessità di applicare una classe .active al div.hamburger-menu del file html per rendere funzionante la proprietà applicata in fase responsive.

// Strumenti

const element = document.getElementsByClassName(".hamburger-menu");

const button = document.getElementsByClassName(".close");

element.addEventListener("click", function() {
        element.className = `${element.classList} active`;
    })