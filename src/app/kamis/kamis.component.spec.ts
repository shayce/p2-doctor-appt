import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamisComponent } from './kamis.component';

describe('KamisComponent', () => {
  let component: KamisComponent;
  let fixture: ComponentFixture<KamisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KamisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
