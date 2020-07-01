/// <reference types="cypress" />

it('A external test...', () =>{
    cy.visit('www.google.com')

})

describe('Should group test...', () => {
    describe('Should group more speficic tests...', () =>{
        it('A Specific test...', () =>{

        })
    })

    describe('Should group more speficic tests...', () =>{
        it('A Specific test 2 ...', () =>{

        })
    })

    it('A interval test...', () =>{

    })
})

    