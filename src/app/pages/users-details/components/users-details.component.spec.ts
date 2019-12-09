import { async, ComponentFixture, TestBed } from '@angular/core/testing';
/** Router Testing Module */
import { RouterTestingModule } from '@angular/router/testing';

/** Store Module */
import { StoreModule } from '@ngrx/store';

/** Recuers Map */
import { reducersMap } from 'src/app/store';

/** Components */
import { UsersDetailsComponent } from './users-details.component';

describe('UsersDetailsComponent', () => {
  let component: UsersDetailsComponent;
  let fixture: ComponentFixture<UsersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot(reducersMap)],
      declarations: [ UsersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', async() => {
    expect(component).toBeTruthy();
  });
});
