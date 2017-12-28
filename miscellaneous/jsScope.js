// If we execute this Javascript, what will the browser's console show?

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

// This should log "undefined" due to variable hoisting. var text within the scope of logIt() gets hoisted to the
// top of the function block, and then it gets logged to the console before it is reassigned to 'inside'.