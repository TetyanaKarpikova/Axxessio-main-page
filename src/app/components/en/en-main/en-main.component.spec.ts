import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnMainComponent } from './en-main.component';

describe('EnMainComponent', () => {
  let component: EnMainComponent;
  let fixture: ComponentFixture<EnMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
