import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();

  it('should instantiate values'), () => {
    let data = {id: 1, email : 'a', pass: 'b', name: [ 'c', 'd', 'e' ], address: [ 'f', 'g', 'h', 'i'  ]};
    expect(new User(data));   
    }

  });
});
