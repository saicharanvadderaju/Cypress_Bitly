/// <reference types="Cypress" />

import HomePage from '../../support/PageObjects/HomePage'

describe('Bitly Assignment Suite', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  })

  it('QR code Monkey Logo to be visible', function () {

    const homepage = new HomePage();

    homepage.getImageLogo().should("be.visible");

    homepage.getLogoText().should("have.text", "The 100% Free QR Code Generator");


  })

  it('Validate the page title', function () {

    cy.title().should('eq', 'QRCode Monkey - The free QR Code Generator to create custom QR Codes with Logo')

  })


  it('Validate QR code preview image is visible on the Right side', function () {

    const homepage = new HomePage();

    homepage.getQRCodeImage().should("be.visible");

  })

  it('Adjust the Slider and Generate of QR Code in PNG format', function () {

    const homepage = new HomePage();

    cy.GenerateQRCode();

    //verify if Download PNG button is visible and click operation to be performed

    homepage.getDownloadPNG().should("be.visible");

    homepage.getDownloadPNG().click();

    //after clicking on download , validate the text which says download is successful

    homepage.getQRCodeGenerationInProgressMessage().should("be.visible");

  })


  it('Adjust the Slider and Generate of QR Code in .SVG format', function () {

    const homepage = new HomePage();

    cy.GenerateQRCode();

    //verify if Download SVG button is visible and click operation to be performed

    homepage.getDownloadSVG().should("be.visible");

    homepage.getDownloadSVG().click();

    //after clicking on download , validate the text which says download is successful

    homepage.getQRCodeGenerationInProgressMessage().should("be.visible");

  })


  it('Adjust the Slider and Generate of QR Code in PDF format', function () {

    const homepage = new HomePage();

    cy.GenerateQRCode();

    //verify if Download PDF button is visible and click operation to be performed

    homepage.getDownloadPDF().should("be.visible");

    homepage.getDownloadPDF().click();

    //after clicking on download , validate the text which says download is successful

    homepage.getQRCodeGenerationInProgressMessage().should("be.visible");

  })

  it('Adjust the Slider and Generate of QR Code in EPS format', function () {

    const homepage = new HomePage();

    cy.GenerateQRCode();

    //verify if Download EPS button is visible and click operation to be performed

    homepage.getDownloadEPS().should("be.visible");

    homepage.getDownloadEPS().click();

    //after clicking on download , validate the text which says download is successful

    homepage.getQRCodeGenerationInProgressMessage().should("be.visible");

  })

  it('Check for the count of navigable tab, there are 23 navigation items', function () {

    const homepage = new HomePage();

    homepage.getTopNavigationBar().should("have.length", "23");

  })


  it('Check if user is able to navigate between couple of tabs and add assertion to some fields', function () {

    const homepage = new HomePage();
    //URL Navigation bar

    homepage.getTopNavigationBar().eq(0).click();

    cy.get("#qrcodeUrl").clear().type('https://www.qrcode-monkey.com').should('have.value', 'https://www.qrcode-monkey.com')

    //Phone Section
    homepage.getTopNavigationBar().eq(3).click();

    cy.get("#qrcodePhone").type("123456789").should("have.value", "123456789");

    //Vcard Section

    homepage.getTopNavigationBar().eq(5).click();

    cy.get("#qrcodeVcardFirstname").should('be.visible');

    cy.get("#qrcodeVcardLastname").should('be.visible');

    cy.get("#qrcodeVcardPhoneWork").should('be.visible');

    cy.get("#qrcodeVcardEmail").should('be.visible');

    cy.get("#qrcodeVcardZipcode").should('be.visible');

  })

  it('Validate visibilty of Upload MP3, PDF or any file link', function () {

    cy.contains("Upload MP3, PDF or any file").should("be.visible");


  })


  it('Validate the number of language the application supports. Languages are available in language dropdown', function () {

    cy.get(".menu.d-none.d-lg-block li:nth-child(5) ul li").should("have.length", "9");


  })


})










