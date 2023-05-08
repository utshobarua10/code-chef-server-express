const express = require('express');
const app = express();
const port = 5000;
const data = require('./Data/chef.json');
const recipe = require('./Data/recipe.json');
var cors = require('cors')
app.use(cors())


app.get('/',(req,res)=>{
    res.send(data.chefs)

})
app.get('/chefRecipe/:id',(req,res)=>{
    const id = req.params.id
    const foods = recipe.food_items;
    const finded = foods.find(food=> food.id==id)
    const chefData = data.chefs;
    const findedChef = chefData.find(chef=> chef.id==id)
   
    const fullData = {...finded,...findedChef}
    console.log(fullData)
    res.send(fullData)


    
})



app.listen(port, ()=>{
    console.log(`app is listening to the port ${port}`)
})