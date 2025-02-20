import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DModeComponent } from './d-mode.component';

describe('DModeComponent', () => {
  let component: DModeComponent;
  let fixture: ComponentFixture<DModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
