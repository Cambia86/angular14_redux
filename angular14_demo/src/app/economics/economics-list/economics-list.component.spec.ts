import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicsListComponent } from './economics-list.component';

describe('EconomicsListComponent', () => {
  let component: EconomicsListComponent;
  let fixture: ComponentFixture<EconomicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
