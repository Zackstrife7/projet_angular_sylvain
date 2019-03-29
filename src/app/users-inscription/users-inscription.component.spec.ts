import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInscriptionComponent } from './users-inscription.component';

describe('UsersInscriptionComponent', () => {
  let component: UsersInscriptionComponent;
  let fixture: ComponentFixture<UsersInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
