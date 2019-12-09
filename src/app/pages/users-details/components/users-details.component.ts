import { Component } from '@angular/core';
import { Observable } from 'rxjs';

/** Interface */
import { UsersModel } from 'src/app/core/users/interfaces/users.model';

/** Store */
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store';

/** User By Id Selector */
import { userByIdSelector } from 'src/app/store/selectors/users.selectors';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent {

  /** User Selected by ID Observable */
  public userSelected$: Observable<UsersModel> = this.store.pipe(select(userByIdSelector));

  /** User */
  public user: UsersModel;

  constructor(
    private store: Store<State>
  ) { }

}
