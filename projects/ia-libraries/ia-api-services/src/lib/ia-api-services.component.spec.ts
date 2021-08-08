import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaApiServicesComponent } from './ia-api-services.component';

describe('IaApiServicesComponent', () => {
  let component: IaApiServicesComponent;
  let fixture: ComponentFixture<IaApiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaApiServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaApiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
