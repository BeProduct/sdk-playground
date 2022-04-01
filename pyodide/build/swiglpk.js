var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="swiglpk.data";var REMOTE_PACKAGE_BASE="swiglpk.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","swiglpk",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:853172,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1429,2339,3616,4977,6353,7496,8389,9369,10693,12085,13365,14622,15866,17189,18201,19304,20349,21443,22542,23444,24081,24715,25329,25947,26560,27175,27790,28404,29015,29633,30251,30870,31606,32433,33295,34157,34939,35870,36941,38029,39064,40140,41217,42278,43382,44403,45432,46483,47456,48469,49460,50468,51973,53467,54776,56076,57370,58670,59964,61233,62429,63532,64914,66292,66659,67047,68309,69176,69833,70590,71553,72175,72815,73353,74228,75128,75762,76764,77596,78199,78744,79710,80834,81701,82876,83907,84881,85760,86539,87364,87950,88451,89272,90081,90727,91212,91850,92484,93403,94218,94812,95352,95987,96750,97697,98348,98895,100092,100849,101701,102707,103538,104760,105983,107090,107867,108688,109644,110439,111047,111709,112847,113630,114668,115585,116547,117456,118359,119259,120106,120983,122047,123465,124650,125703,126743,127851,128940,130223,131408,132587,133745,134890,135824,136816,138075,139090,139786,140637,141385,142162,143370,144283,145505,146668,147700,148849,149898,150912,152028,152874,153715,154825,155727,156836,157814,158680,159735,160963,161993,162961,163920,164618,165651,166453,167585,168631,169717,170671,171575,172254,172969,173711,174808,176007,177107,178155,179252,180597,181717,182720,183835,184799,185888,186977,188254,189569,190522,190994,192088,193153,194421,195562,196133,196913,197819,198607,199485,200392,201311,202167,203221,203931,204886,205578,206211,207161,207859,208735,209948,211016,212310,213428,214415,215022,215865,216377,217367,218036,218831,219323,220282,220856,221659,222605,223246,223678,224415,224861,225561,226277,227017,227513,228258,229121,229653,230334,230809,231442,232466,232874,233431,234134,234903,235582,236130,236756,237404,238126,238640,239125,239793,240324,240900,241409,242201,242796,243190,243763,244532,245007,245431,246610,247834,248977,249928,251078,252430,253665,254838,255823,256975,258054,259251,260489,261693,262824,263871,265045,266109,267301,268508,269675,270864,272113,273121,274159,275354,276395,277488,278272,279238,280458,281161,282080,283349,284469,285583,286734,287932,288831,289879,290929,292060,293165,294357,295619,296807,297901,298961,299889,300554,301632,302641,303808,304818,306114,307458,308612,309752,310370,310978,312242,313505,314100,315214,316393,317521,318757,319469,320108,320498,321682,322953,323906,324674,325877,326459,326968,327867,328955,329738,330636,331533,332517,333224,334186,335174,336334,336861,337606,338525,339721,340713,342053,343085,344319,345474,346639,347862,349085,350393,351726,352943,354122,355309,356362,357371,358273,359072,360371,361554,362854,363817,364886,365965,367134,368269,369539,370861,372159,373401,374508,375640,376673,377698,378768,379697,380899,382133,383335,384399,385503,386710,387809,388900,389901,390940,392223,393348,394330,395436,396586,397693,398726,399723,400767,402e3,403059,403918,405030,406179,407283,408323,408972,409854,410886,411952,412919,414176,415145,416373,417282,418573,419999,421120,422309,423430,424557,425847,426905,428245,429355,430380,431550,432594,433498,434442,435264,436405,437532,438839,440044,441182,442395,443489,444748,445990,447394,448537,449925,451062,452195,453218,454437,455580,456917,457925,459269,460619,461651,462841,464093,465377,466560,467784,468842,470103,471404,472472,473609,474774,475904,477130,478170,479234,480097,481183,482488,483759,484753,485493,486529,487340,488275,489137,490027,490972,491959,492862,493864,494781,495760,496722,497445,498349,499132,500357,501610,502451,503613,504941,505762,507004,507976,508940,509749,510770,511696,512878,513714,514605,515869,516950,518197,519092,520220,521402,522573,523734,524900,526047,527221,528396,529450,530596,531799,532852,534235,535509,536860,538116,539270,540212,541151,542293,543542,544683,545941,546654,547722,548956,550207,551483,552394,553370,554214,555374,556492,557649,558890,560070,561108,562416,563521,564619,565537,566573,567808,568916,569738,570981,572158,573388,574283,575514,576519,577145,577860,578617,579289,580149,580929,581838,582826,583096,583891,584453,585409,586590,587658,588738,589467,590188,590965,591608,592782,593885,595024,595980,596963,598130,598833,600096,600702,601738,602827,603921,604989,606055,607087,608184,608943,609803,610916,612155,613357,614636,615635,616714,617997,619154,620248,621589,622878,624131,625269,626439,627680,628798,629746,630828,631586,632682,633599,634819,636010,637355,638792,640093,641423,642796,644071,645031,646152,647072,648376,649506,650427,651656,652930,654244,655419,656701,657679,658953,660130,661393,662544,663783,664986,666009,667264,668463,669539,670781,672086,673296,674544,675758,676906,677902,679097,680134,681262,682447,683660,684533,685672,686436,687561,688383,689617,690455,691366,692486,693712,694479,695617,696761,698111,699311,700715,701461,702493,703795,705109,706145,707206,708350,709204,710297,711318,712416,713581,714747,716095,717322,718159,719335,720250,720975,722211,723088,724027,725180,726045,726885,727783,728742,729656,730471,731313,732149,732831,733483,734133,735137,736086,736888,738017,739034,739965,740439,741034,741505,742078,742587,743060,743545,744152,744737,745184,745677,746199,746745,747285,747808,748322,748777,749336,749873,750453,751155,751798,752291,752793,753336,753896,754361,754834,755321,755900,757078,758190,759629,760731,761744,762677,764035,765143,765845,766610,767521,768323,769139,770274,771320,772222,773050,773991,775180,776128,777399,778689,779594,780677,781735,782512,783447,784833,786190,787519,788946,790179,791582,792907,794351,795749,796959,798084,799090,800130,801259,802368,803572,804782,805678,806911,808056,809392,810683,811917,813834,815882,817930,819978,821595,823124,824603,825743,826780,827818,828855,829831,830338,830363,830388,831056,832112,832848,833390,834125,834634,835440,836186,836684,837223,837758,838574,839488,840209,840981,841637,842265,842881,843513,844154,844795,845423,846083,846718,847452,848069,848806,849548,850302,850927,851515,852363],sizes:[1429,910,1277,1361,1376,1143,893,980,1324,1392,1280,1257,1244,1323,1012,1103,1045,1094,1099,902,637,634,614,618,613,615,615,614,611,618,618,619,736,827,862,862,782,931,1071,1088,1035,1076,1077,1061,1104,1021,1029,1051,973,1013,991,1008,1505,1494,1309,1300,1294,1300,1294,1269,1196,1103,1382,1378,367,388,1262,867,657,757,963,622,640,538,875,900,634,1002,832,603,545,966,1124,867,1175,1031,974,879,779,825,586,501,821,809,646,485,638,634,919,815,594,540,635,763,947,651,547,1197,757,852,1006,831,1222,1223,1107,777,821,956,795,608,662,1138,783,1038,917,962,909,903,900,847,877,1064,1418,1185,1053,1040,1108,1089,1283,1185,1179,1158,1145,934,992,1259,1015,696,851,748,777,1208,913,1222,1163,1032,1149,1049,1014,1116,846,841,1110,902,1109,978,866,1055,1228,1030,968,959,698,1033,802,1132,1046,1086,954,904,679,715,742,1097,1199,1100,1048,1097,1345,1120,1003,1115,964,1089,1089,1277,1315,953,472,1094,1065,1268,1141,571,780,906,788,878,907,919,856,1054,710,955,692,633,950,698,876,1213,1068,1294,1118,987,607,843,512,990,669,795,492,959,574,803,946,641,432,737,446,700,716,740,496,745,863,532,681,475,633,1024,408,557,703,769,679,548,626,648,722,514,485,668,531,576,509,792,595,394,573,769,475,424,1179,1224,1143,951,1150,1352,1235,1173,985,1152,1079,1197,1238,1204,1131,1047,1174,1064,1192,1207,1167,1189,1249,1008,1038,1195,1041,1093,784,966,1220,703,919,1269,1120,1114,1151,1198,899,1048,1050,1131,1105,1192,1262,1188,1094,1060,928,665,1078,1009,1167,1010,1296,1344,1154,1140,618,608,1264,1263,595,1114,1179,1128,1236,712,639,390,1184,1271,953,768,1203,582,509,899,1088,783,898,897,984,707,962,988,1160,527,745,919,1196,992,1340,1032,1234,1155,1165,1223,1223,1308,1333,1217,1179,1187,1053,1009,902,799,1299,1183,1300,963,1069,1079,1169,1135,1270,1322,1298,1242,1107,1132,1033,1025,1070,929,1202,1234,1202,1064,1104,1207,1099,1091,1001,1039,1283,1125,982,1106,1150,1107,1033,997,1044,1233,1059,859,1112,1149,1104,1040,649,882,1032,1066,967,1257,969,1228,909,1291,1426,1121,1189,1121,1127,1290,1058,1340,1110,1025,1170,1044,904,944,822,1141,1127,1307,1205,1138,1213,1094,1259,1242,1404,1143,1388,1137,1133,1023,1219,1143,1337,1008,1344,1350,1032,1190,1252,1284,1183,1224,1058,1261,1301,1068,1137,1165,1130,1226,1040,1064,863,1086,1305,1271,994,740,1036,811,935,862,890,945,987,903,1002,917,979,962,723,904,783,1225,1253,841,1162,1328,821,1242,972,964,809,1021,926,1182,836,891,1264,1081,1247,895,1128,1182,1171,1161,1166,1147,1174,1175,1054,1146,1203,1053,1383,1274,1351,1256,1154,942,939,1142,1249,1141,1258,713,1068,1234,1251,1276,911,976,844,1160,1118,1157,1241,1180,1038,1308,1105,1098,918,1036,1235,1108,822,1243,1177,1230,895,1231,1005,626,715,757,672,860,780,909,988,270,795,562,956,1181,1068,1080,729,721,777,643,1174,1103,1139,956,983,1167,703,1263,606,1036,1089,1094,1068,1066,1032,1097,759,860,1113,1239,1202,1279,999,1079,1283,1157,1094,1341,1289,1253,1138,1170,1241,1118,948,1082,758,1096,917,1220,1191,1345,1437,1301,1330,1373,1275,960,1121,920,1304,1130,921,1229,1274,1314,1175,1282,978,1274,1177,1263,1151,1239,1203,1023,1255,1199,1076,1242,1305,1210,1248,1214,1148,996,1195,1037,1128,1185,1213,873,1139,764,1125,822,1234,838,911,1120,1226,767,1138,1144,1350,1200,1404,746,1032,1302,1314,1036,1061,1144,854,1093,1021,1098,1165,1166,1348,1227,837,1176,915,725,1236,877,939,1153,865,840,898,959,914,815,842,836,682,652,650,1004,949,802,1129,1017,931,474,595,471,573,509,473,485,607,585,447,493,522,546,540,523,514,455,559,537,580,702,643,493,502,543,560,465,473,487,579,1178,1112,1439,1102,1013,933,1358,1108,702,765,911,802,816,1135,1046,902,828,941,1189,948,1271,1290,905,1083,1058,777,935,1386,1357,1329,1427,1233,1403,1325,1444,1398,1210,1125,1006,1040,1129,1109,1204,1210,896,1233,1145,1336,1291,1234,1917,2048,2048,2048,1617,1529,1479,1140,1037,1038,1037,976,507,25,25,668,1056,736,542,735,509,806,746,498,539,535,816,914,721,772,656,628,616,632,641,641,628,660,635,734,617,737,742,754,625,588,848,809],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_swiglpk.data")}Module["addRunDependency"]("datafile_swiglpk.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/swiglpk-4.65.1-py3.9.egg-info",start:0,end:6885,audio:0},{filename:"/lib/python3.9/site-packages/swiglpk/_swiglpk.so",start:6885,end:1696664,audio:0},{filename:"/lib/python3.9/site-packages/swiglpk/__init__.py",start:1696664,end:1696686,audio:0},{filename:"/lib/python3.9/site-packages/swiglpk/swiglpk.py",start:1696686,end:1763221,audio:0}],remote_package_size:857268,package_uuid:"41dbf2eb-bc2c-4879-8525-b658d45b5c6b"})})();