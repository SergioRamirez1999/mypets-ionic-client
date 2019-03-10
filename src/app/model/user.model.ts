import { FamilyGroup } from './index.model';
export class User {
  constructor(
    public id:number,
    public name:string,
    public lastName:string,
    public email:string,
    public familyGroup: FamilyGroup,
    public authorities: [],
    public image:string
  ){}
}
