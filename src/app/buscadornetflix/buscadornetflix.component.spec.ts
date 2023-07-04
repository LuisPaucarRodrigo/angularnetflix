import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadornetflixComponent } from './buscadornetflix.component';

describe('BuscadornetflixComponent', () => {
  let component: BuscadornetflixComponent;
  let fixture: ComponentFixture<BuscadornetflixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadornetflixComponent]
    });
    fixture = TestBed.createComponent(BuscadornetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
