import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeMainComponent } from './de-main.component';

describe('DeMainComponent', () => {
  let component: DeMainComponent;
  let fixture: ComponentFixture<DeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
