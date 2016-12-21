'use strict';

exports.BattleMovedex = {
	"quickspark": {
		num: 10002,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "quickspark",
		name: "Quick Spark",
		pp: 25,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Electric",
		zMovePower: 140,
		contestType: "Cool",
	},
	"manipulatingblow": {
		num: 10003,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		defensiveCategory: "Physical",
		desc: "Deals damage to the target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def.",
		id: "manipulatingblow",
		isViable: true,
		name: "Manipulating Blow",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Fighting",
		zMovePower: 160,
		contestType: "Tough",
	},
};