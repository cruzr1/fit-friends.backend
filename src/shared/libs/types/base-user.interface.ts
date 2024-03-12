import { UserRole } from './user-role.enum';
import { Location } from './location.enum';
import { Level } from './level.enum';
import { TrainType } from './train-type.enum';
import { Gender } from './gender.enum';

export interface BaseUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  password: string;
  gender: Gender;
  birthDate?: Date;
  role: UserRole;
  description: string;
  location: Location;
  backgroundImage: string;
  createdAt: Date;
  level: Level;
  trainType: TrainType;
  isReadyTrain: boolean;
}