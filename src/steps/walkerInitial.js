"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkerInitial = void 0;
var inquirer_1 = require("inquirer");
var walkerDefaultPort_js_1 = require("./walkerDefaultPort.js");
var walkerPartnerDomain_js_1 = require("./walkerPartnerDomain.js");
var walkerInitial = function () {
    var enviroments = {
        "Local": walkerDefaultPort_js_1.walkerDefaultPort,
        "Produção": walkerPartnerDomain_js_1.walkerPartnerDomain
    };
    inquirer_1.default.
        prompt([
        {
            type: "list",
            name: "Environment",
            message: "Em qual ambiente o usuário será criado?",
            choices: ["Local", "Produção"]
        }
    ])
        .then(function (choice) {
        enviroments[choice.Environment]();
    });
};
exports.walkerInitial = walkerInitial;
