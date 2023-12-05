import React, { useEffect, useState } from 'react'
import { fetchAvailableMeals } from "../http.js";
import MealItem from './MealItem.jsx';

export default function Meals() {

    const [isFetching, setIsFetching] = useState(false);
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState();

    // console.log(meals);
    useEffect(() => {

        setIsFetching(true);
        async function fetchMeals() {
            try {
              const response = await fetch('http://localhost:3000/meals');
              // console.log(response)
              const resData = await response.json();
              setMeals(resData);

              // const availableMeals = await fetchAvailableMeals();
              //   // console.log(availableMeals);
              //   setMeals(availableMeals);

        setIsFetching(true);

            } catch (error) {
                setError({message: error.message || 'could not fetch meals'});
                
            }
        setIsFetching(true);

        }
        fetchMeals();
    }, []);

  return (
    <div>
      <ul id='meals'>
        {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal}/>
        ))}
      </ul>
    </div>
  )
}
