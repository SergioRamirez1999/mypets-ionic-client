import { FamilyGroup } from './index.model';

export class Animal {
  constructor(
    public id:number,
    public name:string,
    public birthdate:Date,
    public weight:number,
    public animalType:string,
    public familyGroup:FamilyGroup
  ){}
}
