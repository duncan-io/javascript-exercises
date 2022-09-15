const findTheOldest = function(oldies) {

    oldies.forEach(person => {
        if(person.yearOfDeath == undefined){
            person.yearOfDeath = (new Date()).getFullYear();
        } 
    })
    
    const oldest = oldies.sort((a, b) => {
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
  
        return lastGuy > nextGuy ? -1 : 1;
       });


       return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
