import { createFeatureSelector, createSelector } from "@ngrx/store";

/** Users Model */
import { UsersModel } from 'src/app/core/users/interfaces/users.model';

/** Router State */
import { RouterState } from '../router/router.helper';

/** Users State */
import { UsersState } from '../reducers/users.reducer';

/** Router State Selector */
import { routerStateSelector } from './router.selectors';

export const usersSelector = createFeatureSelector<UsersState>('users');

export const usersListSelector = createSelector(
    usersSelector,
    (usersState: UsersState) => {
        return usersState.data;
    }
);

export const userByIdSelector = createSelector(
    usersListSelector,
    routerStateSelector,
    (users: UsersModel[], routerState: RouterState) => {
        const userId = routerState.params.userId;
        if (userId && users) {
            return users.filter(t => t.id.toString() === userId.toString())[0];
        } else {
            return null;
        }
    }
)