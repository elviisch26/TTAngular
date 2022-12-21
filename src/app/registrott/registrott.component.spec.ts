import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrottComponent } from './registrott.component';

describe('RegistrottComponent', () => {
  let component: RegistrottComponent;
  let fixture: ComponentFixture<RegistrottComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrottComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
