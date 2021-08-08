import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreComponent } from './ia-core.component';

describe('IaCoreComponent', () => {
  let component: IaCoreComponent;
  let fixture: ComponentFixture<IaCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
