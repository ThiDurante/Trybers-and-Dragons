import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  static counter = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    Mage.counter += 1;
    this._energyType = 'mana';
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Mage.counter;
  }
}