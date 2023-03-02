import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCsrPageComponent } from './generate-csr-page.component';

describe('GenerateCsrPageComponent', () => {
  let component: GenerateCsrPageComponent;
  let fixture: ComponentFixture<GenerateCsrPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateCsrPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateCsrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
