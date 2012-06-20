(function($){$.icndb={};$.icndb.client={}
$.icndb.client.id=4;$.icndb.client.version=0.1;var base="http://api.icndb.com/";var full=function(resource){return base+resource+'?client='+$.icndb.client.id+'&clientVersion='+$.icndb.client.version;};var callServer=function(destination,successCB,errorCB){$.ajax({url:destination,dataType:"jsonp",type:"GET",success:function(result){successCB(result);}});}
$.icndb.getRandomJokes=function(args){var success=function(result){if(args.success){args.success(result.value);}else{args(result.value);}}
var number=1;if(args.number){number=args.number;}
var url=full("jokes/random/"+number);if(args.firstName){url+="&firstName="+args.firstName;}
if(args.lastName){url+="&lastName="+args.lastName;}
if(args.limitTo){url+="&limitTo=["+args.limitTo.toString()+"]";}else if(args.exclude){url+="&exclude=["+args.exclude.toString()+"]";}
callServer(url,success,function(){});};$.icndb.getRandomJoke=function(args){var args2={};$.extend(args2,args);args2.success=function(result){result=result[0];if(args.success){args.success(result);}else{args(result);}};args2.number=1;$.icndb.getRandomJokes(args2);};$.icndb.getJokes=function(args){var success=function(result){if(args.success){args.success(result.value);}else{args(result.value);}}
var url=full("jokes");if(args.firstName){url+="&firstName="+args.firstName;}
if(args.lastName){url+="&lastName="+args.lastName;}
if(args.limitTo){url+="&limitTo=["+args.limitTo.toString()+"]";}else if(args.exclude){url+="&exclude=["+args.exclude.toString()+"]";}
callServer(url,success,function(){});};$.icndb.getCategories=function(callback){var success=function(result){callback(result.value);};var url=full("categories");callServer(url,success,function(){});}
$.icndb.getNumberOfJokes=function(callback){var success=function(result){callback(result.value);};var url=full("jokes/count");callServer(url,success,function(){});}})(jQuery);
