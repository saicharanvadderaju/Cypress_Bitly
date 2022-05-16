// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("GenerateQRCode", (QRcode) => {
    const currentValue = 1000;
    const targetValue = 2000;
    const increment = 100;
    const steps = (targetValue - currentValue) / increment;
    const arrows = '{rightarrow}'.repeat(steps);

    cy.get('.rz-pointer.rz-pointer-min')
      .should('have.attr', 'aria-valuenow', 1000)
      .type(arrows)

    cy.get('.rz-pointer.rz-pointer-min')
      .should('have.attr', 'aria-valuenow', 1250)

    //Verify if CReate QR code Button is displayed and click on it.
    cy.contains("Create QR Code").should("be.visible").click()
    })
