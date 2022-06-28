import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints:number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const lesion = this.lifePoints - attackPoints;
    if (lesion > 0) {
      this._lifePoints -= lesion;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }
}

export default Monster;