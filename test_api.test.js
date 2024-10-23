
describe(
    'API Test',
    () => {
        const url = "https://swapi.dev/api/people";

        test('List should return a maximum of 82 people', async () => {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data)
            expect(data.results.length).toBeLessThanOrEqual(82);
        })

        test('Ensuring that each individual response has the expected ', async () => {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data)
            data.results.forEach((person) => {
                expect(person).toHaveProperty('name');
                expect(person).toHaveProperty('height');
                expect(person).toHaveProperty('mass');
                expect(person).toHaveProperty('hair_color');
                expect(person).toHaveProperty('skin_color');
                expect(person).toHaveProperty('eye_color');
                expect(person).toHaveProperty('birth_year');
                expect(person).toHaveProperty('gender');
                // check if the property for gender is male,female or n/a

                const validgenders  = ["male", "female", "n/a"];
                expect(validgenders).toContain(person.gender)





                expect(person).toHaveProperty('homeworld');
                expect(person).toHaveProperty('films');
                expect(person).toHaveProperty('species');
                expect(person).toHaveProperty('vehicles');
                expect(person).toHaveProperty('starships');
                expect(person).toHaveProperty('created');
                expect(person).toHaveProperty('edited');
                expect(person).toHaveProperty('url');

            })

    })
})