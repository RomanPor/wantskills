import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AboutPage, AddEventPage, ChatsPage, EventPage, HomePage, SponsorPage} from '../../pages';
import Layout from "../../hocs/layout";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/about"
                    component={AboutPage}
                />
                <Route
                    path="/chats"
                    component={ChatsPage}
                />
                <Route
                    path="/sponsor"
                    component={SponsorPage}
                />
                <Route
                    path="/new-event"
                    component={AddEventPage}
                />
                <Route
                    path="/event/:id"
                    component={EventPage}
                />
            </Switch>
        </Layout>
);
}

export default App;
