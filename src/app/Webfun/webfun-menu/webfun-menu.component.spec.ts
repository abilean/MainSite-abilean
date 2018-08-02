import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebfunMenuComponent } from './webfun-menu.component';

describe('WebfunMenuComponent', () => {
  let component: WebfunMenuComponent;
  let fixture: ComponentFixture<WebfunMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebfunMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebfunMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
