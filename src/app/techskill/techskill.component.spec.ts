import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechskillComponent } from './techskill.component';

describe('TechskillComponent', () => {
  let component: TechskillComponent;
  let fixture: ComponentFixture<TechskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
