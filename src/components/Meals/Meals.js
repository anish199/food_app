import { Fragment } from "react";
import AvailableMeals from "./AvailaibleMeals";
import MealsSummary from "./MealsSumary";

const Meals = () =>
{
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
} 

export default Meals;