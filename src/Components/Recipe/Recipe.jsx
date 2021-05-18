import React from 'react';
import { Badge, Popover, OverlayTrigger } from 'react-bootstrap';
import './Recipe.css';
import e404 from '../../img/404.jpg';
import french from '../../img/french-toast.jpg';
import { MdSettings } from 'react-icons/md'; 
import { GoHeart } from 'react-icons/go';
import { BiInfoCircle } from 'react-icons/bi';
import { macros_colors } from '../../helpers/macro_colors';
import { Macro } from '../Macro/Macro';
import { calcCalories, calcMacrosPercentages } from '../../helpers/calories_calc';

const dark_red = 'rgba(161,72,93, 1) 0%, rgba(161,72,93, .5) 32%';
const light_blue = 'rgba(89,137,239, .4) 100%';

//TODO: 1) After you connect this to db you should get
//         the data object below with only the id.
//      3) Make a pie-chart to show each macro. Not sure if needed.
function Recipe({ 
    title='Not Found',
    macros={ protein: 0, carbs: 0, fats: 0 }, 
    imgSrc=e404,
    author='Anonymous User',
    createdAt='--',
    id=null
}) {

    //TODO Remove this after you setup the db
    if(id === '15'){
        imgSrc = french
        title = 'French Toast';
        author = 'Cloud Anarchy';
        createdAt = '10/09/2020';
        macros = { protein: 25, carbs: 35, fats: 12 }
    }
    ///////////////////////////////////////////////

    const imgStyles = { 
        background: `linear-gradient(50deg, ${dark_red}, ${light_blue}), url(${imgSrc}) no-repeat top`,
        backgroundSize: 'cover'
    }

    const popover = (
        <Popover className="info-popover">
            <Popover.Title as="h3">Details</Popover.Title>
            <Popover.Content>
                <strong>Created At</strong> <span>{createdAt}</span>
                <br></br>
                <strong>By</strong> <span>{author}</span>
            </Popover.Content>
        </Popover>
    );
    const perc = calcMacrosPercentages(macros);
    return (
        <div className="Recipe-container">
            <div className="Recipe">
                <div className="Recipe__toolbar">
                    <MdSettings />
                    {/* TODO: This has findDOMNode fix it when you can */}
                    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                        <BiInfoCircle/>
                    </OverlayTrigger>
                    {/* ///////////////////////////////////////////////*/}
                </div>
                <div className="Recipe__img" style={imgStyles} >
                </div>
                <div className="Recipe__middle">
                    <div className="Recipe__title-container">
                        <p className="Recipe__subtitle">{title}</p>
                        <h6 className="Recipe__title">{calcCalories(macros)} <i> <Badge variant="info">Calories</Badge></i></h6>
                    </div>
                    <div>
                        {/* TODO change this to id */}
                        <span className={`Recipe__favorite ${title === 'Not Found' ? 'disabled' : '' }`}>
                            <GoHeart size="1.4rem" />
                        </span>
                    </div>
                </div>
                <div className="Recipe__footer">
                    <Macro 
                        name="Protein" 
                        perc={perc.protein} 
                        grams={macros.protein} 
                        color={macros_colors[0]}
                        type='perc'
                    />
                    <Macro 
                        name="Carbs" 
                        perc={perc.carbs} 
                        grams={macros.carbs} 
                        color={macros_colors[1]}
                        type='perc'
                    />
                    <Macro 
                        name="Fats" 
                        perc={perc.fats} 
                        grams={macros.fats} 
                        color={macros_colors[2]}
                        type='perc'
                    />
                </div>
                
            </div>
        </div>
    );
}

export default Recipe;
