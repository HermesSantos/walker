"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walkerAtt = void 0;
var node_child_process_1 = require("node:child_process");
var walkerInitial_1 = require("./walkerInitial");
var updateWalker_js_1 = require("./updateWalker.js");
var walkerAtt = function () {
    (0, node_child_process_1.exec)("git pull", function (err, output) {
        if (err) {
            console.log("Error: ", err);
        }
        else {
            if (output === "Already up to date.\n") {
                (0, walkerInitial_1.walkerInitial)();
            }
            else {
                (0, updateWalker_js_1.updateWalker)();
            }
        }
    });
};
exports.walkerAtt = walkerAtt;
