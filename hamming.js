var Hamming = {
  compute: function(s1, s2) {
    //Declare output variable
    //Default is identical stands ie. distance = 0
    var dist = 0;
    if (s1.length != s2.length) {
    	throw new Error ("DNA strands must be of equal length.");
    }
 	for (i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) {
        dist = dist + 1;
      }
    }
    return dist;
  } 
};

module.exports = Hamming;

//I got the main gist of this code from 
//http://stackoverflow.com/questions/26641088/exercism-javascript-hamming-exercise-getting-undefined-is-not-a-function
//I changed some code to better suit this excersise.