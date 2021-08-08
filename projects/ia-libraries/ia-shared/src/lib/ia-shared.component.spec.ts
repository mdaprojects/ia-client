import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaSharedComponent } from './ia-shared.component';

describe('IaSharedComponent', () => {
  let component: IaSharedComponent;
  let fixture: ComponentFixture<IaSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
