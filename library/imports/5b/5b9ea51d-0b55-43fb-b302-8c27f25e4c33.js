"use strict";
cc._RF.push(module, '5b9eaUdC1VD+7MCjCfyXkwz', 'viewcoin');
// scripts/view/viewcoin.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        coinLab: {
            default: null,
            type: cc.Node
        },
        coinBg: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    addCoin: function addCoin(val) {},
    cutCoin: function cutCoin(val) {},
    updateCoin: function updateCoin(str) {
        coinLab.string = str;
    }
}
// update (dt) {},
);

cc._RF.pop();