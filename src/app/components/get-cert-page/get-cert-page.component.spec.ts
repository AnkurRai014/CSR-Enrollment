import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCertPageComponent } from './get-cert-page.component';

describe('GetCertPageComponent', () => {
  let component: GetCertPageComponent;
  let fixture: ComponentFixture<GetCertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCertPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
