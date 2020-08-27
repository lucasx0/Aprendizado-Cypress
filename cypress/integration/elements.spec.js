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

    it('TextFields', ()=>{
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')
        cy.get('#elementosForm\\:sugestoes')
        .type('textarea')
        .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('????')

        cy.get('[data-cy=dataSobrenome]')
        .type('teste12345{backspace}') //backspace apaga uma letra ou numero.

        cy.get('#formNome').clear() //clear apaga o campo se estiver escrito
        .type('Erro')
    })

    it('RaddioButton', ()=> {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked') //checando se está selecionado.

        cy.get('#formSexoMasc').should('not.be.checked') //checando se não está selecionado.

        cy.get("[name='formSexo']").should('have.length', 2) //Busca por propriedades
    })

    it('checkbox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple: true}) //pegando a classe master e seleciona os clicks
        cy.get('#formComidaPizza').should('not.be.checked') //checando se pizza não está marcado
        cy.get('#formComidaVegetariana').should('be.checked') // checando se vegetariana está marcado
    })

    it.only('COMBO', ()=>{
        // COMBO QUE SELECIONA 1 OPÇÃO.
        cy.get('[data-test=dataEscolaridade]')
        .select('2o grau completo')
        .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade]')
        .select('1graucomp')
        .should('have.value', '1graucomp')
    })
})