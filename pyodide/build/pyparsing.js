var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="pyparsing.data";var REMOTE_PACKAGE_BASE="pyparsing.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","pyparsing-2.4.7-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:157041,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1622,3117,4306,5441,6820,8325,9514,10883,11968,13196,14282,15164,15957,17157,18286,19440,20595,21830,22779,23969,24582,25817,26926,28152,29448,30593,31808,32997,34354,35482,36606,37367,38166,38900,40017,41221,42516,43719,44870,46222,47506,48380,49578,50429,50868,51990,53193,54267,55437,56629,57912,58914,59847,61065,62155,63434,64514,65700,66929,68271,69224,70286,71719,72589,73807,74835,75789,77039,78261,79339,80477,81419,82487,83556,84396,85641,86679,87884,89069,90271,91441,92677,93633,94834,95778,97145,98338,99723,100843,101923,103184,104440,105678,106841,108059,109217,110426,111580,112828,114137,115492,116700,118035,119343,120709,122049,123420,124685,125951,127297,128742,129797,131188,132413,133382,134682,135648,136754,137841,139155,140399,141008,141952,143146,144447,145701,146677,147419,148472,149350,150195,151157,152352,153431,154387,155480,157019],sizes:[1622,1495,1189,1135,1379,1505,1189,1369,1085,1228,1086,882,793,1200,1129,1154,1155,1235,949,1190,613,1235,1109,1226,1296,1145,1215,1189,1357,1128,1124,761,799,734,1117,1204,1295,1203,1151,1352,1284,874,1198,851,439,1122,1203,1074,1170,1192,1283,1002,933,1218,1090,1279,1080,1186,1229,1342,953,1062,1433,870,1218,1028,954,1250,1222,1078,1138,942,1068,1069,840,1245,1038,1205,1185,1202,1170,1236,956,1201,944,1367,1193,1385,1120,1080,1261,1256,1238,1163,1218,1158,1209,1154,1248,1309,1355,1208,1335,1308,1366,1340,1371,1265,1266,1346,1445,1055,1391,1225,969,1300,966,1106,1087,1314,1244,609,944,1194,1301,1254,976,742,1053,878,845,962,1195,1079,956,1093,1539,22],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_pyparsing.data")}Module["addRunDependency"]("datafile_pyparsing.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/pyparsing.py",start:0,end:273365,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing-2.4.7-py3.9.egg-info/top_level.txt",start:273365,end:273375,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing-2.4.7-py3.9.egg-info/SOURCES.txt",start:273375,end:276939,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing-2.4.7-py3.9.egg-info/dependency_links.txt",start:276939,end:276940,audio:0},{filename:"/lib/python3.9/site-packages/pyparsing-2.4.7-py3.9.egg-info/PKG-INFO",start:276940,end:280598,audio:0}],remote_package_size:161137,package_uuid:"8f7bf798-5daf-4dab-8aa2-06c5e56c7a49"})})();