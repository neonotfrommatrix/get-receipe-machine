import React, {useState} from 'react';
import './App.scss';

function App() {
  const [recipe, setRecipe] = useState("Try baked Feta")

  const [link, setLink] = useState("watch?v=zoiOY7w6YN0&ab_channel=BrownGirlsKitchen")

  const [dessert, setDessert] = useState("Banana Creme Pie")
  const [dessertlink, setDLink] = useState("shorts/y8yiWK4suw8")

  /* const [image, setImage] = useState(logo192.png) */
  /*
  const changeRecipeAndLink0 = () => {
    setRecipe("Pesto Egg Toast"); 
    setLink("https://www.youtube.com/shorts/2OqOGTB9sBs")

  }
  const changeRecipeAndLink1 = () => {
    setRecipe("Minestrone Soup"); 
    setLink("https://www.youtube.com/watch?v=eHk6NSLGAkc&ab_channel=FoodWishes")

  }
  const changeRecipeAndLink2 = () => {
    setRecipe("Baked Tomato Feta Pasta Dish"); 
    setLink("https://www.youtube.com/watch?v=zoiOY7w6YN0&ab_channel=BrownGirlsKitchen") 

  }*/
  const [randomNumber, setRandomNumber] = useState (0)
  /* const [recipearray, setRecipeArray] = useState(null) */

  const generateRandomRecipe = () => {
    let randomInteger = Math.floor(recipearray.length * Math.random())
    setRandomNumber(randomInteger)
    setRecipe(recipearray[randomInteger].recipe)
    setLink(recipearray[randomInteger].link)
  }
  const generateRandomDessert = () => {
    let randomInteger = Math.floor(dessertArray.length * Math.random())
    setRandomNumber(randomInteger)
    setDessert(dessertArray[randomInteger].dessert)
    setDLink(dessertArray[randomInteger].dessertlink)
  }

  const recipearray = [
    {
      recipe:"Pesto Egg Toast", link: `shorts/2OqOGTB9sBs`
    },
   {
    recipe:"Minestrone Soup", link: `watch?v=eHk6NSLGAkc&ab_channel=FoodWishes`
  }, 
   {
    recipe:"Baked Feta Pasta", link: "watch?v=zoiOY7w6YN0&ab_channel=BrownGirlsKitchen"
  },
   {
    recipe:"Chicken Gnocchi Soup", link: "shorts/xOqoDF6b9Mk?feature=share"
  },
  {
    recipe:"Creamy Mac and Cheese", link: "shorts/tlmLeL-W87w?feature=share"
  },
  {
    recipe:"Green Goddess Salad", link: "shorts/VEYOlh3Mud8?feature=share"
  },
  {
    recipe:"Roasted Salmon", link: "shorts/JZDPlqPV52g"
  },
  {
    recipe:"Pesto Noodles", link: "shorts/QGGNRdvH0Nk"
  },
  {
    recipe:"Smashed Potatoes", link: "shorts/ykCkqwNr1wU"
  },
  {
    recipe:"Mongolian Beef and Rice", link: "shorts/n7JiA3VUQd0"
  }, 
  {
    recipe:"Crispy Rice and Salmon", link: "shorts/vapK5FBvZzQ"
  }
  ]

  const dessertArray = [
    {
      dessert: "Easy Pecan Pie", dessertlink: "shorts/eNbbTh0td4Q"
    },
    {
      dessert: "Milk Bar Pie", dessertlink: "shorts/alUj2wyGBIo"
    },
    {
      dessert: "Nutella Souffle", dessertlink: "shorts/9-8LUW5tqBg"
    },
    {
      dessert: "Key Lime Pie Bar", dessertlink: "shorts/_qDe12De6nE"
    }
  ]



  return (
    
    <div className="App">
      <header className="App-header">

        <div id="recipe-box">

          <h1>"Hey what are we eating today?"</h1>
          { /* <h1>{randomNumber}</h1> */}
          <button id="newrecipe" onClick={()=>generateRandomRecipe()}>I don't care</button>
          <p id="text"> {recipe} </p>
          <a id="linktovideo" href={`https://www.youtube.com/${link}`}> Link To Recipe </a>
            <p> </p>
          <button id="dessertbutton" onClick={()=>generateRandomDessert()}>What about dessert?</button>
            <p>
          <a href={`https://www.youtube.com/${dessertlink}`}> {dessert} </a></p>
        </div>

      
      </header>
    </div>
  );
}

export default App;
