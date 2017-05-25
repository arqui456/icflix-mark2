import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AventuraComponent } from './aventura.component';

describe('AventuraComponent', () => {
  let component: AventuraComponent;
  let fixture: ComponentFixture<AventuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AventuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
