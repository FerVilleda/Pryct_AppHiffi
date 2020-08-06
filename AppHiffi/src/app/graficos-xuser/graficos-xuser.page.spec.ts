import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraficosXuserPage } from './graficos-xuser.page';

describe('GraficosXuserPage', () => {
  let component: GraficosXuserPage;
  let fixture: ComponentFixture<GraficosXuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficosXuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraficosXuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
