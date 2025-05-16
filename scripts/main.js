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
  constructor(name, strength, magic, maxlife, life, mana, potion) {
    this.name = name;
    this.strength = strength;
    this.magic = magic;
    this.maxlife = maxlife;
    this.life = life;
    this.mana = mana;
    this.potion = potion;
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
// ==============================
// 🎊 Fonctionnalités
// ==============================

const chevalier1 = new Chavalier("Olivier", 50, 20, 100, 100, 40, 2)

const chevalier2 = new Chavalier("Hugues", 30, 50, 100, 100, 20, 2)

console.log(chevalier1.getDamages(10));
console.log(chevalier1.getDamages(10));
console.log(chevalier1.resetMaxLife());

// ==============================
// 🧲 Événements
// ==============================

