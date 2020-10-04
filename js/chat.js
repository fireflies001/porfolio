

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    document.querySelector("#button").addEventListener("click", function(e){
        let inptfield = input.value;
        input.value = '';
        const mainDiv = document.getElementById("main");
        let userDiv = document.createElement("div");
        userDiv.id = "user";
        userDiv.className = " mt-3 ml-2 mr-5 float-sm-right"
        userDiv.innerHTML = ` <span id="user-response">${inptfield}</span> <br>`;
        mainDiv.appendChild(userDiv);
        output(inptfield);
    });
   
});

function compare(triggerArray, replyArray, text) {
    let item;
    console.log(text);
    for(let x = 0; x < triggerArray.length; x++) {
        for(let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == text) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
                return item;
            }
        }
    }
    return null;
}

function output(input) {
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi,"");
    text = text
            .replace(/ a /g, " ")
            .replace(/im /g, "")
            .replace(/i feel /g, "")
            .replace(/whats /g, "what is ")
            .replace(/please /g, "")
            .replace(/ please/g, "")
            .replace(/who's /g, "who is ")
            .replace(/ of /g, " ")
            .replace(/whos /g, "who is ");
    var check;
    check = compare(trigger, reply, text);
    if (check != null) {
        product = check;
    } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }
    addChat(product);
}

function addChat(product) {
    const mainDiv = document.getElementById("main");
    let botDiv = document.createElement("div");
    botDiv.id ="bot";
    botDiv.className = "mt-3 ml-3 mr-4"
    botDiv.innerHTML = `<span id="bot-response">${product}</span> <br>`;
    mainDiv.appendChild(botDiv);
    var elem = mainDiv;
    elem.scrollTop = elem.scrollHeight;
}
// window.setInterval(function() {
//     var elem = document.getElementById("main");
    
// }, 3000)











// readTextFile("../vocab.json", function(text){
//     var data = JSON.parse(text);
//     var trigger = data["trigger"];
//     console.log(trigger[0]);
// });
// function readTextFile(file, callback) {
//     var rawfile = new XMLHttpRequest();
//     rawfile.overrideMimeType("application/json");
//     rawfile.open("GET", file, true);
//     rawfile.onreadystatechange = function() {
//         if (rawfile.readyState === 4 || rawfile.readyState == "200") {
//             callback(rawfile.responseText);
//         }
//     }
//     rawfile.send(null);
// }