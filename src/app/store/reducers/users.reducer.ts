/** Users Model */
import { UsersModel } from 'src/app/core/users/interfaces/users.model';

/** Users Action */
import { UsersActionsType, GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from '../actions/users.actions';

export interface UsersState {
    data: UsersModel[];
    loading: boolean,
    loaded: boolean,
    error: any
}

const initialState = {
    data: null,
    loading: false,
    loaded: false,
    error: null
}

export function usersReducer(state: UsersState = initialState, action: UsersActionsType): UsersState {
    switch (action.type) {
        case GET_USERS : {
            return {
                ...state
            }
        }

        case GET_USERS_SUCCESS : {
            return {
                ...state,
                data: action.payload,
                loading: false,
                loaded: true,
                error: null
            }
        }

        case GET_USERS_ERROR : {
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            }
        }

        default : {
            return state;
        }
    }
}