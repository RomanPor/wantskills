import React, {Component} from "react";
import {FormControl} from "../../types";

type Props = {
    formControl: FormControl,
    valueChange: (value: string, name: string) => void
};

class FormInput extends Component<Props>  {
    shouldComponentUpdate(nextProps: Props) {
        return this.props.formControl.value !== nextProps.formControl.value;
    }
    render() {
        const {label, name, touched, valid, type, errorMessage, value} = this.props.formControl;
        return (
            <label className={touched && !valid ? 'input-invalid' : ''}>
                <div className="input-label">{label}</div>
                <input name={name} onChange={e => this.props.valueChange(e.target.value, name)} value={value} className='uk-input' type={type ? type : 'text'} />
                {
                    touched && !valid
                        ? <div className="input-error">{errorMessage ? errorMessage : 'Поле заполнено не верно'}</div>
                        : null
                }
            </label>
        );
    }
}

export default FormInput;
