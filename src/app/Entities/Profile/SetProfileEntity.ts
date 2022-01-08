import { ProfileEntity } from './ProfileEntity';

export interface SetProfileEntity extends ProfileEntity{
  FirstName: string,
  LastName: string,
  Bio: string,
  Img: string
  Email: string,
  PhoneNumber: string,
}
