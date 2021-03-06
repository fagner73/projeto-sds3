
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard/>
                </Route>
            </switch>
        </BrowserRouter>
    );
}

export default Routes;