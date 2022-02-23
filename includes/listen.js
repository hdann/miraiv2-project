module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	const _0x2df7=["\x6C\x69\x73\x74\x65\x6E","\x73\x74\x61\x72\x74\x4C\x6F\x61\x64\x45\x6E\x76\x69\x72\x6F\x6E\x6D\x65\x6E\x74","\x67\x65\x74\x54\x65\x78\x74","\x5B\x20\x44\x41\x54\x41\x42\x41\x53\x45\x20\x5D","\x67\x65\x74\x41\x6C\x6C","\x75\x73\x65\x72\x49\x44","\x6E\x61\x6D\x65","\x64\x61\x74\x61","\x74\x68\x72\x65\x61\x64\x49\x44","\x70\x75\x73\x68","\x61\x6C\x6C\x54\x68\x72\x65\x61\x64\x49\x44","\x73\x65\x74","\x74\x68\x72\x65\x61\x64\x44\x61\x74\x61","\x74\x68\x72\x65\x61\x64\x49\x6E\x66\x6F","\x62\x61\x6E\x6E\x65\x64","\x72\x65\x61\x73\x6F\x6E","","\x64\x61\x74\x65\x41\x64\x64\x65\x64","\x74\x68\x72\x65\x61\x64\x42\x61\x6E\x6E\x65\x64","\x63\x6F\x6D\x6D\x61\x6E\x64\x42\x61\x6E\x6E\x65\x64","\x6C\x65\x6E\x67\x74\x68","\x4E\x53\x46\x57","\x74\x68\x72\x65\x61\x64\x41\x6C\x6C\x6F\x77\x4E\x53\x46\x57","\x6C\x6F\x61\x64\x65\x64\x45\x6E\x76\x69\x72\x6F\x6E\x6D\x65\x6E\x74\x54\x68\x72\x65\x61\x64","\x6C\x6F\x61\x64\x65\x72","\x61\x6C\x6C\x55\x73\x65\x72\x49\x44","\x75\x73\x65\x72\x4E\x61\x6D\x65","\x75\x73\x65\x72\x42\x61\x6E\x6E\x65\x64","\x61\x6C\x6C\x43\x75\x72\x72\x65\x6E\x63\x69\x65\x73\x49\x44","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x69\x6D\x73\x69\x6D\x69\x2D\x62\x65\x74\x61\x2E\x68\x65\x72\x6F\x6B\x75\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x73\x69\x6D\x73\x69\x6D\x69\x3F\x74\x79\x70\x65\x3D\x71\x75\x65\x73\x74\x69\x6F\x6E\x26\x71\x75\x3D\x68\x69","\x5B\x20\x41\x70\x69\x20\x53\x69\x6D\x73\x69\x6D\x69\x5D","\x6C\x6F\x61\x64\x65\x64\x45\x6E\x76\x69\x72\x6F\x6E\x6D\x65\x6E\x74\x55\x73\x65\x72","\x73\x75\x63\x63\x65\x73\x73\x4C\x6F\x61\x64\x45\x6E\x76\x69\x72\x6F\x6E\x6D\x65\x6E\x74","\x66\x61\x69\x6C\x4C\x6F\x61\x64\x45\x6E\x76\x69\x72\x6F\x6E\x6D\x65\x6E\x74","\x65\x72\x72\x6F\x72"];(async function(){try{logger(global[_0x2df7[2]](_0x2df7[0],_0x2df7[1]),_0x2df7[3]);let _0xadaax1= await Threads[_0x2df7[4]](),_0xadaax2= await Users[_0x2df7[4]]([_0x2df7[5],_0x2df7[6],_0x2df7[7]]),_0xadaax3= await Currencies[_0x2df7[4]]([_0x2df7[5]]);for(const _0xadaax4 of _0xadaax1){const _0xadaax5=String(_0xadaax4[_0x2df7[8]]);global[_0x2df7[7]][_0x2df7[10]][_0x2df7[9]](_0xadaax5),global[_0x2df7[7]][_0x2df7[12]][_0x2df7[11]](_0xadaax5,_0xadaax4[_0x2df7[7]]|| {}),global[_0x2df7[7]][_0x2df7[13]][_0x2df7[11]](_0xadaax5,_0xadaax4[_0x2df7[13]]|| {});if(_0xadaax4[_0x2df7[7]]&& _0xadaax4[_0x2df7[7]][_0x2df7[14]]==  !![]){global[_0x2df7[7]][_0x2df7[18]][_0x2df7[11]](_0xadaax5,{'\x72\x65\x61\x73\x6F\x6E':_0xadaax4[_0x2df7[7]][_0x2df7[15]]|| _0x2df7[16],'\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0xadaax4[_0x2df7[7]][_0x2df7[17]]|| _0x2df7[16]})};if(_0xadaax4[_0x2df7[7]]&& _0xadaax4[_0x2df7[7]][_0x2df7[19]]&& _0xadaax4[_0x2df7[7]][_0x2df7[19]][_0x2df7[20]]!= 0){global[_0x2df7[7]][_0x2df7[19]][_0x2df7[11]](_0xadaax5,_0xadaax4[_0x2df7[7]][_0x2df7[19]])};if(_0xadaax4[_0x2df7[7]]&& _0xadaax4[_0x2df7[7]][_0x2df7[21]]){global[_0x2df7[7]][_0x2df7[22]][_0x2df7[9]](_0xadaax5)}};logger[_0x2df7[24]](global[_0x2df7[2]](_0x2df7[0],_0x2df7[23]));for(const _0xadaax6 of _0xadaax2){const _0xadaax7=String(_0xadaax6[_0x2df7[5]]);global[_0x2df7[7]][_0x2df7[25]][_0x2df7[9]](_0xadaax7);if(_0xadaax6[_0x2df7[6]]&& _0xadaax6[_0x2df7[6]][_0x2df7[20]]!= 0){global[_0x2df7[7]][_0x2df7[26]][_0x2df7[11]](_0xadaax7,_0xadaax6[_0x2df7[6]])};if(_0xadaax6[_0x2df7[7]]&& _0xadaax6[_0x2df7[7]][_0x2df7[14]]== 1){global[_0x2df7[7]][_0x2df7[27]][_0x2df7[11]](_0xadaax7,{'\x72\x65\x61\x73\x6F\x6E':_0xadaax6[_0x2df7[7]][_0x2df7[15]]|| _0x2df7[16],'\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0xadaax6[_0x2df7[7]][_0x2df7[17]]|| _0x2df7[16]})};if(_0xadaax6[_0x2df7[7]]&& _0xadaax6[_0x2df7[7]][_0x2df7[19]]&& _0xadaax6[_0x2df7[7]][_0x2df7[19]][_0x2df7[20]]!= 0){global[_0x2df7[7]][_0x2df7[19]][_0x2df7[11]](_0xadaax7,_0xadaax6[_0x2df7[7]][_0x2df7[19]])}};for(const _0xadaax8 of _0xadaax3){global[_0x2df7[7]][_0x2df7[28]][_0x2df7[9]](String(_0xadaax8[_0x2df7[5]]))};logger(_0x2df7[29],_0x2df7[30]);logger[_0x2df7[24]](global[_0x2df7[2]](_0x2df7[0],_0x2df7[31])),logger(global[_0x2df7[2]](_0x2df7[0],_0x2df7[32]),_0x2df7[3])}catch(error){return logger[_0x2df7[24]](global[_0x2df7[2]](_0x2df7[0],_0x2df7[33],error),_0x2df7[34])}}())
	logger(`${api.getCurrentUserID()} - [ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "This bot was made by CatalizCS and SpermLord" : global.config.BOTNAME}`, "[ BOT INFO ]");
	
	///////////////////////////////////////////////
	//========= Require all handle need =========//
	//////////////////////////////////////////////

	const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
	const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
	const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });
	const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
	const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
	const handleCreateDatabase = require("./handle/handleCreateDatabase")({  api, Threads, Users, Currencies, models });

	logger.loader(`====== ${Date.now() - global.client.timeStart}ms ======`);

	//////////////////////////////////////////////////
	//========= Send event to handle need =========//
	/////////////////////////////////////////////////
	
	return (event) => {
		switch (event.type) {
			case "message":
			case "message_reply":
			case "message_unsend":
				handleCreateDatabase({ event });
				handleCommand({ event });
				handleReply({ event });
				handleCommandEvent({ event });

				break;
			case "event":
				handleEvent({ event });
				break;
			case "message_reaction":
				handleReaction({ event });
				break;
			default:
				break;
		}
	};
};

//THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯