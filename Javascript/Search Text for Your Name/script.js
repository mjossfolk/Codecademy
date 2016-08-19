/*jshint multistr:true */

var text = "Hey, what's gong on with you, Michelle? / Michelle, I have never met your husband? / is he cool like you, Michelle?";

var myName = "Michelle";

var hits = [];

for (var i = 0; i <= text.length; i++) {
    if (text[i] === myName[0]) {
        for (var j = i; j < (i + myName.length); j++) {
            hits.push(text[j]);
        };
    };
};

if (hits.length === 0){
    console.log("Your name was not found.");
} else {
    console.log (hits);
}