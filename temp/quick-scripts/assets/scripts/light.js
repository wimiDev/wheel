(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/light.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '598f5LnSlRI3JnqoQcdt2mY', 'light', __filename);
// scripts/light.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        id: -1,
        state: "off"
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    on: function on() {
        cc.log("light[%s] on.", this.id);
    },
    off: function off() {
        cc.log("light[%s] off.", this.id);
    },
    flash: function flash() {
        cc.log("light[%s] flush.", this.id);
    },
    star: function star() {
        cc.log("light[%s] star.", this.id);
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
        //# sourceMappingURL=light.js.map
        