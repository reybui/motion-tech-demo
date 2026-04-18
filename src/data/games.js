import eldenRing from "../assets/1.jpg";
import hollowKnight from "../assets/2.jpg";
import civilization from "../assets/3.jpg";
import hades from "../assets/4.jpg";
import godOfWar from "../assets/5.jpg";
import minecraft from "../assets/6.jpg";
import lastOfUs from "../assets/7.jpg";
import sekiro from "../assets/8.jpg";
import subnautica from "../assets/9.jpg";
import gtaV from "../assets/10.jpg";

export const games = [
  {
    id: 1,
    title: "Elden Ring",
    genre: "RPG",
    rating: 9.6,
    year: 2022,
    developer: "FromSoftware",
    cover: eldenRing,
    description:
      "An open-world action RPG set in the Lands Between, featuring brutal combat and deep lore.",
  },
  {
    id: 2,
    title: "Hollow Knight",
    genre: "Indie",
    rating: 9.1,
    year: 2017,
    developer: "Team Cherry",
    cover: hollowKnight,
    description:
      "A challenging metroidvania set in a vast underground kingdom of insects.",
  },
  {
    id: 3,
    title: "Civilization VI",
    genre: "Strategy",
    rating: 8.7,
    year: 2016,
    developer: "Firaxis",
    cover: civilization,
    description:
      "Build an empire to stand the test of time in this turn-based strategy classic.",
  },
  {
    id: 4,
    title: "Hades",
    genre: "Indie",
    rating: 9.3,
    year: 2020,
    developer: "Supergiant",
    cover: hades,
    description:
      "A rogue-like dungeon crawler where you fight out of the Underworld of Greek myth.",
  },
  {
    id: 5,
    title: "God of War",
    genre: "Action",
    rating: 9.4,
    year: 2018,
    developer: "Santa Monica",
    cover: godOfWar,
    description:
      "Kratos and his son Atreus journey through the Norse realms in this cinematic action epic.",
  },
  {
    id: 6,
    title: "Minecraft",
    genre: "Sandbox",
    rating: 9.2,
    year: 2011,
    developer: "Mojang",
    cover: minecraft,
    description:
      "A sandbox building game about exploring, crafting, and surviving in a blocky open world.",
  },
  {
    id: 7,
    title: "The Last of Us",
    genre: "Action",
    rating: 9.0,
    year: 2013,
    developer: "Naughty Dog",
    cover: lastOfUs,
    description:
      "A story-driven action-adventure about survival in a post-apocalyptic America.",
  },
  {
    id: 8,
    title: "Sekiro",
    genre: "Action",
    rating: 9.1,
    year: 2019,
    developer: "FromSoftware",
    cover: sekiro,
    description:
      "A shinobi's revenge story set in late 1500s Sengoku Japan with precise, lethal combat.",
  },
  {
    id: 9,
    title: "Subnautica",
    genre: "Adventure",
    rating: 9.0,
    year: 2018,
    developer: "Unknown Worlds",
    cover: subnautica,
    description:
      "An underwater survival adventure about exploring an alien ocean and building to survive.",
  },
  {
    id: 10,
    title: "Grand Theft Auto V",
    genre: "Action",
    rating: 9.0,
    year: 2013,
    developer: "Rockstar Games",
    cover: gtaV,
    description:
      "An open-world action-adventure game set in the fictional state of San Andreas.",
  },
];

export const genres = [
  "All",
  "Action",
  "Adventure",
  "RPG",
  "Sandbox",
  "Indie",
  "Strategy",
];
