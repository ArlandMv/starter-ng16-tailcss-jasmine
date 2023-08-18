import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBtnComponent } from './my-btn.component';

describe('MyBtnComponent', () => {
  let component: MyBtnComponent;
  let fixture: ComponentFixture<MyBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBtnComponent]
    });
    fixture = TestBed.createComponent(MyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
