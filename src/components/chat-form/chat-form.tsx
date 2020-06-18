import React from "react";
import {connect} from 'react-redux';
import {Action, bindActionCreators, Dispatch} from "redux";
import FormInput from "../form-input/form-input";
import {chatValueChange, postChat} from "../../actions/chat-form";
import withDataService from "../../hocs/with-data-service";
import compose from "../../utils/compose";
import {FormState, OwnProps} from "../../types";
import {RootState} from "../../reducers";

type Props = {
    chatValueChange: (value: string, target: string) => Action,
    postChat: (data: EventTarget) => {}
} & FormState;

const ChatForm: React.FC<Props> = (props) => {
    const {loadingSubmit, errorSubmit, successSubmit, isFormValid, formControls, chatValueChange, postChat} = props;
    const onSubmitHandler = function(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (isFormValid) {
            postChat(e.target);
        }
    }
    return (
        <div className={`form form_chat ${successSubmit ? 'form_submit' : ''}`}>
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
                        <h2>Нет вашего сообщества?</h2>
                        <p>Добавьте свое сообщество и мы внесем в его список</p>
                        <div className="uk-margin-bottom">
                            {errorSubmit ? <div className="input-error uk-margin-bottom">{errorSubmit}</div> : null}
                            <form onSubmit={onSubmitHandler}>
                                <div className="uk-margin-medium-bottom" data-uk-grid="margin: uk-margin-top">
                                    <div className="uk-width-1-2@s">
                                        <FormInput valueChange={chatValueChange} formControl={formControls.name} />
                                    </div>
                                    <div className="uk-width-1-2@s uk-width-auto@l">
                                        <FormInput valueChange={chatValueChange} formControl={formControls.phone} />
                                    </div>
                                    <div className="uk-width-1-1">
                                        <FormInput valueChange={chatValueChange} formControl={formControls.url} />
                                    </div>
                                </div>
                                <button type="submit" className="uk-button uk-button-primary uk-width-1-1" disabled={loadingSubmit}>Добавить мероприятие
                                </button>
                            </form>
                        </div>
                        <div className="fz14">Администрация сайта оставляет за собой право без объяснения причин
                            отказать в сотрудничестве.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({chatForm}: RootState) => {
    return chatForm
}

const mapDispatchToProps = (dispatch: Dispatch, {dataService}: OwnProps) => {
    return bindActionCreators(
        {
            chatValueChange,
            postChat: postChat(dataService)
        }, dispatch)
}

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps))(ChatForm);
