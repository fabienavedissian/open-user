/** Users State */
import { UsersState, usersReducer } from './reducers/users.reducer';

/** Action Reducer Map */
import { ActionReducerMap } from '@ngrx/store';

/** Router Reducer */
import * as routerReducer from '@ngrx/router-store';

/** Router State */
import { RouterState } from './router/router.helper';

export interface State {
    router: routerReducer.RouterReducerState<RouterState>;
    users: UsersState;
}

export const reducersMap: ActionReducerMap<State> = {
    router: routerReducer.routerReducer,
    users: usersReducer
}