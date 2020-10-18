
export const calcCalories = (macros) => {
    return macros.protein * 4 + macros.carbs * 4 + macros.fats * 9;
}

export const calcMacrosPercentages = (macros) => {
    const calories = calcCalories(macros);
    const protein = Math.floor(macros.protein * 4 / calories * 100);
    const carbs =  Math.floor(macros.carbs * 4 / calories * 100);
    const fats =  Math.floor(macros.fats * 9 / calories * 100);
    return { protein, carbs, fats }
}

