/*
Tyler Adams
Tuesday, August 6th, 2013

I have removed my username and password from the variables user and pass so I don't get hacked
Remove internet access to ideone and user/password
 */


//  require.paths.unshift('.')
var rpc = require('jsonrpc');
var sys = require('sys');
console.log("running ideoneclient");

var JsonRpcWrapper = function(){
    this.client = rpc.getClient(80, 'ideone.com');
    this.path = '/api/1/service.json';
    this.call = function(method, params, callback){
        this.client.call(method, params, callback, null, this.path);
    }
}
var user = '';
var pass = '';  //API password

// ideone client
var ideone = new JsonRpcWrapper();

// test
ideone.call('testFunction', [user, pass], function(error, result) {
    console.log('testFunction: ' + result['error']);
});

var lang = 35;	// JavaScript(rhino)     used to be 4 for python
var source = 'print("hello world");'; // used to be 'print \'it works!\'' for python print 'it works'
var input = '';       // used to be '' for python

link = '';
ideone.call('createSubmission', [user, pass, source, lang, input, true, false], function(error, result){
    if(result['error'] == 'OK'){
        link = result['link'];
        console.log('link: http://ideone.com/' + link);
        wait();
    } else {
        console.log(result['error']);
    }
});

var wait = function(){
    ideone.call('getSubmissionStatus', [user, pass, link], function(error, result){
        console.log(result);
        if(result['status'] != 0){
            setTimeout(wait, 1000);
        } else {
            details();
        }
    });
};

var details = function(){
    ideone.call('getSubmissionDetails', [user, pass, link, false, false, true, true, true], function(error, result){
        console.log(result);
    });
}

