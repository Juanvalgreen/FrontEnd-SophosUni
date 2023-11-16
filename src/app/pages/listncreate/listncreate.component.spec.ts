import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListncreateComponent } from './listncreate.component';

describe('ListncreateComponent', () => {
  let component: ListncreateComponent;
  let fixture: ComponentFixture<ListncreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListncreateComponent]
    });
    fixture = TestBed.createComponent(ListncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
