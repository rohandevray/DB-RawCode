const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry"],
  },
  rating: Number,
  review: String,
});
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favfruit: fruitSchema,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit({
  rating: 8,
  review: "Its Great!",
});
const Orange = new Fruit({
  name: "Orange",
  rating: 6,
  review: "Sour!",
});
const Banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Sweet",
});
const Pepsi = new Fruit({
  name: "Pepso",
  rating: 6,
  review: "Looks Ok",
});
const pineapple = new Fruit({
  name: "Pineapple",
  rating: 8,
  review: "Nice re",
});
const loda = new Fruit({
  name: "loda",
  rating: 10,
  review: "Hue Hue!",
});
loda.save();
Fruit.insertMany([Orange, Banana, Pepsi], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Sucess fully saved fruits to fruitsDB database");
  }
});
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

Fruit.updateOne(
  { _id: "623f49fe327d2bb009f330e7" },
  { name: "Peach" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated the name of the fruit");
    }
  }
);
Fruit.deleteOne({ _id: "623f49fe327d2bb009f330e7" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfulluy deleted");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 18,
//   favfruit: pineapple,
// });
const person = new Person({
  name: "Amy",
  age: 18,
  favfruit: pineapple,
});

Person.updateOne({ name: "John" }, { favfruit: loda }, function (err) {
  if (err) {
    console.log(err);
  }
});
// Person.deleteOne({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfulluy deleted John");
//   }
// });
// person.save();
