import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimepodCreationPage } from './timepod-creation.page';

describe('TimepodCreationPage', () => {
  let component: TimepodCreationPage;
  let fixture: ComponentFixture<TimepodCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimepodCreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimepodCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
