import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  set energyType(typeEnergy: EnergyType) {
    this._energyType = typeEnergy;
  }

  static createdArchetypeInstances(): number {
    this._createdInstances += 1;
    return this._createdInstances;
  }
}

export default Ranger;