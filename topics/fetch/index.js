fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});

// perform npm init in the folder you are working in.
// node index.js


