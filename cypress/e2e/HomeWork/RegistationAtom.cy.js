///<reference types="cypress"/>

import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
import * as loging from '../../fixtures/loging.json'

    loging.firstName = faker.name.firstName()
    loging.lastName = faker.name.lastName()
    loging.email = faker.internet.email('jonny', 'dou', 'gmail.com', { allowSpecialCharacters: false})
    loging.adress1 = faker.address.streetAddress()
    loging.city = faker.address.city()
    loging.loginName = faker.internet.userName()
    loging.pasw = faker.internet.password(15)
    loging.zipCode = faker.address.zipCode('####')

    //let pass=0;

describe ('Test Suite Registration and Autorization', () => {
    beforeEach('Visit main page',()=>{
        cy.log('**Open web home page**')
        cy.visit('https://automationteststore.com/')
    })
    it('Registration', ()=> {  
        cy.log('**Search Login and Register**')
       cy.get('a:contains("Login or register")').click()
       cy.log('**Choose Registaration**')
       cy.get('button[title="Continue"]').click()
       cy.log('**Fill in inputs and other registation informantion**')
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
        // cy.get('#AccountFrm_zone_id').select(2, {force:true}) - flow from Sanitasky
        // .invoke('val')
        // .should('not.eq', 'FALSE')
       cy.get('#AccountFrm_city').clear()
        .type(loging.city)
       cy.get('#AccountFrm_postcode').clear()
        .type(loging.zipCode)
       cy.get('#AccountFrm_loginname').clear()
        .type(loging.loginName)
       cy.get('#AccountFrm_password').clear()
        .type(loging.pasw)
        // cy.get('#AccountFrm_password').then(el => {
        //     pass = el.text
        // })
       cy.get('#AccountFrm_confirm').clear()
        .type(loging.pasw)
       cy.get('#AccountFrm_agree').check()
       cy.get('button.btn.btn-orange.pull-right').click()
       cy.log('**Check in User is Logged in after Registation**')
       cy.get('div.menu_text')
        .should('contain', loging.firstName)
        cy.log('**Logout**')
       cy.get('#customer_menu_top ul.sub_menu.dropdown-menu').click({force: true})
       cy.get('#customer_menu_top ul.sub_menu li.dropdown').last().click()

       console.log(loging)
    })
    it('Autorization+buy good from main page', ()=>{
        cy.log('Searching LogIn form')
        cy.get('a:contains("Login or register")').click()
        cy.get('#loginFrm_loginname').clear()
            .type(loging.loginName)
        cy.get('#loginFrm_password').clear()
            .type(loging.pasw)
        cy.get('button[title="Login"]').click()
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