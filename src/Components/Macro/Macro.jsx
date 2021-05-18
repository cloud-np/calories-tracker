import React from 'react';
import './Macro.css';
import { GiMuscleUp } from 'react-icons/gi'
//  Note this approach only works with create-react-app, If you are not using create-react-app, I would recommend using other approaches. 
//  Create-react-app uses SVGR under the hood to make it possible to transform and import SVG as a React component.
import { ReactComponent as Protein } from '../../img/macros/protein.svg'; 
import { ReactComponent as Carbs } from '../../img/macros/carbs.svg'; 
import { ReactComponent as Fats } from '../../img/macros/fats.svg'; 


export const Macro = ({ name, perc, grams, color, type}) => {
    
    let macro = <div> </div>;
    switch(type){
        case 'perc':
            macro =
            <div className="Macro-perc">
                <h6 className="perc" style={{ color: color }}>{isNaN(perc) ? '' : perc}%</h6>
                <h6 className="grams">{isNaN(grams) ? '' : grams}g</h6>
                <h6 className="name">{name}</h6>
            </div>
        break;

        case 'simple':
            let macroIcon;
            switch(name){
                case 'Protein':
                    macroIcon = <span className="Macro-simple__protein"> <Protein /> </span>
                break;
                
                case 'Carbs':
                    macroIcon = <span className="Macro-simple__carbs"> <Carbs /> </span>
                break;

                case 'Fats':
                    macroIcon = <span className="Macro-simple__fats"> <Fats /> </span>
                break;
            }
            macro =
            <div className="Macro-simple">
                <h6 className="grams">
                    {macroIcon} <span style={{ color: `var(--${name.toLowerCase()}-color)`}}>{isNaN(grams) ? '' : grams}g</span>
                </h6>
            </div>

        break;
    }

    return (
        <div>
            {macro}
        </div>
    );
}

