import { UserNamePipe } from './user-name.pipe';

describe('UserNamePipe', () => {
  let pipe: UserNamePipe;
  beforeEach(() => {
    pipe = new UserNamePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should format the text', () => {
    const testPipe = pipe.transform('Daniel/Marulanda');
    expect(testPipe).toEqual('Daniel Marulanda');
  });
});
