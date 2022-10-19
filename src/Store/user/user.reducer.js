import { ADD, DELETE, EDIT, SAVE, SEARCH } from "./user.constant";
import { users } from "./user.state";


export function userReducer(state = users, action) {
    switch (action.type) {
        case ADD:
            return { ...state, users: [...state.users, { ...action.payload, id: state.users.length - 1 }] }
        case DELETE:
            return { ...state, users: state.users.filter(item => item.id !== action.payload) }
        case EDIT:
            return { ...state, editValues: action.payload }
        case SAVE:
            {
                const indexEdited = state.users.findIndex((item) => item.id === action.payload.id);
                const newUsers = [...state.users];
                newUsers[indexEdited] = action.payload;
                return { ...state, users: newUsers, editValues: null }
            }
        case SEARCH:
            {
                if (action.payload.length === 0) {
                    return { ...state, searchResult: state.users }
                } else {
                    return { ...state, searchResult: action.payload }
                }
            }
        default:
            return state;
    }
}
