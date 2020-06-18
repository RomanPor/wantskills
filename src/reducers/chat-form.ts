import formValidation from "../utils/form-validation";
import {FormState} from "../types";
import {AnyAction} from "redux";

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
            label: 'Ссылка на сообщество',
        }
    }
}

export const ActionType = {
    CHAT_VALUE_CHANGE: 'CHAT_VALUE_CHANGE',
    POST_CHAT_REQUEST: 'POST_CHAT_REQUEST',
    POST_CHAT_FAILURE: 'POST_CHAT_FAILURE',
    POST_CHAT_SUCCESS: 'POST_CHAT_SUCCESS'
};

const updateValidation = (state: FormState, value: string, target: string): FormState => {
    const {isFormValid, formControls} = formValidation(state, value, target);
    return {
        ...state,
        isFormValid,
        formControls
    };
};

const chatForm = (state: FormState = initialState, action: AnyAction): FormState => {
    switch (action.type) {
        case ActionType.CHAT_VALUE_CHANGE:
            return updateValidation(state, action.value, action.target);
        case ActionType.POST_CHAT_REQUEST:
            return {
                ...state,
                loadingSubmit: true,
                successSubmit: false,
                errorSubmit: false,
            }
        case ActionType.POST_CHAT_FAILURE:
            return {
                ...state,
                loadingSubmit: false,
                successSubmit: false,
                errorSubmit: action.payload,
            }
        case ActionType.POST_CHAT_SUCCESS:
            return {
                ...initialState,
                successSubmit: true,
            }
        default:
            return state;
    }
};

export default chatForm;
