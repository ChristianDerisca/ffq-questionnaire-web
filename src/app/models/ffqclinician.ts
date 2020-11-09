//Classed to store clinician user data in components

import {Usertype} from "./usertype.enum";

export class FFQClinician {
  id: string;
  userId: string;
  username: string;
  userpassword: string;
  usertype = Usertype.Clinician;
  abbreviation: string;
  firstname: string;
  lastname: string;
  assignedclinic: string;
  previousclinics: string[];
  isactive: boolean;
  parentLimitForClinician: number;


  constructor(userId: string, username: string, userpassword: string, abbreviation: string, firstname: string,
              lastname: string, assignedclinic: string, previousclinics: string[], isactive: boolean, parentLimitForClinician: number) {
    this.userId = userId;
    this.username = username;
    this.userpassword = userpassword;
    this.abbreviation = abbreviation;
    this.firstname = firstname;
    this.lastname = lastname;
    this.assignedclinic = assignedclinic;
    this.previousclinics = previousclinics;
    this.isactive = isactive;
    this.parentLimitForClinician = parentLimitForClinician;
  }

}
