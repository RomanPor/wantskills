import React from "react";
import {connect} from 'react-redux';
import {Action, bindActionCreators, Dispatch} from "redux";
import FormInput from "../form-input/form-input";
import {eventValueChange, postEvent} from "../../actions/add-event-form";
import withDataService from "../../hocs/with-data-service";
import compose from "../../utils/compose";
import {FormState, OwnProps} from "../../types";
import {RootState} from "../../reducers";

type Props = {
    eventValueChange: (value: string, target: string) => Action,
    postEvent: (data: EventTarget) => {}
} & FormState

const AddEventForm: React.FC<Props> = (props) => {
    const {loadingSubmit, errorSubmit, successSubmit, isFormValid, formControls, eventValueChange, postEvent} = props;
    const onSubmitHandler = function(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (isFormValid) {
            postEvent(e.target);
        }
    }
    return (
        <div className={`form ${successSubmit ? 'form_submit' : ''}`}>
            <div className="uk-container">
                <div className="form__inner">
                    <img src="/img/form-decor1.svg" alt="" className="form__decor1"/>
                    <img src="/img/form-decor2.svg" alt="" className="form__decor2"/>
                    <div className="form__pleasure">
                        <div className="uk-h1">Спасибо за заявку</div>
                        <div>Наш менеджер скоро свяжется с&nbsp;вами</div>
                    </div>
                    <div
                        className="uk-container uk-width-1-2@l form__content uk-width-2-3@m uk-width-4-5@s uk-width-auto">
                        <form onSubmit={onSubmitHandler}>
                            <h2>Добавьте мероприятие</h2>
                            {errorSubmit ? <div className="input-error uk-margin-bottom">{errorSubmit}</div> : null}
                            <div className="uk-margin-bottom">
                                <div className="uk-margin-medium-bottom" data-uk-grid="margin: uk-margin-top">
                                    <div className="uk-width-1-2@s">
                                        <FormInput valueChange={eventValueChange} formControl={formControls.name} />
                                    </div>
                                    <div className="uk-width-1-2@s">
                                        <FormInput valueChange={eventValueChange} formControl={formControls.email} />
                                    </div>
                                    <div className="uk-width-1-2@s uk-width-auto@l">
                                        <FormInput valueChange={eventValueChange} formControl={formControls.phone} />
                                    </div>
                                    <div className="uk-width-expand@s">
                                        <FormInput valueChange={eventValueChange} formControl={formControls.url} />
                                    </div>
                                </div>
                                <button className="uk-button uk-button-primary uk-width-1-1" disabled={loadingSubmit}>Добавить мероприятие
                                </button>
                            </div>
                            <div className="fz14">Администрация сайта оставляет за собой право без объяснения причин
                                отказать в сотрудничестве.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({addEventForm}: RootState) => {
    return addEventForm
}

const mapDispatchToProps = (dispatch: Dispatch, {dataService}: OwnProps) => {
    return bindActionCreators(
        {
            eventValueChange,
            postEvent: postEvent(dataService)
        }, dispatch)
}

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps))(AddEventForm);
