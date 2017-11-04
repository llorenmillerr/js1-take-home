//App to gather introductory user data

//Variables for introduction()
var firstName;
var lastName;
var aquainted;
var birthDate;
var fixedDate;

function introduction() {

  alert('Oh, Hello! I didn"t see you there!');

//Asks for user's first name
  var firstName = prompt('What is your first name?');

//Logs user's first name to the console
  console.log(firstName);
  alert('Huh, I knew a ' + firstName + ' once...');

//Asks for user's last Name
  var lastName = prompt('What is your last name?');

  /*
  was going to make seperate path for aquianted = true
  if (try to guess bday using random date between given dates)
> else (asks for date)
  */

//Alerts user's last name
  var aquainted = confirm(lastName + '! As in ' + firstName + ' ' + lastName + '?!?! Haven"t we met before?!');
  var birthDate = prompt('Hey, while I have you here, what is your birth date?');

//Does this meet the requirement given to use Javascript'd Date object??
  var fixedDate = new Date(birthDate);

//Checks if date format is recognized
  if (fixedDate == 'Invalid Date') {
    var birthDate = prompt('Hmm, I dont recognize that date format. Can you try again?')
    var fixedDate = new Date(birthDate);

//checks again if date format is recognized
    if (fixedDate == 'Invalid Date') {
        alert('... Im sorry ... I only speak Gregorian Calendar');

//if two unrecognized formats
    } else {
      confirm('Right, so its' + fixedDate + '?');
      alert('Right! Well, I have lots to do. It was nice to bump in to you, have a great day!')
    };

//if second try is correct format
  } else {

//Confirms user's birthday
    confirm('Right, so its ' + fixedDate + '?');
    alert('Right! Well, I have lots to do. It was nice to bump in to you, have a great day!')
  };
};



//I got tired of the dialogue towards the end so I left off the final 'alerts the resulting birthday'
