describe('Тест формы входа', () => {
    
    it('Форма имеет все необходимые поля', () => {
    
        cy.visit("http://localhost:8080/admin#/login");
    
        cy.get('.login-input input').should('be.visible');
        cy.get('.password-input input').should('be.visible');
        cy.get('.submit-btn').should('be.visible');
    });

    it('Кнопка “Отправить” заблокирована, пока не введены все данные', () => {

        cy.visit("http://localhost:8080/admin#/login");

        cy.get('.login-input input')
            .type('user_name', { delay: 100 });

        cy.get('.submit-btn').should('have.attr', 'disabled', 'disabled');

        cy.get('.login-input input').clear();

        cy.get('.password-input input')
            .type('password', { delay: 100 });

        cy.get('.submit-btn').should('have.attr', 'disabled', 'disabled');

        cy.get('.login-input input')
            .type('user_name', { delay: 100 });

        cy.get('.submit-btn').should('not.have.attr', 'disabled');
    });

    it('На странице есть кнопка "Авторизоваться"', () => {

        cy.visit("http://localhost:8080/admin#/login");

        cy.get('.submit-btn').should('be.visible');
    });

});
