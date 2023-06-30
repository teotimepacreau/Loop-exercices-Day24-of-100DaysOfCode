console.log('connecté !');
//https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md#exercise-level-1
// Exercice I

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

//1.Iterate 0 to 10 using for loop ✅
function firstIteration(array) {
  countries.forEach((country, index) => {
    console.log(index, country)
  });
}

firstIteration(countries)

//2.Iterate 10 to 0 using for loop✅
for(i=countries.length-1; i>=0 ; i--){
  console.log(i, countries[i])
}

//3. Iterate 0 to n using for loop✅

let n= 4
for(i=0; i<n; i++){
  console.log(countries[i])
}

/*4.Write a loop that makes the following pattern using console.log():✅

#
##
###
####
#####
######
#######
*/
for(i=0; i<=7; i++){
  console.log('#'.repeat(i))//repeat prend en paramètre l'index pour savoir combien de fois il doit répéter le symbole
}

/*5.Use loop to print the following pattern✅

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for(i=0; i<=10; i++){
  console.log(i*i)
}

//6. Use for loop to iterate from 0 to 100 and print only even numbers✅

for(i=0; i<=100;i++){
  if(i%2==0){
    console.log(i)
  }
}

//7. Use for loop to iterate from 0 to 100 and print only odd numbers✅
for(i=0; i<=100;i++){
  if(i%2!=0){
    console.log(i)
  }
}

//8.Develop a small script which generate array of 5 random numbers
let arrayOfNumbers = []
function insertRandomNumbers(arrayOfNumbers){
  for(i=0; i<=5; i++){
  arrayOfNumbers.push(Math.random())
  }
}

insertRandomNumbers(arrayOfNumbers)
console.log(arrayOfNumbers)

//9.Develop a small script which generate a six characters random id: 5j2khz

for(i=7; i<=7; i++){
  console.log(Math.random().toString(36).substring(2,7))
}
