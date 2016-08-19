var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(555) 555-5555",
        address: ["321 Fake Street", "London", "England","SE1 1AL"]
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(111) 222-333",
        address: ["321 Fake Street", "London", "England","123 456"]
    }
};

var list = function(friends){
    for (var firstName in friends){
        console.log(firstName);
    }
};

list();

var search = function(name) {
    for (var key in friends) {
    if (friends[key].firstName === name) {
        console.log(friends[key]);
     }
        return friends[key];
    }
};

search("steve")

    
    
        