import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonyComponentComponent } from './tony-component.component';

describe('TonyComponentComponent', () => {
  let component: TonyComponentComponent;
  let fixture: ComponentFixture<TonyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TonyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
