var templateString = document.getElementById('nameTemplate').innerHTML;

var nameTemplate = _.template(templateString);


// My variable of names.
var names = [
  'bill',
  'jane ',
  'sally',
  'mary'
];

//Getting a list of compiled templates by mapping over my list of names.
var finishedNames = _.map(names, function (personName) {
  return nameTemplate({ name: personName });// Notice that an object is being passed into this function
                                            // this object has the key that matches my template in HTML.
        //I'm calling the nameTemplate function once for each name and returning it.
});

var destination = document.querySelector('#nameTarget');
//Grab the element where I want to put the data

destination.innerHTML = finishedNames.join('');
//Assign the innerHTML of my destination element to all the name templates joined together.
