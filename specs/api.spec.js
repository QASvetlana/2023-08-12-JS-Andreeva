import request from 'supertest';

//Get all products
test('Get request', async () => {
    const URL = 'https://dummyjson.com/products';
    // сохраняем ответ с запроса
    const response = await fetch(URL);
    const data = await  response.json();
    console.log(data);
    expect(response.status).toBe(200);
})

//Add a new product
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

//Get a single product
test('Get request', async () => {
    const URL = 'https://dummyjson.com/products/1';
    const response = await fetch(URL);
    const data = await  response.json();
    console.log(data);
    expect(data.id).toEqual(1);
})

//Search products
test('Get request', async () => {
    const URL = 'https://dummyjson.com/products/search?q=phone';
    const response = await fetch(URL);
    const data = await  response.json();
    console.log(data);
    expect(response.status).toBe(200);
})

//Update a product
test('Post request', async () => {
    const URL = 'https://dummyjson.com/products/1';
    const response = await fetch(URL, {
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'iPhone Galaxy +1'
        })
      })
      const data = await  response.json();
      console.log(data);
      expect(data.title).toEqual('iPhone Galaxy +1');
    })