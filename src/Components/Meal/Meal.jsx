import React, { Component, useState } from 'react';
import './Meal.css';
import { Badge, Form, Container, Col, Row, Button } from 'react-bootstrap';
import { macros_colors } from '../../helpers/macro_colors';
import { Macro } from '../../Components/Macro/Macro';
import { calcCalories, calcMacrosPercentages } from '../../helpers/calories_calc';


function Meal(props){
    const macros = {"protein": 1 * props.protein, "fats": 1 * props.fats, "carbs": 1 * props.carbs}
    const calories = calcCalories(macros)
    const percMacros = calcMacrosPercentages(macros)
    return (
        <div className="Meal text-white">
            <h6 className="Meal__name">{props.mealName}</h6>
            <div className="Meal__macros">
                <Macro 
                    name="Protein" 
                    perc={percMacros.protein} 
                    grams={1 * props.protein} 
                    color={macros_colors[0]}
                    type='perc'
                />
                <Macro 
                    name="Carbs" 
                    perc={percMacros.carbs} 
                    grams={1 * props.carbs} 
                    color={macros_colors[1]}
                    type='perc'
                />
                <Macro 
                    name="Fats" 
                    perc={percMacros.fats} 
                    grams={1 * props.fats} 
                    color={macros_colors[2]}
                    type='perc'
                />
            </div>
        </div>
    );
}

export default Meal;