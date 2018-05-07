(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/view/viewcoin.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5b9eaUdC1VD+7MCjCfyXkwz', 'viewcoin', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=viewcoin.js.map
        