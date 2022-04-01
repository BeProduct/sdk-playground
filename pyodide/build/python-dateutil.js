var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="python-dateutil.data";var REMOTE_PACKAGE_BASE="python-dateutil.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","dateutil",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/dateutil","tz",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/dateutil","parser",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/dateutil","zoneinfo",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","python_dateutil-2.8.1-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:305015,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1451,2854,3847,4925,5748,6857,7484,8395,9194,9787,10517,11396,12843,14311,15539,16917,18080,19070,19967,21127,22486,23562,24765,25909,26710,27603,28366,29137,30178,31250,32200,32923,33759,34587,35776,37144,38197,39035,39992,40935,41946,43083,44129,45172,46257,47269,48039,48938,50257,51501,52568,53952,55218,56515,57654,59010,60253,61484,62723,64080,65160,66396,67634,68874,69906,70974,71966,73382,74661,75732,77015,78122,79219,80404,81592,82838,83996,84982,86303,87590,88675,89792,91046,92049,92850,93612,94802,95920,96804,97741,98793,100131,101463,102802,104101,105286,106391,107419,108593,109858,111453,112733,113462,114504,115758,116677,117778,118845,119782,120885,122038,123244,124335,125314,126210,127302,128227,129241,130376,131678,132735,133935,135250,136416,137583,138357,139278,139854,141208,142570,143832,145151,147155,149203,151251,153299,155347,157403,159451,161499,163547,165595,167643,169691,171737,173785,175825,177879,179927,181984,184032,186076,188124,190172,192207,194255,196312,198360,200408,202464,204512,206560,208608,210656,212704,214752,216800,218848,220896,222944,224992,227040,229079,231093,233141,235189,237237,239285,241333,243381,245429,247477,249525,251573,253621,255677,257725,259773,261825,263873,265921,267969,270017,272065,274113,276168,278216,280264,282312,284360,286408,288456,290504,292552,294600,296648,298696,299868,300920,302049,303533],sizes:[1451,1403,993,1078,823,1109,627,911,799,593,730,879,1447,1468,1228,1378,1163,990,897,1160,1359,1076,1203,1144,801,893,763,771,1041,1072,950,723,836,828,1189,1368,1053,838,957,943,1011,1137,1046,1043,1085,1012,770,899,1319,1244,1067,1384,1266,1297,1139,1356,1243,1231,1239,1357,1080,1236,1238,1240,1032,1068,992,1416,1279,1071,1283,1107,1097,1185,1188,1246,1158,986,1321,1287,1085,1117,1254,1003,801,762,1190,1118,884,937,1052,1338,1332,1339,1299,1185,1105,1028,1174,1265,1595,1280,729,1042,1254,919,1101,1067,937,1103,1153,1206,1091,979,896,1092,925,1014,1135,1302,1057,1200,1315,1166,1167,774,921,576,1354,1362,1262,1319,2004,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2046,2048,2040,2054,2048,2057,2048,2044,2048,2048,2035,2048,2057,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2039,2014,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2052,2048,2048,2048,2048,2048,2048,2055,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,1172,1052,1129,1484,1482],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_python-dateutil.data")}Module["addRunDependency"]("datafile_python-dateutil.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/dateutil/_version.py",start:0,end:142,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/relativedelta.py",start:142,end:25046,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/__init__.py",start:25046,end:25268,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/easter.py",start:25268,end:27952,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/utils.py",start:27952,end:29911,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/_common.py",start:29911,end:30843,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tzwin.py",start:30843,end:30902,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/rrule.py",start:30902,end:97641,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/__init__.py",start:97641,end:98085,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/win.py",start:98085,end:111020,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/_factories.py",start:111020,end:113589,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/_common.py",start:113589,end:126566,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/tz/tz.py",start:126566,end:189498,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/parser/__init__.py",start:189498,end:191264,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/parser/isoparser.py",start:191264,end:204362,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/parser/_parser.py",start:204362,end:263166,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/zoneinfo/__init__.py",start:263166,end:269055,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/zoneinfo/rebuild.py",start:269055,end:270774,audio:0},{filename:"/lib/python3.9/site-packages/dateutil/zoneinfo/dateutil-zoneinfo.tar.gz",start:270774,end:424089,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.1-py3.9.egg-info/top_level.txt",start:424089,end:424098,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.1-py3.9.egg-info/requires.txt",start:424098,end:424107,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.1-py3.9.egg-info/SOURCES.txt",start:424107,end:426175,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.1-py3.9.egg-info/dependency_links.txt",start:426175,end:426176,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.1-py3.9.egg-info/PKG-INFO",start:426176,end:434159,audio:0},{filename:"/lib/python3.9/site-packages/python_dateutil-2.8.1-py3.9.egg-info/zip-safe",start:434159,end:434160,audio:0}],remote_package_size:309111,package_uuid:"f9473cc9-7c7b-4200-828c-6a8215c896df"})})();