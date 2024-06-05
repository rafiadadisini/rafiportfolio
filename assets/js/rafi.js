// Menambah Para pokemon

// url
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png

const rumahpokemon = document.querySelector(".para-pokemon");
const linkpokemon =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";

for (i = 1; i <= 25; i++) {
  let pokeball = document.createElement("div");
  pokeball.classList.add("col-3");
  pokeball.classList.add("text-center");

  const gambarpoke = document.createElement("img");
  gambarpoke.classList.add("img-thumbnail");
  gambarpoke.classList.add("m-1");
  gambarpoke.classList.add("rounded-circle");

  gambarpoke.src = `${linkpokemon}${i}.png`;

  let textpoke = document.createElement("h5");
  textpoke.append(`#${i}`);

  rumahpokemon.appendChild(pokeball);
  pokeball.appendChild(gambarpoke);
  pokeball.appendChild(textpoke);
}
