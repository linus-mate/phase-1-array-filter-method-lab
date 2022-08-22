// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string) {
    return drivers.filter(X => {
        return X.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(drivers, string){
    return drivers.filter(x => {
        return(
           x.startsWith(string)  && 
           x.charAt(x.length-1) !== string &&
           !x.substring(1, x.length-1).includes(string)
        );
    });
}

function matchName(drivers, string){
    return drivers.filter (X => {
        return X.name === string;
    });
}

//=> {
  //  return drivers.filter (x => {
       // return x.toLowerCase() === string.toLowerCase();
 //   });
//}
