const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = "";

  // Instead of forloop use Map method
  // Code here
  //   console.log(hi);
  detailedPlayers = players.map((player, i) => {
    if ((i + 1) % 2 !== 0) {
      return {
        name: player,
        strength: 100,
        image: "./images/super-" + (i + 1) + ".png",
        type: "hero",
      };
    } else {
      return {
        name: player,
        strength: 100,
        image: "./images/super-" + (i + 1) + ".png",
        type: "villain",
      };
    }
  });

  //   console.log(detailedPlayers);
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
  let fragment = "";

  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join
  // Type your code here
  //   players.map((player, index) => player.tye).filter();
  let Arrr = players
    .filter((player) => {
      if (player.type === type) return true;
    })
    .map((player) => {
      fragment = `<div class="player"><img src="${player.image}" alt=""><div class="name">${player.name}</div><div class="strength">${player.strength}</div></div>`;
      return fragment;
    })
    .join("");

  let Arr = players
    .filter((player) => {
      if (player.type === type) return true;
    })
    .map((player) => {
      fragment = `<div class="player"><img src="${player.image}" alt=""><div class="name">${player.name}</div><div class="strength">${player.strength}</div></div>`;
      return fragment;
    })
    .join("");

  return Arr;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
// viewPlayers(initPlayers(PLAYERS));
