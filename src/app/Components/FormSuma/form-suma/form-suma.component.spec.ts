import { TestBed } from '@angular/core/testing';
import { FormSumaComponent } from './form-suma.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../Services/User/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('FormSumaComponent Test', () => {
  let component: FormSumaComponent;
  let fixture;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSumaComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(FormSumaComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should return the sum of 2 numbers', () => {
    const total = component.sum(2, 2);
    expect(total).toEqual(4);
  });

  it('should get the user list', () => {
    const mock = of([
      {
        name : 'Daniel',
        userName: 'daniel'
      }
    ]);
    spyOn(userService, 'getUser').and.returnValue(mock);
    component.getUserFromService();
    expect(component.users.length).toBeGreaterThanOrEqual(1);
  });
});
