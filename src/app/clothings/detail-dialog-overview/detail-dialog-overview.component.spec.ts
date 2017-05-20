import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDialogOverviewComponent } from './detail-dialog-overview.component';

describe('DetailDialogOverviewComponent', () => {
  let component: DetailDialogOverviewComponent;
  let fixture: ComponentFixture<DetailDialogOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDialogOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
