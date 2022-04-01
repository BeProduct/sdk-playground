var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="MarkupSafe.data";var REMOTE_PACKAGE_BASE="MarkupSafe.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","MarkupSafe-2.0.1-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","markupsafe",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:16046,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1262,2623,4033,4894,6018,7137,8302,9472,10161,11250,12609,14008,15e3],sizes:[1262,1361,1410,861,1124,1119,1165,1170,689,1089,1359,1399,992,1046],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_MarkupSafe.data")}Module["addRunDependency"]("datafile_MarkupSafe.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/MarkupSafe-2.0.1-py3.9.egg-info/top_level.txt",start:0,end:11,audio:0},{filename:"/lib/python3.9/site-packages/MarkupSafe-2.0.1-py3.9.egg-info/SOURCES.txt",start:11,end:720,audio:0},{filename:"/lib/python3.9/site-packages/MarkupSafe-2.0.1-py3.9.egg-info/dependency_links.txt",start:720,end:721,audio:0},{filename:"/lib/python3.9/site-packages/MarkupSafe-2.0.1-py3.9.egg-info/PKG-INFO",start:721,end:3958,audio:0},{filename:"/lib/python3.9/site-packages/markupsafe/__init__.py",start:3958,end:12881,audio:0},{filename:"/lib/python3.9/site-packages/markupsafe/py.typed",start:12881,end:12881,audio:0},{filename:"/lib/python3.9/site-packages/markupsafe/_speedups.pyi",start:12881,end:13110,audio:0},{filename:"/lib/python3.9/site-packages/markupsafe/_native.py",start:13110,end:15096,audio:0},{filename:"/lib/python3.9/site-packages/markupsafe/_speedups.c",start:15096,end:22496,audio:0},{filename:"/lib/python3.9/site-packages/markupsafe/_speedups.so",start:22496,end:28101,audio:0}],remote_package_size:20142,package_uuid:"3b562469-91ee-4af3-aa96-c6515dbea8f3"})})();