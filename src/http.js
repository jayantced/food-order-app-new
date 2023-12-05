export async function fetchAvailableMeals() {
    const response = await fetch('http://localhost:3000/meals');
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Data not found.");
    }

    return resData.meals; 
}