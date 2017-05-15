# WhatSound Conversation MicroService



Endpoint to get a JSON object of watson converation response

REST API example:

```
    POST https://whatsound-conversation.mybluemix.net/
```

Sending a JSON Object having context object and text, to continue Watson Conversation's chat

if there is no context JSON object, Watson Conversation will considere as a new Char. ( later on, context handler will be built-in )

# Response:

```
 {
    text = [{"Ola"}], 
    context : { } 
    ...
 }

```

@return An object of all the conversation params


