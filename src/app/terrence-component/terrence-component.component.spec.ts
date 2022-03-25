import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenceComponentComponent } from './terrence-component.component';

describe('TerrenceComponentComponent', () => {
  let component: TerrenceComponentComponent;
  let fixture: ComponentFixture<TerrenceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrenceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrenceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
