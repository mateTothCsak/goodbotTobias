const tmi = require("tmi.js");

let options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: "goodbuttobias",
        password: "oauth:fvqbmx0b9gdn1ohy25ep5ibwg6l5ag"
    },
    channels: [ "#goodguymate" ]
};

let client = new tmi.client(options);

// Connect the client to the server..
client.connect();

client.on("chat", (channel, userstate, message, self) => {
    if (self) return;

    console.log(userstate);

    if (message === "!hi"){
        client.action("goodguymate", "Hi there!")
    }
});