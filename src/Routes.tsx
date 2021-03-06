
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/products">
                        <Catalog />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );

};


export default Routes;