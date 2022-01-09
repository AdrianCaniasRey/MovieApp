import { MenuModule } from 'src/app/components/menu/menu.module';
import { PersonalInfoComponent } from 'src/app/components/personal-info/personal-info.component';
import { PersonalInfoModule } from 'src/app/components/personal-info/personal-info.module';
import { ProjectInfoModule } from 'src/app/components/project-info/project-info.module';
import { ProjectInfoComponent } from 'src/app/components/project-info/project-info.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { HomePage } from './home.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePage,
        MenuComponent,
        PersonalInfoComponent,
        ProjectInfoComponent
      ],
      imports: [
        MenuModule,
        PersonalInfoModule,
        ProjectInfoModule,
        IonicModule.forRoot(),
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('app-menu should be not visible', () => {
    expect(fixture.nativeElement.querySelector('app-menu')).toBeTruthy();
  });

  it('ion-menu should be not visible', () => {
    expect(fixture.nativeElement.querySelector('ion-menu')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('ion-menu')).not.toHaveClass('show-menu');
  });

  it('platform should be visible', () => {
    expect(fixture.debugElement.nativeElement.querySelector('.platform')).toBeTruthy();
  });

  it('app-personal-info should be visible', () => {
    expect(fixture.nativeElement.querySelector('app-personal-info')).toBeTruthy();
  });

  it('app-project-info should be visible', () => {
    expect(fixture.nativeElement.querySelector('app-project-info')).toBeTruthy();
  });

});
