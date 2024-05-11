Feature: Sign up
    Scenario: Sign up succesfully 
        Given un estudiante nuevo
        And quiere registrarse con nombre "Estudiante" 
        And y el apellido "apellido"
        When hace click en "Registrarse"
        Then se registra correctamente avisandonos  "Se registro correctamente"
        And muestra el numero de estudiante 123456  