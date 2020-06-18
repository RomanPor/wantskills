import React from 'react';
import { DataServiceConsumer } from '../components/data-service-context/data-service-context';
import {IDataService} from "../services/data-service";

const withDataService = () => (Wrapped: React.ComponentType) => {
    return (props: any) => {
        return (
            <DataServiceConsumer>
                {
                    (dataService: IDataService) => {
                        return (<Wrapped {...props}
                                         dataService={dataService}/>);
                    }
                }
            </DataServiceConsumer>
        );
    }
};
export default withDataService;
