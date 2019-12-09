import { Injectable } from "@angular/core";
import { catchError, switchMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

/** ngrx Effects */
import { Effect, Actions, ofType } from '@ngrx/effects';

/** Users Service */
import { UsersService } from 'src/app/core/users/users.service';

/** Users Actions */
import { GET_USERS, GetUsersErrorAction, GetUsersAction, GetUsersSuccessAction } from '../actions/users.actions';

/** Interfaces */
import { UsersModel } from 'src/app/core/users/interfaces/users.model';


@Injectable()
export class UsersEffects {
    @Effect()
    getUsers$: Observable<Action> = this.actions$.pipe(
        ofType(GET_USERS),
        switchMap((usersAction: GetUsersAction) => this.usersService.getUsers()),
        map((users: UsersModel[]) => new GetUsersSuccessAction(users)),
        catchError((err: any) => of(new GetUsersErrorAction(err)))
    );

    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) {}
}