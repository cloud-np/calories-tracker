import React, { Component, useState } from 'react';
import './LogDayForm.css';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../img/logo.png';
import { FcPlus } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';
import { calcCalories, calcMacrosPercentages } from '../../helpers/calories_calc';
import { Badge, Form, Container, Col, Row, Button } from 'react-bootstrap';
import MealLog from '../../Components/MealLog/MealLog';
import Meal from '../../Components/Meal/Meal';

function LogDayForm() {
    // In case we need to redirect the user somewhere
    // const routerHistory = useHistory();  
    // const handleSubmit = async event => {
    //     event.preventDefault();
    //     try {
    //         routerHistory.push('/log-day');
    //     }
    //     catch (error){
    //         console.log(error);
    //     }
    // }
    // TODO: Setup here the firebase 
    const [meals, setMeals] = useState([]);
    const [isMealLogActive, setIsMealLogActive] = useState(false);
    const [formValues, setValues] = useState({
        steps: 0,
        calories: 0,
        didGym: false,
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formValues['calories']){
            alert("Please add at least one Meal!!\n(The option to have a 0-day calories will come later on)");
            return;
        }
    }
    
    // const handleMealAdd = (event) => {
    //     setValues({...values, meals: [...values.meals, 'ox']})
    // }
    const passMealToLogDay = (meal) => {
        console.log(meal);
        setMeals([...meals, meal]);
        setIsMealLogActive(false);
    } 

    const handleMealLog = () => {
        setIsMealLogActive(!isMealLogActive);
    }

    const handleChange = (event) => {
        setValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
        console.log(formValues);
    }

    return (
        <Container className="pt-3 text-center LogDayForm">
            <Row className="d-flex justify-content-center">
                <img src={logo} width='220px' alt="logo.png" />
            </Row>
            {/* <h2 className="mt-2 logo-text">Cloud Fitness</h2> */}
            <Row className="d-flex justify-content-center">
                <Form className="mt-3 form-width" onSubmit={handleSubmit}>
                    <Form.Row className="mt-2">
                        {/* <Form.Label className="text-white">Steps</Form.Label> */}

                        <Form.Group as={Col} controlId="formWeight">
                            <Form.Control onChange={handleChange} type="number" placeholder="Weight" name="weight" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formSteps">
                            <Form.Control onChange={handleChange} type="number" placeholder="Steps" name="steps" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGym">
                            <Form.Check className="text-white" type="checkbox" label="Did you train today?" name="didGym"/>
                            {/* <Form.Control onChange={handleChange} type="password" placeholder="Password" name="password"/> */}
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className="justify-content-start">
                        <Form.Group as={Col} controlId="formCalories">
                            <h5><span className="text-white">{formValues['calories'] ? formValues['calories'] : 0}</span> <Badge variant="info">Calories</Badge></h5>
                        </Form.Group>
                    </Form.Row>

                    {
                        isMealLogActive ? <MealLog passMealToLogDay={passMealToLogDay} /> : ''
                    }
                    {
                        meals.map(meal => {
                            return <Meal key={uuidv4()} {...meal}/>;
                            // return <MealLog key={uuidv4()} {...meal}/>
                        })
                    }
                    <Form.Row className="mt-5">
                        <Form.Group as={Col} controlId="formAddMeal">
                            <FcPlus className="plus-icon" onClick={handleMealLog} />
                            <Form.Text className="text-muted">
                                Click to add a meal.
                            </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="secondary" type="submit"> 
                        Sumbit
                    </Button>
                    {/* <button type="submit" className="w-100 submit-btn">
                        Submit!
                    </button> */}
                </Form>
            </Row>
            <div className="text-white">
                {/* <h1>{this.state.weight}</h1>
                <h1>{this.state.height}</h1> */}
            </div>
        </Container>
    );
}

export default LogDayForm;
