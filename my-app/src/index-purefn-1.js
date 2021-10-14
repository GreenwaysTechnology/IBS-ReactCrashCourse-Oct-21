//pure function
function updateProfile(profile) {
    return profile;
}

let profile = {
    id: 1,
    name: 'subramanaian',
    address: {
        city: 'chennai'
    }
}

const newProfile = updateProfile(profile);
console.log(newProfile);

//is it pure function: No - impure function ,
//the reason the function is doing side effects
function updateProfileV2(profile) {
    profile.address.city = "Coimbatore"
    return profile;
}

const newProfileV2 = updateProfileV2(profile);
console.log(newProfileV2);