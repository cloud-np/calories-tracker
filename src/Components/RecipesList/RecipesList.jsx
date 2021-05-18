import React from 'react';
import './RecipesList.css';
import french from '../../img/french-toast.jpg';
import { Macro } from '../Macro/Macro';
import { useHistory } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const recipes = [
    {
        title: 'French Toast',
        macros: {
            protein: 38,
            carbs: 55,
            fats: 22
        },
        imgSrc: french,
        createdAt: "10/09/2020",
        author: "Cloud Anarchy",
        id: 15
    },
    {
        title: 'French Toast',
        macros: {
            protein: 38,
            carbs: 55,
            fats: 22
        },
        imgSrc: french,
        createdAt: "10/09/2020",
        author: "Cloud Anarchy",
        id: 16
    },
    {
        title: 'French Toast',
        macros: {
            protein: 38,
            carbs: 55,
            fats: 22
        },
        imgSrc: french,
        createdAt: "10/09/2020",
        author: "Cloud Anarchy",
        id: 15
    },
    {
        title: 'French Toast',
        macros: {
            protein: 38,
            carbs: 55,
            fats: 22
        },
        imgSrc: french,
        createdAt: "10/09/2020",
        author: "Cloud Anarchy",
        id: 15
    },
    {
        title: 'French Toast',
        macros: {
            protein: 38,
            carbs: 55,
            fats: 22
        },
        imgSrc: french,
        createdAt: "10/09/2020",
        author: "Cloud Anarchy",
        id: 15
    }
]
const dark_red = 'rgba(161,72,93, 1) 0%, rgba(161,72,93, .5) 32%';
const light_blue = 'rgba(89,137,239, .4) 100%';

function RecipesList() {
    const history = useHistory();

    const imgStyles = {
        background: `linear-gradient(50deg, ${dark_red}, ${light_blue}), url(${french}) no-repeat top`,
        backgroundSize: 'cover'
    }

    const handleShowRecipe = id => () => {
        console.log(id)
        history.push(`recipes/${id}`)
    }

    return (
        <ul className="RecipesList">
            {recipes.map((recipe, index) => (
                <li key={index} className="RecipesList__recipe" onClick={handleShowRecipe(recipe.id)}>
                    <div style={imgStyles} className="RecipesList__recipe__img"></div>
                    <div className="RecipesList__recipe__info">
                        <h4>
                            {recipe.title}
                        </h4>
                        <div className="RecipesList__recipe__macros">
                            <Macro 
                                name='Protein'
                                grams={45}
                                type='simple'
                            />
                            <Macro 
                                name='Carbs'
                                grams={56}
                                type='simple'
                            />
                            <Macro 
                                name='Fats'
                                grams={15}
                                type='simple'
                            />
                        </div>
                        <div className="RecipesList__recipe__rating">
                            <AiFillStar /> 
                            <span className="rating-text">4.9</span>
                            <span className="rating-count">(221 ratings)</span>
                        </div>
                    </div>
                </li>
            ))}
            {/* <Recipe /> */}
        </ul>
    );
}

export default RecipesList;
