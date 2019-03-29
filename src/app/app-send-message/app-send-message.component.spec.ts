import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSendMessageComponent } from './app-send-message.component';

describe('AppSendMessageComponent', () => {
  let component: AppSendMessageComponent;
  let fixture: ComponentFixture<AppSendMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSendMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
