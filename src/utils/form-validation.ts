import {FormControl, FormState} from "../types";

const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const formValidation = (controls: FormState, value: string, target: string) => {
    const formControls = Object.assign({}, controls.formControls);
    const control: FormControl = Object.assign({}, formControls[target])
    if (control.validation) {
        control.touched = true;

        let isValid: boolean = true;
        if (control.validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (control.validation.email) {
            isValid = validateEmail(value) && isValid
        }

        if (control.validation.minLength) {
            isValid = value.length >= control.validation.minLength && isValid
        }
        control.valid = isValid;
    }
    control.value = value;
    formControls[target] = control;
    let isFormValid = true;
    Object.keys(formControls).forEach(name => {
        if (formControls[name].validation) {
            isFormValid = formControls[name].valid || true
        }
    });

    return {
        isFormValid,
        formControls
    }
}

export default formValidation;
