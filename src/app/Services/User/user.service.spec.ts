import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let userSerivce: UserService;
  let httpTest: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    userSerivce = TestBed.get(UserService);
    httpTest = TestBed.get(HttpTestingController);
  });

  it('should return the correct info ', () => {
    const mock = {
      name: 'Daniel',
      userName: 'danielmaru'
    };

    userSerivce.getUser().subscribe(response => {
      expect(response.name).toBeDefined();
      expect(response.userName).toBeDefined();
    });

    const request = httpTest.expectOne('https://jsonplaceholder.typicode.com/users');
    request.flush(mock);

  });

});
