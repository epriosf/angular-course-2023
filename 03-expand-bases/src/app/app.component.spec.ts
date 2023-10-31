import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [DbzModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title '03-expand-bases'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('03-expand-bases');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const spanElement = compiled.querySelector('span');
    if (spanElement) {
      expect(spanElement.textContent).toContain('03-expand-bases app is running!');
    } else {
      fail('The span element was not found.');
    }
    });
});
