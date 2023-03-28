import * as loging from '../../fixtures/loging.json' 
import { loginViaUi } from '../../support/helper'

    it('Autorization+buy good from main page', ()=>{

        loginViaUi()
        // cy.log('**Open web home page**')
        // cy.visit('/')

        // cy.log('Searching LogIn form')
        // cy.get('a:contains("Login or register")').click()
        // cy.get('#loginFrm_loginname').clear()
        //     .type(loging.loginName)
        // cy.get('#loginFrm_password').clear()
        //     .type(loging.pasw)
        // cy.get('button[title="Login"]').click()
        cy.log('Open Main page')
        cy.get('img[title="Automation Test Store"]').click()
        cy.log('Choose goods')
        cy.get('#block_frame_latest_1770 i.fa')
            .eq(0)
            .click()
        cy.get('div.block_7 li.dropdown').click()
        cy.log('Checkout page')
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()
        cy.get('a[title="Continue"]').click()


    })



// {
//     "firstName": "jack4",
//     "lastName": "Niklson",
//     "email": "jack4@rer.com",
//     "adress1": "FuckStreet",
//     "city": "Fucking city",
//     "regionState": "Grevenmacher",
//     "zipCode": "1234321",
//     "Country": "Luxembourg",
//     "loginName": "jack4rercom",
//     "pasw": "qwerty",
//     "paswConf": "qwerty"
//   }