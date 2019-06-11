export class User{
  id:       number;
  email:    string;
  pass:     string;
  name:     string[];
  address:  string[];

  constructor(data: {
  id?:        number,
  email?:     string,
  pass?:      string,
  name?:      string[],
  address?:   string[],
  } = {}) 
  {
  this.id = data.id;
  this.email = data.email;
  this.pass = data.pass;
  this.name = data.name;
  this.address = data.address;
  }
}
