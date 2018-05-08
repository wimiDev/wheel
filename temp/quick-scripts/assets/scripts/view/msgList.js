(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/view/msgList.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8e13fxbfwVOvoPxm0s0sffN', 'msgList', __filename);
// scripts/view/msgList.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        tilpList: null,
        hisList: null
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.tilpList = new Array();
        this.hisList = new Array();
        cc.loader.load(cc.url.raw("resources/data/msgList.json"), function (err, res) {
            if (err) {
                cc.log("read file error");
                cc.log(err);
            } else {
                cc.log("read sussed");
                this.tilpList = res.tilpList;
                this.hisList = res.hisList;
            }
        });
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
        //# sourceMappingURL=msgList.js.map
        