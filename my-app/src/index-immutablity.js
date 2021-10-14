//pure function

/**
 * Rules :
 * 
 * 1. if function takes parameter and return the same without modifying
 *  -props pattern
 * 2. if function takes parameter , what if it changes the parameter , it should     return immutable data structruce- state pattern
 * 
 * What is immutable?
 *  immutable is opposit of mutable.
 *  mutable means changeable or modifiable,able to be messed with
 * 
 * so something that is immutable, then is something that can not be changed.
 * 
 */

//impure function
// function updateProfile(profile,city){
// // mutable mutatation/ updatation
//     profile.city = city;
//     return profile;
// }

//Immutablity and pure function : Pattern-1
//create new object and copy all old object properties into new object, and update the property which is changing
// function updateProfile(profile, city) {
//     //immutable mutation
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     } //new Profile Object
// }

//Immutablity and pure function : Pattern-2
//create new object and copy all old object properties into new object, and update the property which is changing
//The above has some drawback, we need to copy all the properties manually which is complex in large objects. soultion is "Object.assign"
// function updateProfile(profile, city) {
//     //immutable mutation
//     return Object.assign({}, profile, { city: city })
// }

//Immutablity and pure function : Pattern-3
//create new object and copy all old object properties into new object, and update the property which is changing
// We can even simplify the code using spread operator
function updateProfile(profile, city) {
    //immutable mutation
    return { ...profile, city: city }
}

let profile = {
    id: 1,
    name: 'subramanian',
    city: 'chennai'
}

console.log("Before Update ", profile)

const updatedProfile = updateProfile(profile, 'Coimbatore');

console.log("After Update ", updatedProfile)

//equal operator can be used to test whether two objects are same or differ
console.log("Same Object (profile===updatedProfile)", profile === updatedProfile)







