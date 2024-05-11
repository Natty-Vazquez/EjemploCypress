import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'; 

Given('un estudiante nuevo',() => {
    cy.visit("http://localhost:4200")
});

And('quiere registrarse con nombre {string}', (nombre)=>{
    cy.get("[id=name]").type(nombre);
});

And('y el apellido {string}', (apellido)=>{
    cy.get("[id=lastname]").type(apellido);
});

When('hace click en {string}', (buttonText) => {
    cy.contains(buttonText, { matchCase: false }).click()
});

Then('se registra correctamente avisandonos  {string}', (aviso)=>  {
    cy.contains(aviso, { matchCase: false })
});

And('muestra el numero de estudiante {int}', (numero) => {
    cy.contains(numero)
});