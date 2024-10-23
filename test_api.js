
describe(
    'API Test',
    () => {
        const url = "https://swapi.dev/api/people";

        test('List should return a maximum of 82 people', async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            expect(data.characters.length).toBe(82);
        })
    }
);