/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
<<<<<<< HEAD

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

=======
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   console.log("resolved1.");
      res();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   console.log("resolved2.");
      res();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   console.log("resolved3.");
      res();
    }, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  // 1.
  //   await wait1(t1); // one by one
  //   await wait2(t2);
  //   await wait3(t3);

  // 2.
  var date1 = new Date();
  await Promise.all([wait1(t1), wait2(t2), wait3(t3)]); // all along
  var date2 = new Date();

  return date2 - date1;
}

// console.log(calculateTime(1, 2, 3));

>>>>>>> 6590e11 (23/2/24)
module.exports = calculateTime;
