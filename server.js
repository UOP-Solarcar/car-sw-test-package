"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var express = require("express");
var cors = require("cors");
var app = express();

var corsOptions = {
	origin: "*",
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

var clamp = function (num, min, max) {
	return Math.min(Math.max(num, min), max);
};

var data_pak = {
	data: {
		time: new Date().toLocaleTimeString(),
		delta: [
			{
				category: "battery",
				label: "lv",
				value: 100,
			},
			{
				category: "battery",
				label: "charge rate",
				value: 5,
			},
			{
				category: "core",
				label: "motor_speed",
				value: 20,
			},
			{
				category: "core",
				label: "motor_temp",
				value: 40,
			},
			{
				category: "core",
				label: "brake_health",
				value: 100,
			},
			{
				category: "core",
				label: "brake_temp",
				value: 50,
			},
			{
				category: "core",
				label: "tire_pressure",
				value: 80,
			},
			{
				category: "safety",
				label: "cabin_temp",
				value: 30,
			},
			{
				category: "safety",
				label: "cabin_roll_pressure",
				value: 3,
			},
		],
	},
};
function GenerateData() {
	return {
		data: {
			time: new Date().toLocaleTimeString(),
			delta: [
				{
					category: "battery",
					label: "lv",
					value: clamp(
						data_pak.data.delta[0].value +
							(Math.random() * 20 - 10),
						0,
						100
					),
				},
				{
					category: "battery",
					label: "charge rate",
					value: clamp(
						data_pak.data.delta[1].value + (Math.random() - 0.5),
						0,
						8
					),
				},
				{
					category: "core",
					label: "motor_speed",
					value: clamp(
						data_pak.data.delta[2].value + (Math.random() * 10 - 5),
						0,
						120
					),
				},
				{
					category: "core",
					label: "motor_temp",
					value: clamp(
						data_pak.data.delta[3].value +
							(Math.random() * 20 - 10),
						-10,
						100
					),
				},
				{
					category: "core",
					label: "brake_health",
					value: clamp(
						data_pak.data.delta[4].value +
							(Math.random() * 20 - 10),
						0,
						100
					),
				},
				{
					category: "core",
					label: "brake_temp",
					value: clamp(
						data_pak.data.delta[5].value +
							(Math.random() * 20 - 10),
						-10,
						100
					),
				},
				{
					category: "core",
					label: "tire_pressure",
					value: clamp(
						data_pak.data.delta[6].value +
							(Math.random() * 20 - 10),
						0,
						120
					),
				},
				{
					category: "safety",
					label: "cabin_temp",
					value: clamp(
						data_pak.data.delta[7].value +
							(Math.random() * 20 - 10),
						-10,
						100
					),
				},
				{
					category: "safety",
					label: "cabin_roll_pressure",
					value: clamp(
						data_pak.data.delta[8].value + (Math.random() - 0.5),
						0,
						9
					),
				},
			],
		},
	};
}
app.get("/", function (req, res) {
	res.status(200).json(data_pak);
});
app.listen(3000, function () {
	console.log("Server is ready!");
	setInterval(function () {
		data_pak = GenerateData();
		console.log("Generated Data!");
	}, 2000);
});
/*
 */
