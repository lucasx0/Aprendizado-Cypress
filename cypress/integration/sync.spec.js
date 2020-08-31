/// <reference types="cypress" />

describe('Esperas...', ()=>{

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })
        // ESPERA NO CYPRESS.
    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist') // VERIFICANDO SE EXISTE
        cy.get('#buttonDelay').click() // CLICKOU
        cy.get('#novoCampo').should('not.exist') // AINDA EM VERIFICAÇÃO DO ELEMENTO
        cy.get('#novoCampo').should('exist') // VERIFICANDO O ELEMENTO.
        cy.get('#novoCampo').type('funciona')
    })

    it.only('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click() 
        cy.get('#novoCampo')
        .should('exist') // VERIFICA SE EXISTE
        .type('funciona') /
    })
})