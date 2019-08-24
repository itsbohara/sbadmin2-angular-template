import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbathemeComponent } from './sbatheme.component';

describe('SbathemeComponent', () => {
  let component: SbathemeComponent;
  let fixture: ComponentFixture<SbathemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbathemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbathemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
