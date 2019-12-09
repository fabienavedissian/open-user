import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterState {
    url: string;
    params: Params;
    queryParams: Params;
}

export class RouterStateSerialized implements RouterStateSerializer<RouterState> {
    serialize(routerState: RouterStateSnapshot): RouterState {
        const { url } = routerState;
        const { queryParams } = routerState.root; 
        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        return { url, queryParams, params };
    }
}