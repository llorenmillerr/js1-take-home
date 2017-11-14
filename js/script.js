
function logMessage() {
  var toDo = [];
  var toDos = [];
//Prompt user for 3 weekend tasks

for (let i = 0; i <= 3; i++) {
  let toDo = [];
  var userToDo = prompt('What is the first task you need to complete this week?', 'Clean, cook, code...');
  var dueDate = prompt('How many days should that take?', '2, 3, 4...')
  dueDate = parseInt(dueDate);
  if (dueDate == NaN) {
    prompt('Sorry, can you please enter the number of days you expect the item to take?');
  } else {
    continue;
  }
}






  // toDo.push(prompt('What is the first task you need to complete this week?'));
  // toDo.push(prompt('What is the second task you need to complete this week?'));
  // toDo.push(prompt('What is the last task you need to complete this week?'));



//FOR loop to add days needed to complete task
//For the excercise I used the string length to determine the days needed for each task


  for (var i = 0; i < toDo.length; i++) {
    let arr = [];
    let item = toDo.shift();
    arr.push(item, item.length);
    toDo.push(arr);
    console.log(toDo);
  }





// WHILE loop to find the largest required time
//
//   var max = Math.max(toDo[0][1],toDo[1][1],toDo[2][1]);
//   var i = 0;
//   console.log(max);
//
//   while (i <= max) {
//     if (toDo[i][1] = max) {
//       console.log(toDo[i]);
//     }
//    i++;
//   }
//
//
//
//
// // DO WHILE to add 'done' to all tasks other than longest
//
//   do {
//     if (toDo[i][1] < max) {
//       let item = toDo.shift();
//       item.push('done');
//       toDo.push(item);
//     }
//     i++;
//
//   } while (i < toDo.length);
//
//
//
//   console.log(toDo);
}
