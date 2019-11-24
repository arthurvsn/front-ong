import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcionarAgendamentosComponent } from './adcionar-agendamentos.component';

describe('AdcionarAgendamentosComponent', () => {
  let component: AdcionarAgendamentosComponent;
  let fixture: ComponentFixture<AdcionarAgendamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcionarAgendamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcionarAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
