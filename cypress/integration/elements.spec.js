/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() =>{  //executa uma vez antes de todos os testes
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{ //executa antes de cada um dos testes.
        cy.reload()
    })

    it('Text', () =>{
        
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        
        cy.get('a').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload() // dar um refresh na tela.
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })
})