import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () =>{
    return(
        <div>
            <BrowserRouter>
                <div>
                    {/*
                        Why use exact={true}?

                        When using react router, the route will look
                        a the url and match the "path" and stack the
                        components that have that path 
                        for example:

                        path="/" and  path="/surveys 
                        / is contained in /surveys therefore 
                        react browser is going to be "ohhh is
                        /surveys, soo / is in it so display
                        the component with / andd ohhh /survey
                        is in it, soooo display that one tooo"

                        by using exact or exact={true} (they work the
                        same) the url hast to be super specific in detail
                        to the path, kind of url === "/surveys", yes?
                        display /surveys and so on

                    */}
                    <Header />
                    <Route exact={true} path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />

                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;