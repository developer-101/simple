import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Cat } from './models/Cat';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'simple'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('simple');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('simple app is running!');
  // });




});


describe('Cat test', () => {

  let cat: Cat | undefined;

  beforeEach(() => {
    cat = new Cat();
    cat.name = 'rustam';
  });

  afterEach(() => {
    cat = undefined;
  });

  it('should have a valid constructor', () => {
    expect(cat).not.toBeNull();
  })

  it('should have "rustam" name', () => {

    expect(cat!.name).toEqual('rustam');
  });

  it('should set name via constructor', () => {
    cat = new Cat('rustam');

    expect(cat.name).toBe('rustam');
  });


});


describe('my test', () => {
  it('2+2=4', () => {
    expect(2 + 2).toEqual(4);
  })
});
