import React from 'react';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import routes from './route/index';
import 'antd-mobile/dist/antd-mobile.css';

import Test from './components/test'

// import Banner from './assets/images/common/banner.png'

function App() {
  return (
    <div>

        <Test />
        <Router>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} ></RouteWithSubRoutes>
                ))}  
            </Switch>
 
        </Router>
   
    </div>
  );
}
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export default App;
