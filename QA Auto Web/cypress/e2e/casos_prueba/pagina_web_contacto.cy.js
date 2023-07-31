/// <reference types="cypress" />


import {
  navegarPaginaContacto,
  //comprobarMesNoticia
} from '../page_objects/funciones_pagina_web_contacto'


describe('Validar pagina web Contacto', () => {

  beforeEach(function () {
    
    navegarPaginaContacto()
    
  })

  //Casos de prueba completos 1 y 3//
  it('Caso de prueba 1', () => {
         
    cy.get('[style="font-size:38px"]').then(elements => {
    let text = elements[0].innerText.substr(6) 
    cy.log(text)
    cy.scrollTo('bottom')
    cy.get(':nth-child(3) > a > li').click()
    cy.get(':nth-child(3) > [style="font-size:11pt"] > :nth-child(1)').should('include.text', text)
    }) 
          
  })

  it('Caso de prueba 3', () => {

    cy.scrollTo(0, 800)
    cy.get('.jss194 > .MuiButton-root').click({force: true})
    cy.get('.MuiFormHelperText-root').should('be.visible')
    cy.get('.MuiFormHelperText-root').should('have.text', 'Campo requerido')
    cy.get('.MuiFormHelperText-root').should('have.css', 'color').and('eq', 'rgb(244, 67, 54)')
  })


  //Casos de prueba  incompletos 2 y 4//

  /*it.only('Caso de prueba 2', () => {
      
       
  })*/

  /*it.only('Caso de prueba 4', () => {
    
    cy.scrollTo(0, 3000)
    cy.get('.jss257 > .jss252 > .jss254 > .jss256').then($primeraFecha => {
      var primerafecha = $primeraFecha.text()
      cy.log(primerafecha)
      cy.log(typeof(primerafecha))
      
    })
    cy.get('.jss261 > .jss252 > .jss254 > .jss256').then($segundaFecha => {
      const segundaFecha = $segundaFecha.text()
      cy.log(segundaFecha)
      cy.log(typeof(segundaFecha))
    })
    cy.get('.jss265 > .jss252 > .jss254 > .jss256').then($terceraFecha => {
      const terceraFecha = $terceraFecha.text()
      cy.log(terceraFecha)
      cy.log(typeof(terceraFecha))
    })
    
  })*/

})
   
  

  