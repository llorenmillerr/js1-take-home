// // Accidentally started the 'in class' not the 'take home'
//
// var birthday = prompt('What is your date of birth?');
// var birthDate = new Date(birthday);
// var today = new Date();
// var age = Math.abs(today - birthDate);
// console.log(age);
//
//
// if (age < 18) {
//   alert('You are not old enough to enter.');
// } else {
//
//
//
// }






var userName = prompt('What is your name?')
var favColor = prompt('Do you have a favorite color?', 'red, orange, yellow, green, blue, purple, pink, white, grey, black...')
favColor = favColor.toLowerCase();

switch (favColor) {
  case 'red':
    alert('Awesome, your favorite color is ' + favColor +'!')
    break;
  case 'orange':
    alert('Oh... thats almost red')
    break;
  case 'yellow':
    alert('Uh, nice i guess')
    break;
  case 'green':
    alert('Interesting... why not red though?')
    break;
  case 'blue':
    alert('Oh yeah, blue is uh... a color.')
    break;
  case 'purple':
    alert('Ok, but have you ever seen red?!')
    break;
  case 'pink':
    alert('That is like 2 shades from red!')
    break;
  case 'white':
    alert('Its like red died and went to heaven')
    break;
  case 'grey':
    alert('Red with zero contrast')
    break;
  case 'black':
    alert('Awesome, like red in the dark!')
    break;

  default: alert('Hmm, that color wasn\'t in the suggested list of colors.')

}

























//
