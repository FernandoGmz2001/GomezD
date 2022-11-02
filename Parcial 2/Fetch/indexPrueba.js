const main = document.querySelector(".main");
// const btnGenerarPokemon = document.querySelector(".btnGenerarPokemon");
const pokemonImage = document.querySelector(".pokemonImage");
const cardTitle = document.querySelector(".cardTitle");
const cardTitle2 = document.querySelector(".cardTitle2");
const descriptionTitle = document.querySelector(".description-title");
const descriptionContent = document.querySelector(".description-content");
const pokemonNumber = document.querySelector(".pokemonNumber");
const cardTitleBg = document.querySelector(".cardTitleBackground");
const card = document.querySelector(".card");

main.addEventListener("click", () => {
  let id = Math.floor(Math.random() * 300);
  fetchPokemons(id);
});

async function fetchPokemons(id) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let data = await response.json();
  const { name, sprites } = data;
  const type = data.types[0].type.name;
  const pkImg = sprites.other.dream_world.front_default;
  const pkSprites = sprites.other.home.front_default;
  console.log(pkSprites);
  console.log(data);
  cambiarFondo(type);
  pokemonImage.src = pkImg;
  if (pkImg == null) {
    pokemonImage.src = pkSprites;
  }
  pokemonNumber.innerHTML = `#${id}`;
  cardTitle.innerHTML = name.toUpperCase();
  descriptionTitle.innerHTML = type.toUpperCase();
  cardTitleBg.innerHTML = name.toUpperCase();
}

// function fetchPokemons(id) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const { name, sprites } = data;
//       const type = data.types[0].type.name;
//       const pkImg = sprites.other.dream_world.front_default;
//       const pkSprites = sprites.other.home.front_default;
//       console.log(pkSprites);
//       console.log(data);
//       cambiarFondo(type);
//       pokemonImage.src = pkImg;
//       if (pkImg == null) {
//         pokemonImage.src = pkSprites;
//       }
//       pokemonNumber.innerHTML = `#${id}`;
//       cardTitle.innerHTML = name.toUpperCase();
//       descriptionTitle.innerHTML = type.toUpperCase();
//       cardTitleBg.innerHTML = name.toUpperCase();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

function cambiarFondo(type) {
  if (type == "water") {
    card.style.backgroundColor = "#41a1e4";
    cardTitle.style.color = "#2F83BE";
    cardTitleBg.style.color = "#2F83BE99";
    pokemonNumber.style.color = "#2F83BE";
    main.className = "bgWater main";
  }
  if (type == "grass") {
    card.style.backgroundColor = "#7abf3d";
    cardTitle.style.color = "#55852A";
    cardTitleBg.style.color = "#55852A99";
    pokemonNumber.style.color = "#55852A";
    main.className = "bgGrass main";
  }
  if (type == "fire") {
    card.style.backgroundColor = "#e8420f";
    cardTitle.style.color = "#99391B";
    cardTitleBg.style.color = "#99391B99";
    pokemonNumber.style.color = "#99391B";
    main.className = "bgFire main";
  }
  if (type == "rock") {
    card.style.backgroundColor = "#b8a576";
    cardTitle.style.color = "#9D8958";
    cardTitleBg.style.color = "#9D895899";
    pokemonNumber.style.color = "#9D8958";
    main.className = "bgRock main";
  }
  if (type == "poison") {
    card.style.backgroundColor = "#9f599f";
    cardTitle.style.color = "#813981";
    cardTitleBg.style.color = "#81398199";
    pokemonNumber.style.color = "#813981";
    main.className = "bgPoison main";
  }
  if (type == "psychic") {
    card.style.backgroundColor = "#f266c9";
    cardTitle.style.color = "#DC2CA8";
    cardTitleBg.style.color = "#DC2CA899";
    pokemonNumber.style.color = "#DC2CA8";
    main.className = "bgPsychic main";
  }
  if (type == "electric") {
    card.style.backgroundColor = "#edbc2c";
    cardTitle.style.color = "#C5960B";
    cardTitleBg.style.color = "#C5960B99";
    pokemonNumber.style.color = "#C5960B";
    main.className = "bgElectric main";
  }
  if (type == "fighting") {
    card.style.backgroundColor = "#883b1a";
    cardTitle.style.color = "#B87558";
    cardTitleBg.style.color = "#B8755899";
    pokemonNumber.style.color = "#B87558";
    main.className = "bgFighting main";
  }
  if (type == "bug") {
    card.style.backgroundColor = "#989f0d";
    cardTitle.style.color = "#7E8321";
    cardTitleBg.style.color = "#7E832199";
    pokemonNumber.style.color = "#7E8321";
    main.className = "bgBug main";
  }
  if (type == "normal") {
    card.style.backgroundColor = "#c1b8b1";
    cardTitle.style.color = "#96958C";
    cardTitleBg.style.color = "#96958C99";
    pokemonNumber.style.color = "#96958C";
    main.className = "bgNormal main";
  }
  if (type == "ghost") {
    card.style.backgroundColor = "#4f187d";
    cardTitle.style.color = "#7E2CC2";
    cardTitleBg.style.color = "#7E2CC299";
    pokemonNumber.style.color = "#7E2CC2";
    main.className = "bgGhost main";
  }
  if (type == "fairy") {
    card.style.backgroundColor = "#de90df";
    cardTitle.style.color = "#A36EA4";
    cardTitleBg.style.color = "#A36EA499";
    pokemonNumber.style.color = "#A36EA4";
    main.className = "bgFairy main";
  }
  if (type == "ground") {
    card.style.backgroundColor = "#d5b45e";
    cardTitle.style.color = "#998349";
    cardTitleBg.style.color = "#99834999";
    pokemonNumber.style.color = "#998349";
    main.className = "bgGround main";
  }
}

//

// function consultarPokemones(data) {
//   const { results } = data;
//   results.forEach((pokemon) => consultarDatos(pokemon));
//   //   results.forEach((pokemon) => crearPokemons(pokemon));
// }

// function crearPokemons(pokemon) {
//   const card = document.createElement("div");
//   card.className = "card";
//   card.innerHTML = `
//       <div class="cardName">${pokemon.name}</div>
// `;
//   main.appendChild(card);
// }

// function consultarDatos(pokemon) {
//   fetch(pokemon.url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   // .then((data) => obtenerImagenes(data));
// }

// function obtenerImagenes(data) {
//   data.forEach((items) => {
//     console.log(items);
//   });
// }
