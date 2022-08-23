import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfowidgetComponent } from './infowidget.component';

describe('InfowidgetComponent', () => {
  let component: InfowidgetComponent;
  let fixture: ComponentFixture<InfowidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfowidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfowidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
