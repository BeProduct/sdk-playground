var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="cytoolz.data";var REMOTE_PACKAGE_BASE="cytoolz.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cytoolz",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/cytoolz","curried",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","cytoolz-0.11.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:480199,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1336,2636,3784,4581,5841,6836,7888,9011,10166,11452,12685,13846,15057,16207,17149,18327,19580,20051,20944,21783,22612,23662,24941,25959,27181,28490,29883,31056,32091,32873,34030,35308,36497,37576,38314,39066,40084,41317,42087,43051,44294,45595,46732,47735,48775,49902,51083,52133,53063,54342,55683,56636,57973,59318,60356,60997,61640,62259,63646,64815,65835,66855,67877,69049,70244,71407,72078,72829,73481,74319,75491,76270,76775,77552,78493,79093,79722,80285,81064,82214,83428,84598,85600,86729,87946,89128,90451,91101,91727,92378,93674,94885,95996,97116,97998,99209,100432,101658,102094,103194,104303,104884,106252,107447,108706,109631,110648,111823,113074,114207,115336,116365,117391,118623,119402,120323,121345,122292,123320,124451,125542,126494,127512,128754,129779,130935,131927,133038,134148,135458,136383,137460,138673,139636,140677,141757,143120,144095,145165,146179,147264,148306,149105,149913,151088,152119,153306,154712,156023,157380,158526,159451,160759,162159,163342,164404,165809,167041,168068,169039,170243,171373,172422,173382,173947,175080,176376,177526,178542,179059,180286,181391,182026,183321,184380,185464,186770,187518,188319,189493,190383,190917,191425,192443,193356,194496,195674,196734,197832,198637,199806,200990,202265,203188,204395,205662,207034,208232,209633,210310,210855,211773,212929,213902,215174,216423,217447,218672,219948,220675,221633,222994,224241,225530,226581,227659,229022,229613,230813,231940,233149,234071,235236,236180,237362,238607,239338,239979,240614,241232,241846,242464,243310,244657,245827,246982,248084,249105,250123,251146,252160,253298,254448,255593,256697,257817,259027,259956,260454,261167,261935,262594,263241,264197,264884,265584,266360,266938,267532,268123,268636,269190,269742,270283,270780,271288,271819,272567,273209,273711,274225,274734,275220,275718,276412,277110,277712,278642,279294,280007,280688,281441,282135,282828,283467,284104,284811,285880,287201,288372,289415,290571,291772,292705,293785,294932,296025,297210,298234,299532,300580,301906,303016,303922,304902,305853,306720,307546,308449,309214,310230,311485,312635,313799,314981,316211,317367,318537,319633,320690,321601,322902,323422,324077,325385,326367,327569,328666,329909,331137,332047,333161,334246,335395,336328,337294,338455,339400,340373,341576,342124,342950,344083,345333,346465,347708,348611,349810,350771,351846,353117,354197,355388,356479,357531,358819,359942,361109,362176,363426,364752,365773,366986,368159,369206,369935,370401,371630,372649,373756,374758,375949,377057,378203,378915,379345,379781,380212,381105,382390,383352,384417,385376,386331,387507,388451,389931,390674,391958,392976,394350,395803,397163,398547,399744,400405,401497,402865,404191,405415,406774,407932,409025,409891,410966,411756,412763,413807,414693,415519,416060,416443,417509,418868,420056,421124,422214,423073,423649,424045,424383,425100,425819,426442,427489,428543,429889,431142,432559,433791,434729,434754,435543,436734,437782,439132,440331,441365,442743,444092,444746,445355,446752,447724,448767,449667,450984,452197,453369,454671,455522,456659,458064,459095,459945,460461,461406,462467,463968,464662,465191,466117,467259,468587,469850,471241,472530,473678,474525,475726,476671,477775,479054],sizes:[1336,1300,1148,797,1260,995,1052,1123,1155,1286,1233,1161,1211,1150,942,1178,1253,471,893,839,829,1050,1279,1018,1222,1309,1393,1173,1035,782,1157,1278,1189,1079,738,752,1018,1233,770,964,1243,1301,1137,1003,1040,1127,1181,1050,930,1279,1341,953,1337,1345,1038,641,643,619,1387,1169,1020,1020,1022,1172,1195,1163,671,751,652,838,1172,779,505,777,941,600,629,563,779,1150,1214,1170,1002,1129,1217,1182,1323,650,626,651,1296,1211,1111,1120,882,1211,1223,1226,436,1100,1109,581,1368,1195,1259,925,1017,1175,1251,1133,1129,1029,1026,1232,779,921,1022,947,1028,1131,1091,952,1018,1242,1025,1156,992,1111,1110,1310,925,1077,1213,963,1041,1080,1363,975,1070,1014,1085,1042,799,808,1175,1031,1187,1406,1311,1357,1146,925,1308,1400,1183,1062,1405,1232,1027,971,1204,1130,1049,960,565,1133,1296,1150,1016,517,1227,1105,635,1295,1059,1084,1306,748,801,1174,890,534,508,1018,913,1140,1178,1060,1098,805,1169,1184,1275,923,1207,1267,1372,1198,1401,677,545,918,1156,973,1272,1249,1024,1225,1276,727,958,1361,1247,1289,1051,1078,1363,591,1200,1127,1209,922,1165,944,1182,1245,731,641,635,618,614,618,846,1347,1170,1155,1102,1021,1018,1023,1014,1138,1150,1145,1104,1120,1210,929,498,713,768,659,647,956,687,700,776,578,594,591,513,554,552,541,497,508,531,748,642,502,514,509,486,498,694,698,602,930,652,713,681,753,694,693,639,637,707,1069,1321,1171,1043,1156,1201,933,1080,1147,1093,1185,1024,1298,1048,1326,1110,906,980,951,867,826,903,765,1016,1255,1150,1164,1182,1230,1156,1170,1096,1057,911,1301,520,655,1308,982,1202,1097,1243,1228,910,1114,1085,1149,933,966,1161,945,973,1203,548,826,1133,1250,1132,1243,903,1199,961,1075,1271,1080,1191,1091,1052,1288,1123,1167,1067,1250,1326,1021,1213,1173,1047,729,466,1229,1019,1107,1002,1191,1108,1146,712,430,436,431,893,1285,962,1065,959,955,1176,944,1480,743,1284,1018,1374,1453,1360,1384,1197,661,1092,1368,1326,1224,1359,1158,1093,866,1075,790,1007,1044,886,826,541,383,1066,1359,1188,1068,1090,859,576,396,338,717,719,623,1047,1054,1346,1253,1417,1232,938,25,789,1191,1048,1350,1199,1034,1378,1349,654,609,1397,972,1043,900,1317,1213,1172,1302,851,1137,1405,1031,850,516,945,1061,1501,694,529,926,1142,1328,1263,1391,1289,1148,847,1201,945,1104,1279,1145],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_cytoolz.data")}Module["addRunDependency"]("datafile_cytoolz.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/cytoolz/itertoolz.pyx",start:0,end:51169,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/_version.py",start:51169,end:51221,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/recipes.pyx",start:51221,end:52821,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/dicttoolz.pyx",start:52821,end:68365,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/utils.pxd",start:68365,end:68398,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/__init__.py",start:68398,end:68869,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/itertoolz.pxd",start:68869,end:73564,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/dicttoolz.pxd",start:73564,end:74932,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/utils.pyx",start:74932,end:76285,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/__init__.pxd",start:76285,end:77035,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/_signatures.py",start:77035,end:81391,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/functoolz.pyx",start:81391,end:106426,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/compatibility.py",start:106426,end:107409,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/functoolz.so",start:107409,end:347407,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/cpython.pxd",start:347407,end:347904,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/dicttoolz.so",start:347904,end:458899,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/recipes.pxd",start:458899,end:458999,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/itertoolz.so",start:458999,end:885511,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/utils.so",start:885511,end:918761,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/recipes.so",start:918761,end:959681,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/functoolz.pxd",start:959681,end:960933,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/curried/__init__.py",start:960933,end:963817,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/curried/exceptions.py",start:963817,end:964167,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz/curried/operator.py",start:964167,end:964669,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/top_level.txt",start:964669,end:964677,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/not-zip-safe",start:964677,end:964678,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/requires.txt",start:964678,end:964708,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/SOURCES.txt",start:964708,end:966073,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/dependency_links.txt",start:966073,end:966074,audio:0},{filename:"/lib/python3.9/site-packages/cytoolz-0.11.0-py3.9.egg-info/PKG-INFO",start:966074,end:970286,audio:0}],remote_package_size:484295,package_uuid:"4016cf87-0df1-4d94-8a91-c6ba869a5fe6"})})();