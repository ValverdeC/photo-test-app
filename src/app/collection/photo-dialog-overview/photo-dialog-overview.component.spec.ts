import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDialogOverviewComponent } from './photo-dialog-overview.component';

describe('PhotoDialogOverviewComponent', () => {
  let component: PhotoDialogOverviewComponent;
  let fixture: ComponentFixture<PhotoDialogOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoDialogOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
