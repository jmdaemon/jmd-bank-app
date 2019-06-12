import { User } from './user';

describe('User', () => {
  let data = {id: 1, email : 'a', pass: 'b', name: [ 'c', 'd', 'e' ], address: [ 'f', 'g', 'h', 'i'  ]};
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();

  it('should instantiate values'), () => {

    let user = new User(data);
    expect(user.id = 1
    );   
    }

  });
});
