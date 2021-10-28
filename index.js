const express = require('express');
const {default: ParseServer} = require('parse-server');
const ParseDashboard = require('parse-dashboard');
const app = express();

const parseServer = new ParseServer({
    databaseURI: 'mongodb+srv://gusta:953@cluster0.hkbwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    appId: 'voosce',
    masterKey: '12345678',
    serverURL: 'http://localhost:1337/parse',
    publicServerURL: 'http://localhost:1337/parse',
});
const dashboard = new ParseDashboard({
    apps: [
        {
            serverURL: 'http://localhost:1337/parse',
            appId: "voosce",
            masterKey: '12345678',
            appName: "voosce"
        }
    ]
})
app.use('/parse', parseServer.app);
app.use('/dashboard', dashboard);
app.listen(1337, function(){
    console.log('Rest API parse running at: localhost:1337/parse')
});