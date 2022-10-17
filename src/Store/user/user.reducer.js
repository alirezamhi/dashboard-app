import { ADD, DELETE, EDIT } from "./user.constant";
import { users } from "./user.state";


export function userReducer(state = users, action) {
    switch (action.type) {
        case ADD:
            return { ...state, users: [...state.users, { ...action.payload, id: state.users.length - 1 }] }
        case DELETE:
            return { ...state, users: state.users.filter(item => item.id !== action.payload) }
        case EDIT:
            return { ...state, editValues: action.payload }
        default:
            return state;
    }
}
