import { ADD, DELETE, EDIT } from "./user.constant";

export function add(value) {
    return {
        type: ADD,
        payload: value,
    }
}

export function deleteUser(value) {
    return {
        type: DELETE,
        payload: value,
    }
}

export function edit(value) {
    return {
        type: EDIT,
        payload: { value },
    }
}