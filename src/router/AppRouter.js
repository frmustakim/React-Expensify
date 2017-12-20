import React from 'react';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import ExpenseAddPage from '../components/ExpenseAddPage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route path="/create" component={ExpenseAddPage} />
                <Route path="/edit/:id" component={ExpenseEditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;