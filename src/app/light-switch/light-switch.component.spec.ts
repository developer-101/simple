import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitchComponent } from './light-switch.component';

describe('my LightSwitch tests', () => {

  it('#clicked() should toggle #isOn', () => {

    const cmp = new LightSwitchComponent();
    expect(cmp.isOn)
      .withContext('off at first')
      .toBe(false);

    cmp.toggle();

    expect(cmp.isOn)
      .withContext('on after click')
      .toBe(true);

    cmp.toggle();

    expect(cmp.isOn)
      .withContext('off after second click')
      .toBe(false);
  });

  it('#click should set #message to "is on"', () => {
    const comp = new LightSwitchComponent();
    console.log(comp.message);
    expect(comp.message)
      .withContext('off at first')
      .toMatch(/is off/i);

    comp.toggle();

    expect(comp.message)
      .withContext('on after click')
      .toMatch(/is on/i);
  });

});



describe('LightSwitchComponent', () => {
  let component: LightSwitchComponent;
  let fixture: ComponentFixture<LightSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightSwitchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
