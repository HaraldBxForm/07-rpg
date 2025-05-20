// ==============================
// 🌱 Sélection des éléments
// ==============================

// Inputs
const inputHeroName = document.querySelector(`.hero-name`);
const inputHeroCategory = document.querySelector(`.hero-category`);

const inputStrength = document.querySelector(`.strength-input`);
const inputMagic = document.querySelector(`.magic-input`);

const choicesHero = document.querySelector(`.hero-choices`);
const choicesTarget = document.querySelector(`.target-choices`);
const choicesAttacks = document.querySelector(`.attacks-choices`);
// Button
const addButton = document.querySelector(`.add-button`);
const fightButton = document.querySelector(`.fight-button`)
// Display
const displayPlayers = document.querySelector(`.players-container`);
const displayMessages = document.querySelector(`.action-messages`);

// ==============================
// 🧠 Variables globales
// ==============================
class Chevalier {
  constructor(name, strength, magic, maxlife, life, mana, potion, category) {
    this.name = name;
    this.strength = strength;
    this.magic = magic;
    this.maxlife = maxlife;
    this.life = life;
    this.mana = mana;
    this.potion = potion;
    this.category = category;
  }

  shout() {
    return (`Je suis ${this.name} et je n'aurai aucune pitié !`)
  }

  attack(target) {
    target.life -= this.strength;
    return (`${target.name} a désormais ${target.life} ❤️`)
  }

  magicAttack(target) {
    if (this.mana >= 20) {
        target.life -= this.magic;
        this.mana -= 20;
        return (`${target.name} a désormais ${target.life}`)
    } else {
        return `${this.name} n'a plus assez de Mana !`;
    }
  }

  getDamages(damage) {
    this.life -= damage;
    return `${this.name} a encore ${this.life} ❤️`;
  }

  usePotion() {
    if (this.potion >= 1) {
      this.life += 10;
    //   S'assurer qu'on ne dépasse pas le max de PV
      if (this.life > 100) {
        this.life = 100;
      }
      this.potion -= 1;
      return `${this.name} utilise une potion. Vie: ${this.life}, Potions restantes: ${this.potion}`;
    } else {
      return `${this.name} n'a plus de potion`;
    }
  }

  isDead() {
    return (this.life <= 0)
  }

  resetMaxLife() {
    this.life = this.maxlife;
    return this.life
  }
}

const charactersList = []
// ==============================
// 🎊 Fonctionnalités
// ==============================

const chevalier1 = new Chevalier("Olivier", 50, 20, 100, 100, 40, 2, "Catégoerie")

const chevalier2 = new Chevalier("Hugues", 30, 50, 100, 100, 20, 2, "Catégorie")

console.log(chevalier1.getDamages(10));
console.log(chevalier1.getDamages(10));
console.log(chevalier1.resetMaxLife());

function checkAvailableName(nameToCheck) {
  newListToCheck = charactersList.map(element => element.name);
  return newListToCheck.includes(nameToCheck);
}

function addCharacterToList() {
  if (checkAvailableName(inputHeroName.value)) {
      alert("Nom d'utilisateur indisponible");

  } else if (inputHeroName.value && inputHeroCategory.value && inputStrength.value && inputMagic.value) {
    charactersList.push(new Chevalier(inputHeroName.value, inputStrength.value, inputMagic.value, 100, 100, 40, 2, inputHeroCategory.value));

    // Ajout dans la liste des options
    const option = document.createElement(`option`);
    option.id = option.value = inputHeroName.value;
    option.textContent = `${inputHeroName.value} | ${inputHeroCategory.value} | ${charactersList[charactersList.length-1].life} ❤️ | ${charactersList[charactersList.length-1].strength} ⚔️`;

    choicesHero.appendChild(option.cloneNode(true));
    choicesTarget.appendChild(option);
  } 

    else {
    alert("Veuillez remplir tous les champs")
  }

}

function displayCharactersBoxes() {
  displayPlayers.innerHTML = ``;
  charactersList.forEach((element) => {
    let div = document.createElement(`div`);
    div.classList =`player-element`
    div.innerHTML = `<div class="${element.name}">
                <h2>${element.name}</h2>
                <div>${element.category}</div>
                <div>Force : ${element.strength}</div>
                <div>Santé : ${element.life} ❤️</div>
                <div>Potion : ${element.potion} ⚗️</div>
            </div>`;

    displayPlayers.appendChild(div);
  });
}

// Retrouver le personnage dans la liste en fonction du nom
function getCharacterByName(name) {
  return charactersList.find(character => character.name === name);
}

// Display Message Box
function displayActionMessages(text) {
    displayMessages.innerHTML = `${text}`;
    
    // Délai pour faire disparaitre le text
    setTimeout(() => {
        displayMessages.innerHTML = ``;
    }, 4000);
}

// Reset Fields
function resetFields() {
  inputHeroName.value = ``;
  inputHeroCategory.value = ``;
  inputStrength.value = ``;
  inputMagic.value = ``;
  choicesHero.value = ``;
  choicesTarget.value = ``;
  choicesAttacks.value = ``;
}

// function displayChoicesLists
// ==============================
// 🧲 Événements
// ==============================
addButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  addCharacterToList()
  displayCharactersBoxes();
  // console.log(charactersList);
  resetFields();
})

// Test

fightButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  
  // Selection Protocol
  const selectedHeroName = choicesHero.value;
  const selectedHero = getCharacterByName(selectedHeroName);

  const selectedTargetName = choicesTarget.value;
  const selectedTarget = getCharacterByName(selectedTargetName);

    if (selectedHero.isDead) {
      displayActionMessages(`${selectedHero.name} est mort ! 💀`);
    }
    else if (choicesAttacks.value === "use-potion") {
      selectedHero.usePotion();
      displayActionMessages(selectedHero.usePotion());
    }
    else if (choicesAttacks.value === "sword-attack") {
    selectedHero.attack(selectedTarget);
    displayActionMessages(selectedHero.attack(selectedTarget));

  } else if (choicesAttacks.value === "magic-attack") {
    selectedHero.magicAttack(selectedTarget);
    console.log(selectedHero.magicAttack(selectedTarget));
    
  }
  
  resetFields();
  displayCharactersBoxes();
})

