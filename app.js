/*
In this assignment you are going to create the first part of the grocery app.
This will include the features related to the shopping list screen. 
Start by creating the following model for ShoppingList using Sequelize: 
shoppinglist: 
name :String 
street : String 
city : String 
state :String 
 
- You app should be able to display all the shopping lists 
- Should be able to create new shopping list 
- Should be able to remove the shopping list 
- Should be responsive 
*/

const express = require('express')
const app = express()

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: "my.server.tld",
  port: 9821,
})
const sequelize = new Sequelize
let models =require('./models')


app.listen(3000, () => console.log('Currently listening on port 3000!'))

//items on list
let listNames = []
let listItems = []


//**********ROUTINGS**********ROUTINGS**********ROUTINGS**********


//**********GET ALL GROCERY LISTS TO VIEW**********
app.get('/grocerylists', function(req, res){
  models.Student.findAll().then(function(students){
    //find everything
    res.json(students)
  })
  //views not provided, send data returned from resp.json(grocerylist)
  models.Grocerylist.findOne({
    where: listname = req.params.name
    }
  }).then(function(grocerylist){
    //grocerylist: data gotten back from db
    res.json(grocerylist)

  })
  //render something here
})

//**********ADD A NEW GROCERY LIST TO shoppinglists **********
app.post('/newList', function(req, res) {
  console.log("x")

  //**********building the shoppinglist using build()**********
  /*
  let anotherStudent = models.Student.build({
    firstname : "alex",
    lastname : "doe",
    isgraduated : false
  }) */
  let newshoppinglist = req.body.shoppinglist
  let listnameid = guid()
  //let newgroceryitem = req.body.groceryitem

  let anothergrocerylist = models.Grocerylist.build({
    listname = newshoppinglist
    listnameid = listnameid
  })

    //listItems.push(groceryItem)
    listNames.push({
      listname = newshoppinglist
      listnameid = listnameid
    })
    //**********SAVE NEW GROCERYLIST INTO DB**********
      /*
      anotherStudent.save().then(function(savedStudent){
        console.log(savedStudent)
      }) */

      anotherGrocerylist.save().then(function(savedgrocerylist){
        console.log(savedgrocerylist)
      })





    db.none('INSERT INTO listNames(shoppingListId, list)')
    //when passing in views does it need {key: {key:value}}?
    res.render('viewList', {listName: shoppingList, groceryItem: groceryItem})
  })
  })




//**********CREATING AND SAVING THE GROCERYLIST**********
  /*
  models.Student.create(student).then(function(newStudent){
    console.log(newStudent)
  }) */
  models.Grocerylist.create(grocerylist).then(function(newlist)){
    console.log(newlist)
  }


//**********ADD A NEW ITEM TO itemslist**********



//**********DELETE AN OLD LIST FORM shoppinglists **********
app.post('/todos2',function(req,res){

    let deleteNum = req.body.deleteNum
    let deleteNumIndex = deleteNum-1

    //take deleteNum out of todos array
    todos.splice(deleteNum-1, 1)
    todos.forEach(function(item){
      console.log(`This is listItems after deleting ${item.number}`)
    })

    for (x = deleteNumIndex; x< todos.length; x++){
      todos[x].number -= 1
      console.log(todos[x].number)
      }
    todos.forEach(function(item){
      console.log(`This is listItems after deleting ${item.number}`)
    })
    //can chose index.mustache or todos.mustache to render
    res.render('viewList.mustache',{listItems : data})
  })
//**********DELETE AN ITEM FROM itemslist**********



//get specific id for a user
  function guid() {
      function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
          }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }
