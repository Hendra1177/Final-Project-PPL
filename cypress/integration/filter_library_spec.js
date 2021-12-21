context('Cypress Sort', () => {
    it('Login', () => {
        cy.visit('http://library.polinema.ac.id') 
        cy.get('.ml-auto > .text-indigo-300').click() 
        cy.get('form > :nth-child(1) > .w-full').type('1941720116')
        cy.get('.mt-8 > .w-full').type('paradinata170999')
        cy.get('.mt-10 > .flex').click() 
         
    })

    it('Filter Ketersediaan', ()=>{
        cy.get('.inline-block > .cursor-pointer').click()
        cy.get('.max-h-80 > :nth-child(2)').click()
        cy.get(':nth-child(3) > .panel-header > button > h4').click() 
        cy.get(':nth-child(3) > .filter-box > .list-single > :nth-child(1) > label').click()
    })
    
    it('Filter Pengarang', ()=>{
        cy.get(':nth-child(4) > .panel-header > button').click()
        cy.get(':nth-child(4) > .filter-box > .list-multi > :nth-child(4) > label').click()
    })

    it('Filter Subyek', ()=>{
        cy.get(':nth-child(4) > .filter-box > .list-multi > :nth-child(4) > label').click()
        cy.get(':nth-child(5) > .panel-header > button').click()
        cy.get(':nth-child(5) > .filter-box > .list-multi > :nth-child(4)').click()
    })

    it('Filter Subyek & Penerbit', ()=>{
        cy.get(':nth-child(6) > .panel-header > button').click()
        cy.get(':nth-child(6) > .filter-box > .list-multi > :nth-child(2)').click()
    })
    
    it('Filter Subyek & Penerbit & tahun terbit', ()=>{
        cy.get(':nth-child(7) > .panel-header > button').click()
        cy.get('.list-single > :nth-child(3)').click()
    })
})
