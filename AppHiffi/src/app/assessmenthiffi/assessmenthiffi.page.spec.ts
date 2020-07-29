import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssessmenthiffiPage } from './assessmenthiffi.page';

describe('AssessmenthiffiPage', () => {
  let component: AssessmenthiffiPage;
  let fixture: ComponentFixture<AssessmenthiffiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmenthiffiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssessmenthiffiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
