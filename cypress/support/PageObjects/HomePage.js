class HomePage
{

getImageLogo()
{
    return cy.get("a[title='QRCode Monkey - The 100% Free QR Code Generator'] .logo")
}

getLogoText()
{
    return cy.get(".d-none.d-md-block")
}

getQRCodeImage()
{
    return cy.get("[alt='QR Code Preview']")
}

getDownloadPNG()
{
    return cy.contains("Download PNG")
}

getDownloadSVG()
{
    return cy.contains(".SVG")
}

getDownloadPDF()
{
    return cy.contains(".PDF*")
}

getDownloadEPS()
{
    return cy.contains(".EPS*")
}

getQRCodeGenerationInProgressMessage()
{
    return cy.contains("Your QR Code is being Generated. Please do not refresh or close the window.")
}


getTopNavigationBar()
{
    return cy.get(".type-bar-inner a")
}

}

export default HomePage;