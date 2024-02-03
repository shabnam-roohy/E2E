describe('API Tests', () => {
    it.only('should make a GET request and assert the response', () => {
        // Make a GET request to the API endpoint
        cy.request('https://reqres.in/api/users?page=2')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).property('total_pages').to.be.a('number')
                expect(response.body).property('data').to.be.a('array')
                const firstPost = response.body.data[1];
                expect(firstPost).to.have.property('email').that.is.a('string');
            })
    });
    it('should check the API response of an array', () => {
        // Make an API request using Cypress command
        cy.request('https://reqres.in/api/users?page=2').then((response) => {
            // Assert that the response status is 200 (OK)
            expect(response.status).to.equal(200);

            // Assert that the response body is an array


            // Assert that the array has at least one item

            // Log information about the first post to the Cypress command log
            cy.log('First post:', response.body[0]);

            // Assert properties of the first post
            const firstPost = response.body.data[0];
            expect(firstPost).to.have.property('id').that.is.a('number');

        });
    });
});
