///<reference types="cypress"/>

import * as loging from '../../fixtures/loging.json'

describe ('Test Suite Registration and Autorization', () => {
    beforeEach('Visit main page',()=>{
        cy.visit('https://automationteststore.com/')
    })
    it('Registration', ()=> {  
       cy.get('a:contains("Login or register")').click()
       cy.get('button[title="Continue"]').click()
       cy.get('#AccountFrm_firstname').clear()
        .type(loging.firstName)
       cy.get('#AccountFrm_lastname').clear()
        .type(loging.lastName)
       cy.get('#AccountFrm_email').clear()
        .type(loging.email)
       cy.get('#AccountFrm_address_1').clear()
        .type(loging.adress1)
       cy.get('#AccountFrm_country_id')
        .select(loging.Country)
       cy.get('#AccountFrm_zone_id')
        .select(loging.regionState)
       cy.get('#AccountFrm_city').clear()
        .type(loging.city)
       cy.get('#AccountFrm_postcode').clear()
        .type(loging.zipCode)
       cy.get('#AccountFrm_loginname').clear()
        .type(loging.loginName)
       cy.get('#AccountFrm_password').clear()
        .type(loging.pasw)
       cy.get('#AccountFrm_confirm').clear()
        .type(loging.paswConf)
       cy.get('#AccountFrm_agree').check()
       cy.get('button.btn.btn-orange.pull-right').click()
       //cy.get('i:contains("Logoff")').click()
    })
    it.only('Autorization+buy good from main page', ()=>{
        cy.get('a:contains("Login or register")').click()
        cy.get('#loginFrm_loginname').clear()
            .type(loging.loginName)
        cy.get('#loginFrm_password').clear()
            .type(loging.pasw)
        cy.get('button[title="Login"]').click()
        cy.get('img[title="Automation Test Store"]').click()
        cy.get('#block_frame_latest_1770 i.fa')
            .eq(0)
            .click()
        cy.get('div.block_7 li.dropdown').click()
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()
        cy.get('a[title="Continue"]').click()
        

    })
})