import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanlandComponent } from './canland.component';

describe('CanlandComponent', () => {
  let component: CanlandComponent;
  let fixture: ComponentFixture<CanlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanlandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
