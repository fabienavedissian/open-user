import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/** Store */
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store';

/** Users Action */
import { GetUsersAction } from 'src/app/store/actions/users.actions';

/** Users State */
import { usersSelector } from 'src/app/store/selectors/users.selectors';
import { UsersState } from 'src/app/store/reducers/users.reducer';
import { UsersService } from 'src/app/core/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /** Users List */
  public users$: Observable<UsersState> = this.store.pipe(select(usersSelector));

  /** Current Page From Pagination */
  public p: number = 1;

  constructor(
    private store: Store<State>,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetUsersAction());
  }

  onSignOut(): void {
    this.usersService.isLogged$.next(false);
    this.router.navigate(['']);
  }

}
