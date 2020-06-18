import React, {PropsWithChildren, ReactElement, ReactNode} from "react";
import {AboutState} from "../reducers/about-info";

type RequestStatus = {
    loading: boolean,
    error: null | string
}

const RequestStatus: React.FC<RequestStatus & {children: ReactElement}> = (props): ReactElement => {
    const {loading, error} = props;
    if (loading) {
        return <p>Загрузка</p>
    }
    if (error) {
        return <p>Ошибка</p>
    }
    return props.children
}

export default RequestStatus;
