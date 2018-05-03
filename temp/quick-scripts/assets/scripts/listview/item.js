(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/listview/item.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3bc7ejOEJpI3p5WwmgrM6P0', 'item', __filename);
// scripts/listview/item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        tilp: {
            default: null,
            type: cc.Node
        },
        num: {
            default: null,
            type: cc.Node
        },
        id: -1
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    setTilp: function setTilp(str) {
        this.tilp.string = str;
    },
    setNum: function setNum(str) {
        this.num.string = str;
    },
    updateItem: function updateItem(tilp, num, id) {
        cc.log("--------------updateItem------------");
        this.id = 0;
        this.setTilp("哈哈哈哈");
        this.setNum("0999999");
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
        //# sourceMappingURL=item.js.map
        