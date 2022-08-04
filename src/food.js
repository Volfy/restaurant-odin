import Apple from './img/apple.png';
import SpagUn from './img/food.png';
import Pepp from './img/pepp.png';
import Pine from './img/pine.png';
import Burg from './img/burg.png';
import Bol from './img/spagbol.png';

const FoodItem = (img, desc) => {
    const alt = "AI-generated image of " + desc;

    return {img, alt, desc};
}

const getFoodItems = () => {
    return [
        FoodItem(Apple, "Apple Pizza"),
        FoodItem(Pine, "Pineapple Pizza"),
        FoodItem(Pepp, "Pepperoni Pizza"),
        FoodItem(Burg, "Chicken Burger"),
        FoodItem(Bol, "Spaghetti Bolognese"),
        FoodItem(SpagUn, "Spaghetti Undecipherable")
    ]
}

export {getFoodItems};