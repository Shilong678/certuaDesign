import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpacerComponent } from './page-spacer.component';

describe('PageSpacerComponent', () => {
  let component: PageSpacerComponent;
  let fixture: ComponentFixture<PageSpacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSpacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
