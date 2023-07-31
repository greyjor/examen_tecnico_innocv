/// <reference types="cypress" />

export function navegarPaginaContacto() {
    cy.viewport(1600, 1200);
    cy.visit('https://www.innocv.com/');
    cy.get('[href="/contacto"]').click();
    cy.get('#rcc-confirm-button').click();
    cy.wait(10000)
}

/*
function extraerMesFecha(str){

    var fecha = str.split("-");
    var mesNoticiaAux = fecha[1]-1;
    console.log(mesNoticiaAux);
    console.log(typeof(mesNoticiaAux));
    
    return mesNoticiaAux;
    
}
    
function extraerAnioFecha(str){
    
    var fecha = str.split("-");
    var anioNoticiaAux = parseInt(fecha[2]);
    console.log(anioNoticiaAux);
    console.log(typeof(anioNoticiaAux));
    
    return anioNoticiaAux;
    
}
    
    
function extraerMesActual(){
    
    var hoy = new Date();
    var mesActualAux = hoy.getMonth();
    console.log(mesActualAux)
    console.log(typeof(mesActualAux))
    
    return mesActualAux;
    
}
    
function extraerAnioActual(){
    
    var hoy = new Date();
    console.log(hoy)
    var anioActualAux = hoy.getFullYear();
    console.log(anioActualAux)
    console.log(typeof(anioActualAux))
    
    return anioActualAux;
    
}
    
export function comprobarMesNoticia(str){
    
    const mesNoticia = extraerMesFecha(str)
    console.log(mesNoticia);
    
    const anioNoticia = extraerAnioFecha(str)
    console.log(annoNoticia);
    
    const mesActual = extraerMesActual()
    console.log(mesActual);
    
    const anioActual = extraerAnioActual()
    console.log(annoActual);
    
    if((mesNoticia ==  mesActual || mesNoticia ==  mesActual-1 || mesNoticia ==  mesActual-2) && anioNoticia == anioActual){
    console.log("Fecha correcta")
    return true
    }
    else{
    console.log("Fecha incorrecta")
    return false
    }
}
    
    comprobarMesNoticia("30-07-2023");
*/