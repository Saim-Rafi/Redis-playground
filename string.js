const client = require("./client");

async function init(){
    // await client.set("msg:3","Hey from nodeJs");
    // await client.expire("msg:3",10);
    const result = await client.get("msg:3");
    console.log("Result->",result);
}

init();