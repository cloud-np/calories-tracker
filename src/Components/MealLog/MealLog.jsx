import React, { Component, useState } from 'react';
import './MealLog.css';
import { calcCalories, calcMacrosPercentages } from '../../helpers/calories_calc';
import { Badge, Form, Container, Col, Row, Button } from 'react-bootstrap';


function MealLog(props){
    const [values, setValues] = useState({})
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
        console.log(values);
    }
    return (

        <>
            <Form.Row>
                <Form.Group as={Col} controlId="formMealName">
                    <Form.Control onChange={handleChange} type="text" placeholder="Meal Name" name="mealName" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formProtein">
                    <Form.Control onChange={handleChange} type="number" placeholder="Protein" name="protein" />
                </Form.Group>
                <Form.Group as={Col} controlId="formCarbs">
                    <Form.Control onChange={handleChange} type="number" placeholder="Carbs" name="carbs" />
                </Form.Group>
                <Form.Group as={Col} controlId="formFats">
                    <Form.Control onChange={handleChange} type="number" placeholder="Fats" name="fats" />
                </Form.Group>
            </Form.Row>
            <Form.Row className="d-flex justify-content-center mb-3">
                <Button className="no-wrap" onClick={() => props.passMealToLogDay(values)}>
                    Add Meal
                </Button>
            </Form.Row>
        </>
    );

}

export default MealLog;