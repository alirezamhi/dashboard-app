import { ADD, DELETE, EDIT, SAVE , CANCEL , SEARCH} from "./user.constant";


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
        payload: value,
    }
}

export function save(value) {
    return {
        type: SAVE,
        payload: value,
    }
}

export function cancel() {
    return{
        type: CANCEL,

    }
}

export function search(value) {
    return {
        type: SEARCH,
        payload: value,
    }
}