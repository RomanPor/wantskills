import {AnyAction} from "redux";
import {FormState} from "../types";
import formValidation from "../utils/form-validation";

const initialState: FormState = {
    successSubmit: false,
    errorSubmit: false,
    loadingSubmit: false,
    isFormValid: false,
    formControls: {
        name: {
            value: '',
            name: 'name',
            label: 'Имя',
            valid: false,
            touched: false,
            errorMessage: 'Поле не заполнено',
            validation: {
                required: true,
            }
        },
        email: {
            value: '',
            type: 'email',
            name: 'email',
            label: 'Email',
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true,
            }
        },
        phone: {
            value: '',
            name: 'phone',
            label: 'Телефон',
            valid: false,
            touched: false,
            errorMessage: 'Поле не заполнено',
            validation: {
                required: true,
            }
        },
        url: {
            value: '',
            name: 'url',
            label: 'Ссылка на мероприятие',
        }
    }
}

export const ActionType = {
    EVENT_VALUE_CHANGE: 'EVENT_VALUE_CHANGE',
    POST_EVENT_REQUEST: 'POST_EVENT_REQUEST',
    POST_EVENT_SUCCESS: 'POST_EVENT_SUCCESS',
    POST_EVENT_FAILURE: 'POST_EVENT_FAILURE'
};

const updateValidation = (state: FormState, value: string, target: string): FormState => {
    const {isFormValid, formControls} = formValidation(state, value, target);
    return {
        ...state,
        isFormValid,
        formControls
    };
}

const addEventForm = (state: FormState = initialState, action: AnyAction): FormState => {
    switch (action.type) {
        case ActionType.EVENT_VALUE_CHANGE:
            return updateValidation(state, action.value, action.target);
        case ActionType.POST_EVENT_REQUEST:
            return {
                ...state,
                loadingSubmit: true,
                successSubmit: false,
                errorSubmit: false,
            }
        case ActionType.POST_EVENT_FAILURE:
            return {
                ...state,
                loadingSubmit: false,
                successSubmit: false,
                errorSubmit: action.payload,
            }
        case ActionType.POST_EVENT_SUCCESS:
            return {
                ...initialState,
                successSubmit: true,
            }
        default:
            return state;
    }
};

export default addEventForm;
