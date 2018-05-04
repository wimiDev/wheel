(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/lightctrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fd27a+X3XVKYLzu9yE7/fMu', 'lightctrl', __filename);
// scripts/lightctrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        rgLow: 1,
        rgHeight: 14
    },

    // onLoad () {},

    start: function start() {
        this.lights = new Array();
    },
    init: function init() {}
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
        //# sourceMappingURL=lightctrl.js.map
        