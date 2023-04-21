fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    //de JSON a dato manipulable (objeto o array)
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-personajes");

    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
    <div class="tarjeta">
        <img class="image"src="${personajes[i].image}">
        <div class="tarjeta2"> 
        <h3 class="nombre-personaje">${personajes[i].name}</h3>
        <p>Gender: ${personajes[i].gender}</p>
        <p>Species: ${personajes[i].species}</p>
        <p>Status: ${personajes[i].status}</p>
       </div>
    </div>
      `;
    }
  });
