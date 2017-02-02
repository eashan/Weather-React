var names = ['Eashan', 'Rahul', 'Khadak', 'tan'];

// names.forEach(function(name){
//   console.log('forEach', name)
// });
//
// names.forEach((name) => console.log("Arrow",name))

var person = {

  name: "Eashan",
  greet: function (){
    names.forEach((name) => {
      console.log(this.name + "says Hi to "+ name);
    });
  }
};

person.greet();
