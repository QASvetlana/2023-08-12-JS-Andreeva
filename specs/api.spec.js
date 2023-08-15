import request from 'supertest';

test('Get request', async () => {
    const URL = 'https://dummyjson.com/products';
    // сохраняем ответ с запроса
    const response = await fetch(URL);
    const data = await  response.json();
    console.log(data);
    expect(response.status).toBe(200);
})

test('Post request', async () => {
    const URL = 'https://dummyjson.com/products/add';
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 101,
            title: 'BMW Pencil'
        })
    })
    const data = await response.json();
    console.log(data);
    expect(data.id).toEqual(101);
})

