import { ADD, DELETE, EDIT } from "./user.constant";
import { users } from "./user.state";


export function userReducer(state = users, action) {
    switch (action.type) {
        case ADD:
            return [...state, { ...action.payload, id: state.length + 1 }];
        case DELETE:
            return { ...state, users: state.filter(item => item.id !== action.payload) };
        default:
            return state;
    }
}
