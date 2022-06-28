import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

class PVP extends Battle {
  private _fighterA: Fighter;
  private _fighterB: Fighter;

  constructor(fighterA: Fighter, fighterB: Fighter) {
    super(fighterA);
    this._fighterA = fighterA;
    this._fighterB = fighterB;
  }

//   fight() {
//       while(this._fighterA)
//   }
}

export default PVP;