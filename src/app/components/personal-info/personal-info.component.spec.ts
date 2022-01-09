import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalInfoComponent } from './personal-info.component';

describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name should be Adrian Canias Rey', () => {
    const name = fixture.nativeElement.querySelector('.name').textContent;
    expect(name).toBe('Adrian Canias Rey');
  });

  it('telf should be +34 605 91 92 93', () => {
    const telf = fixture.nativeElement.querySelector('#telf').textContent;
    expect(telf).toBe('+34 605 91 92 93');
  });

  it('email should be adrian.canias.rey@gmail.com', () => {
    const email = fixture.nativeElement.querySelector('#email').textContent;
    expect(email).toBe('adrian.canias.rey@gmail.com');
  });
});
