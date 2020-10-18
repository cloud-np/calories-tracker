import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './tmp-route-styles.css';
import LeftNavBar from './Components/LeftNavBar/LeftNavBar';
import SingUpForm from './Pages/SingUpForm/SingUpForm';
import SignInForm from './Pages/SignInForm/SignInForm';
import NotFound from './Pages/NotFound/NotFound';
import RecipesList from './Components/RecipesList/RecipesList';
import Recipe from './Components/Recipe/Recipe';
import LineGraph from './Components/LineGraph/LineGraph';

const Routes = () => {

    //TODO this should be moved somewhere propably
    const loadRecipe = ({ match }) => {
        let id = match.params.id;
        return (
            <div>
                <LeftNavBar />
                <Recipe id={id} />
            </div>
        );
    }

    return (
        <div  className="Routes">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LeftNavBar />
                        {/* <LineGraph /> */}
                        {/* <h1>Hello</h1> */}
                    </Route>

                    <Route exact path="/progress">
                        <LeftNavBar />
                        <h1>Progress</h1>
                    </Route>

                    <Route exact path="/recipes">
                        <LeftNavBar />
                        <RecipesList />
                    </Route>

                    <Route exact path="/recipes/:id" render={loadRecipe}>
                        {/* <RecipesList /> */}
                    </Route>

                    <Route exact path="/log-day">
                        <LeftNavBar />
                        <h1>Log day</h1>
                    </Route>

                    <Route exact path="/add-recipe">
                        <LeftNavBar />
                        <h1>Add-recipe</h1>
                    </Route>

                    <Route exact path="/dashboard">
                        <LeftNavBar />
                        <h1>Dashboard</h1>
                    </Route>

                    <Route exact path="/sign-in">
                        <SignInForm />
                    </Route>

                    <Route exact path="/sign-up">
                        <SingUpForm />
                    </Route>

                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;



