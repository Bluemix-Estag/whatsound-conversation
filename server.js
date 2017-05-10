var express = require("express");
var app = express();
var chatbot = require('./config/bot.js');

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())







/**
 * Endpoint to get a JSON object of watson converation response
 * REST API example:
 * <code>
 * POST https://whatsound-conversation.mybluemix.net/
 * </code>
 * Sending a JSON Object having context object and text, to 
 * continue Watson Conversation's chat
 *
 * Response:
 * [ text = [{"Ola"}], context : { } ]
 * @return An object of all the conversation params
 */




app.post("/", function (req, res) {    
    processChatMessage(req,res);
});

function processChatMessage(req,res){
    chatbot.sendMessage(req,function(err,data){
        if(err){
            console.log('Error in sending message: ',err);
            res.status(err.code || 500).json(err);
        }else{
            var context = data.context;
            res.status(200).json(data);
        }
    })
}







/**
* Endpoint to get a JSON object of a music from spotify databases
* REST API example:
* <code>
* GET http://whatsound.mybluemix.net/getMusic?music=<music-name>
* <code>
*
* Response:
* { name: "Music's name" , artist: "Artist's name", album: "Music's album", uri: "" }
*Spotify 
https://api-routes.mybluemix.net/spotify/musica/musica=<nome-musica>


retorna: JSON { nome , artista , album , uri-iframe }
*/



/**
*Spotify 
https://api-routes.mybluemix.net/spotify/artista/artista=<nome-artista>


retorna: JSON { nome , artista , album , uri-iframe }
*/





//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));



var port = process.env.PORT || 5000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
