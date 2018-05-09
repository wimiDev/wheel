"use strict";
cc._RF.push(module, '513bdBusudFgraUBl41AUkS', 'mathtool');
// scripts/tool/mathtool.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    random: function random(begin, end) {
        Math.floor(cc.rand() % 6 + 1);
    }
}
// update (dt) {},
);

cc._RF.pop();