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

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click() 
        cy.get('#novoCampo')
        .should('exist') // VERIFICA SE EXISTE
        .type('funciona') 
    })

    it('Uso do find', ()=>{
        cy.get('#buttonList').click()
        cy.get('#Lista li')
        .find('span')//FIND = FAZER UMA NOVA BUSCA.
        .should('contain', 'Item 1')
        cy.get('#lista li span') // PARA PEGAR O SEGUNDO ELEMENTO É NECESSARIO FAZER UMA BUSCA COMPLETA
        .should('contain', 'Item 2')
    })

    it('Uso do timeout', ()=>{
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', { timeout: 3000}) // INDICANDO TIMEOUT NO ELEMENTO
        .should('contain', 'Item 2')
    })

    it.only('Click retry', ()=>{
        cy.get('#buttonCount').click().should('have.value', '1')
    })
})