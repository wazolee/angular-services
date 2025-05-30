const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/api/products", (req, res) => {
  let productsArray = fetchProductsFromDatabase();
  res.send(productsArray);
});

app.get("/api/engineers", (req, res) => {
  let productsArray = fetchEngineersFromDatabase();
  res.send(productsArray);
});

function fetchProductsFromDatabase() {
  return [
    {
      id: 1,
      description:
        "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
      name: "Large Cyclops",
      imageName: "robot-parts/head-big-eye.png",
      category: "Heads",
      price: 1220.5,
      discount: 0.2,
    },
    {
      id: 17,
      description: "A spring base - great for reaching high places.",
      name: "Spring Base",
      imageName: "robot-parts/base-spring.png",
      category: "Bases",
      price: 1190.5,
      discount: 0,
    },
    {
      id: 6,
      description:
        "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
      name: "Articulated Arm",
      imageName: "robot-parts/arm-articulated-claw.png",
      category: "Arms",
      price: 275,
      discount: 0,
    },
    {
      id: 2,
      description:
        "A friendly robot head with two eyes and a smile -- great for domestic use.",
      name: "Friendly Bot",
      imageName: "robot-parts/head-friendly.png",
      category: "Heads",
      price: 945.0,
      discount: 0.2,
    },
    {
      id: 3,
      description:
        "A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",
      name: "Shredder",
      imageName: "robot-parts/head-shredder.png",
      category: "Heads",
      price: 1275.5,
      discount: 0,
    },
    {
      id: 16,
      description:
        "A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",
      name: "Single Wheeled Base",
      imageName: "robot-parts/base-single-wheel.png",
      category: "Bases",
      price: 1190.5,
      discount: 0.1,
    },
    {
      id: 13,
      description: "A simple torso with a pouch for carrying items.",
      name: "Pouch Torso",
      imageName: "robot-parts/torso-pouch.png",
      category: "Torsos",
      price: 785,
      discount: 0,
    },
    {
      id: 7,
      description:
        "An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",
      name: "Two Clawed Arm",
      imageName: "robot-parts/arm-dual-claw.png",
      category: "Arms",
      price: 285,
      discount: 0,
    },

    {
      id: 4,
      description: "A simple single-eyed head -- simple and inexpensive.",
      name: "Small Cyclops",
      imageName: "robot-parts/head-single-eye.png",
      category: "Heads",
      price: 750.0,
      discount: 0,
    },
    {
      id: 9,
      description:
        "An arm with a propeller -- good for propulsion or as a cooling fan.",
      name: "Propeller Arm",
      imageName: "robot-parts/arm-propeller.png",
      category: "Arms",
      price: 230,
      discount: 0.1,
    },
    {
      id: 15,
      description: "A rocket base capable of high speed, controlled flight.",
      name: "Rocket Base",
      imageName: "robot-parts/base-rocket.png",
      category: "Bases",
      price: 1520.5,
      discount: 0,
    },
    {
      id: 10,
      description: "A short and stubby arm with a claw -- simple, but cheap.",
      name: "Stubby Claw Arm",
      imageName: "robot-parts/arm-stubby-claw.png",
      category: "Arms",
      price: 125,
      discount: 0,
    },
    {
      id: 11,
      description:
        "A torso that can bend slightly at the waist and equiped with a heat guage.",
      name: "Flexible Gauged Torso",
      imageName: "robot-parts/torso-flexible-gauged.png",
      category: "Torsos",
      price: 1575,
      discount: 0,
    },
    {
      id: 14,
      description: "A two wheeled base with an accelerometer for stability.",
      name: "Double Wheeled Base",
      imageName: "robot-parts/base-double-wheel.png",
      category: "Bases",
      price: 895,
      discount: 0,
    },
    {
      id: 5,
      description:
        "A robot head with three oscillating eyes -- excellent for surveillance.",
      name: "Surveillance",
      imageName: "robot-parts/head-surveillance.png",
      category: "Heads",
      price: 1255.5,
      discount: 0,
    },
    {
      id: 8,
      description: "A telescoping arm with a grabber.",
      name: "Grabber Arm",
      imageName: "robot-parts/arm-grabber.png",
      category: "Arms",
      price: 205.5,
      discount: 0,
    },
    {
      id: 12,
      description: "A less flexible torso with a battery gauge.",
      name: "Gauged Torso",
      imageName: "robot-parts/torso-gauged.png",
      category: "Torsos",
      price: 1385,
      discount: 0,
    },
    {
      id: 18,
      description:
        "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
      name: "Triple Wheeled Base",
      imageName: "robot-parts/base-triple-wheel.png",
      category: "Bases",
      price: 700.5,
      discount: 0,
    },
  ];
}

function fetchEngineersFromDatabase() {
  return [{
    id: 1,
    name: "Junior Engineer",
    description: "A cost effective option for simple tasks. Our junior engineers are fully capable of general bot assembly.",
    imageName: "profile-images/junior.png",
    category: "Junior",
    price: 120,
    discount: 0
  },
  {
    id: 2,
    name: "Associate Engineer",
    description: "Associate engineers can help with both assembly and troubleshooting simple issues with connectivity and functionalty.",
    imageName: "profile-images/associate.png",
    category: "Associate",
    price: 180,
    discount: 0
  },
  {
    id: 3,
    name: "Senior Engineer",
    description: "Senior engineers are capable and efficient at programming individual bots and troubleshooting complex issues with complicated bots and systems.",
    imageName: "profile-images/senior.png",
    category: "Senior",
    price: 225,
    discount: 0
  },
  {
    id: 3,
    name: "Chief Engineer",
    description: "Our chief engineers will help you create an entire plan for creating an efficient bot workforce and assist in programming them to work within complex systems.",
    imageName: "profile-images/chief.png",
    category: "Chief",
    price: 350,
    discount: 0
  },]
}


app.listen(8081, () => console.log("API Server listening on port 8081!"));
