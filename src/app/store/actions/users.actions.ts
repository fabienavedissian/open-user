import { Action } from '@ngrx/store';

/** Users State */
import { UsersModel } from 'src/app/core/users/interfaces/users.model';

/** ACTIONS USERS */
export const GET_USERS = '[ users ] try get users';
export const GET_USERS_SUCCESS = '[ users ] users get success';
export const GET_USERS_ERROR = '[ users ] users get error';

export class GetUsersAction implements Action {
    readonly type = GET_USERS;
}

export class GetUsersSuccessAction implements Action {
    readonly type = GET_USERS_SUCCESS;
    constructor(public payload: UsersModel[]) {}
}

export class GetUsersErrorAction implements Action {
    readonly type = GET_USERS_ERROR;
    constructor(public payload: any) {}
}

export type UsersActionsType = GetUsersAction | GetUsersSuccessAction | GetUsersErrorAction;