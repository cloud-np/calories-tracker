import React, { Component, useState } from 'react';
import './Meal.css';
import { calcCalories, calcMacrosPercentages } from '../../helpers/calories_calc';
import { Badge, Form, Container, Col, Row, Button } from 'react-bootstrap';
import { macros_colors } from '../../helpers/macro_colors';
import { Macro } from '../../Components/Macro/Macro';


function Meal(props){

    return (
        <div className="Meal text-white">
            <h6 className="Meal__name">{props.mealName}</h6>
            <div className="Meal__macros">
                <Macro 
                    name="Protein" 
                    perc={9} 
                    grams={props.protein} 
                    color={macros_colors[0]}
                    type='perc'
                />
                <Macro 
                    name="Protein" 
                    perc={9} 
                    grams={props.carbs} 
                    color={macros_colors[1]}
                    type='perc'
                />
                <Macro 
                    name="Protein" 
                    perc={9} 
                    grams={props.fats} 
                    color={macros_colors[2]}
                    type='perc'
                />
            </div>
        </div>
    );
}

export default Meal;