import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosephsComponentComponent } from './josephs-component.component';

describe('JosephsComponentComponent', () => {
  let component: JosephsComponentComponent;
  let fixture: ComponentFixture<JosephsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JosephsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JosephsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
