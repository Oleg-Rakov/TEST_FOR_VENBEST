import { peopleAPI } from "../API/api";

const SET_PEOPLE = 'SET_PEOPLE';
const SET_NAME_FILTER = 'SET_NAME_FILTER';
const SET_SURNAME_FILTER = 'SET_SURNAME_FILTER';
const SET_AGE_FILTER = 'SET_AGE_FILTER';
const TOGGLE_MAN_VISIBLE = 'TOGGLE_MAN_VISIBLE';
const TOGGLE_WOMAN_VISIBLE = 'TOGGLE_WOMAN_VISIBLE';


let initialState = {
    peopleInfo: [],
    filterByName: '',
    filterBySurName: '',
    filterByAge: '',
    isManVisible: true,
    isWomanVisible: true,
    isLoad: true,
}

let listPeopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                ...state,
                peopleInfo: action.people,
                isLoad: false
            }
        case SET_NAME_FILTER:
            return {
                ...state,
                filterByName: action.name
            }
        case SET_SURNAME_FILTER:
            return {
                ...state,
                filterBySurName: action.surName
            }
            case SET_AGE_FILTER:
            return {
                ...state,
                filterByAge: action.age
            }
        case TOGGLE_MAN_VISIBLE:
            return {
                ...state,
                isManVisible: !state.isManVisible
            }
        case TOGGLE_WOMAN_VISIBLE:
            return {
                ...state,
                isWomanVisible: !state.isWomanVisible
            }
        default:
            return state;
    }
}

export let setPeople = (people) => ({
    type: SET_PEOPLE,
    people
})

export let setNameFilter = (name) => ({
    type: SET_NAME_FILTER,
    name
})

export let setSurNameFilter = (surName) => ({
    type: SET_SURNAME_FILTER,
    surName
})

export let setAgeFilter = (age) => ({
    type: SET_AGE_FILTER,
    age
})

export let setManVisible = () => ({
    type: TOGGLE_MAN_VISIBLE
})

export let setWomanVisible = () => ({
    type: TOGGLE_WOMAN_VISIBLE
})

export const getPeople = () => {
    return async (dispatch) => {
        let response = await peopleAPI.getPeople();
        dispatch(setPeople(response));
    }
}

export const onChangeName = (name) => {
    return (dispatch) => {
        dispatch(setNameFilter(name))
    }
}

export const onChangeSurName = (surName) => {
    return (dispatch) => {
        dispatch(setSurNameFilter(surName))
    }
}

export const onChangeAge = (age) => {
    return (dispatch) => {
        dispatch(setAgeFilter(age))
    }
}

export const toggleManVisible = () => {
    return (dispatch) => {
        dispatch(setManVisible())
    }
}

export const toggleWomanVisible = () => {
    return (dispatch) => {
        dispatch(setWomanVisible())
    }
}


export default listPeopleReducer;