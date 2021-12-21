//TC_LOGIN001
context('Cypress Logout', () => {
    it('Login Skenario sukses', () => {
        cy.visit('https://library.polinema.ac.id') // mengunjungi website
        cy.get('.ml-auto > .text-indigo-300').click()
        cy.get('form > :nth-child(1) > .w-full').type('1941720109') // cari input username kemudian otomatis isi dengan username
        cy.get('.mt-8 > .w-full').type('hendra11') // cari input password kemudian otomatis isi dengan password
        cy.get('.mt-10 > .flex').click() // klik login
    })
    it('Logout skenario', ()=>{
        cy.get('.ml-auto > .relative > .hidden').click()// klik dropdown
        cy.get(':nth-child(6) > .flex > .ml-3').click() // klik logout
    })
})
//TC_LOGIN002
context('Cypress Logout', () => {
    it('Login Skenario wrong username', () => {
        cy.visit('https://library.polinema.ac.id') // mengunjungi website
        cy.get('.ml-auto > .text-indigo-300').click()
        cy.get('form > :nth-child(1) > .w-full').type('1941720111') // cari input username kemudian otomatis isi dengan username
        cy.get('.mt-8 > .w-full').type('hendra11') // cari input password kemudian otomatis isi dengan password
        cy.get('.mt-10 > .flex').click() // klik login
    })
    it('Logout skenario', ()=>{
        cy.get('.ml-auto > .relative > .hidden').click()// klik dropdown
        cy.get(':nth-child(6) > .flex > .ml-3').click() // klik logout
    })
})
//TC_LOGIN003
context('Cypress Logout', () => {
    it('Login Skenario wrong password', () => {
        cy.visit('https://library.polinema.ac.id') // mengunjungi website
        cy.get('.ml-auto > .text-indigo-300').click()
        cy.get('form > :nth-child(1) > .w-full').type('1941720109') // cari input username kemudian otomatis isi dengan username
        cy.get('.mt-8 > .w-full').type('12345678') // cari input password kemudian otomatis isi dengan password
        cy.get('.mt-10 > .flex').click() // klik login
    })
    it('Logout skenario', ()=>{
        cy.get('.ml-auto > .relative > .hidden').click()// klik dropdown
        cy.get(':nth-child(6) > .flex > .ml-3').click() // klik logout
    })
})
//TC_LOGIN004
context('Cypress Logout', () => {
    it('Login Skenario wrong password & username', () => {
        cy.visit('https://library.polinema.ac.id') // mengunjungi website
        cy.get('.ml-auto > .text-indigo-300').click()
        cy.get('form > :nth-child(1) > .w-full').type('1941720111') // cari input username kemudian otomatis isi dengan username
        cy.get('.mt-8 > .w-full').type('12345678') // cari input password kemudian otomatis isi dengan password
        cy.get('.mt-10 > .flex').click() // klik login
    })
    it('Logout skenario', ()=>{
        cy.get('.ml-auto > .relative > .hidden').click()// klik dropdown
        cy.get(':nth-child(6) > .flex > .ml-3').click() // klik logout
    })
})