import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './../mainview/home/Home';
import About from './../mainview/about/About';
import Blog from '../mainview/blog/Blogs';
import Contact from './../mainview/contacts/Contact';
import Destinations from './../mainview/destinations/Destinations';
import Locations from './../mainview/destinations/locations/Locations';
//import Coding from '../mainview/blog/coding/Coding';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:blog" component={Blog} />
            <Route exact path="/Destinations" component={Destinations} />
                <Route exact path="/Destinations/:location" component={Locations} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Contact" component={Contact} />
        </Switch>
    )
}

export default Routes
