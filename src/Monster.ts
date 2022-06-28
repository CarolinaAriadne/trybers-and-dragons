import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const lesion = this._lifePoints - attackPoints;
    if (attackPoints > 0) {
      if (lesion <= 0) {
        this._lifePoints = -1;
      } else {
        this._lifePoints = lesion;
      }
    } 

    return this._lifePoints;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }
}

export default Monster;
