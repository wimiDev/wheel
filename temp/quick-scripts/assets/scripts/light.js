(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/light.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '598f5LnSlRI3JnqoQcdt2mY', 'light', __filename);
// scripts/light.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        id: -1,
        state: "off",
        lightOn: "resources/texture/light1.png",
        lightOff: "resources/texture/light2.png"
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.lightOn = "resources/texture/light1.png";
        this.lightOff = "resources/texture/light2.png";
    },
    start: function start() {},
    setId: function setId(_id) {
        this.id = _id;
    },
    on: function on() {
        var spLight = this.getComponent(cc.Sprite);
        // cc.log("light[%s] on.",this.id)
        spLight.spriteFrame = new cc.SpriteFrame(cc.url.raw(this.lightOn));
    },
    off: function off() {
        // cc.log("light[%s] off.",this.id)
        var spLight = this.getComponent(cc.Sprite);
        spLight.spriteFrame = new cc.SpriteFrame(cc.url.raw(this.lightOff));
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
        