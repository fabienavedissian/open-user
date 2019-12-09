import { createFeatureSelector, createSelector } from '@ngrx/store';

/** Router Reducer */
import * as routerReducer from '@ngrx/router-store';

/** Router State */
import { RouterState } from '../router/router.helper';

export const routerSelector = createFeatureSelector<routerReducer.RouterReducerState<RouterState>>('router');

export const routerStateSelector = createSelector(
    routerSelector,
    (routerState) => {
        return routerState.state;
    }
)