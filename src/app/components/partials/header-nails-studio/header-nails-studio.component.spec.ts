import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNailsStudioComponent } from './header-nails-studio.component';

describe('HeaderNailsStudioComponent', () => {
  let component: HeaderNailsStudioComponent;
  let fixture: ComponentFixture<HeaderNailsStudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNailsStudioComponent]
    });
    fixture = TestBed.createComponent(HeaderNailsStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
