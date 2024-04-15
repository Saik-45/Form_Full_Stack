import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsignComponent } from './signup-sign.component';

describe('SignupsignComponent', () => {
  let component: SignupsignComponent;
  let fixture: ComponentFixture<SignupsignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupsignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
