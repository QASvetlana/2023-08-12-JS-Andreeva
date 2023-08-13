import request from 'supertest';

test('Get request', async () => {
    const URL = 'https://dummyjson.com/products';
    const response = await fetch(URL);
    const data = await  response.json();
    console.log(data);
    expect(response.status).toBe("200");
})