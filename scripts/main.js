// ==============================
// 🌱 Sélection des éléments
// ==============================

// Inputs

// Button

// Display

// ==============================
// 🧠 Variables globales
// ==============================
class Chavalier {
  constructor(name, strength, magic, life, mana, potion) {
    this.name = name;
    this.strength = strength;
    this.magic = magic;
    this.life = life;
    this.mana = mana;
    this.potion = potion;
  }

  shout() {
    return (`Je suis ${this.name} et je n'aurai aucune pitié !`)
  }

  attack(ennemi) {
    ennemi.life -= this.strength;
  }

  magicAttack() {
    if (this.mana >= 20) {
        ennemi.life -= this.magic;
        this.mana -= 20;
    }
  }

  getDamages(damage) {

  }

  usePotion() {
    if (this.potion >= 1) {
      this.life += 10;
      this.potion -= 1;
      return `${this.name} utilise une potion. Vie: ${this.life}, Potions restantes: ${this.potion}`;
    } else {
      return `${this.name} n'a plus de potion`;
    }
  }

  isDead() {
    if (this.life <= 0) {
      return;
    }
  }
}
// ==============================
// 🎊 Fonctionnalités
// ==============================

// ==============================
// 🧲 Événements
// ==============================
