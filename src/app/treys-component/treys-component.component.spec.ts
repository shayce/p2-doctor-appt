import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreysComponentComponent } from './treys-component.component';

describe('TreysComponentComponent', () => {
  let component: TreysComponentComponent;
  let fixture: ComponentFixture<TreysComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreysComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreysComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
