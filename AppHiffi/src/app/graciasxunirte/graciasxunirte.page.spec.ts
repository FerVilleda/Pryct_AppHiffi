import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraciasxunirtePage } from './graciasxunirte.page';

describe('GraciasxunirtePage', () => {
  let component: GraciasxunirtePage;
  let fixture: ComponentFixture<GraciasxunirtePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraciasxunirtePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraciasxunirtePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
