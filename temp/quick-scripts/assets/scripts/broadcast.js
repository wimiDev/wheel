(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/broadcast.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '275cd01N0BC9bSZGswCti8P', 'broadcast', __filename);
// scripts/broadcast.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        info1: {
            default: null,
            type: cc.Node
        },
        info2: {
            default: null,
            type: cc.Node
        },
        tilp: {
            default: null,
            type: cc.Node
        },
        windmil: {
            default: null,
            type: cc.Node
        },

        msgQue: null,

        pos1: cc.p(0, 0),
        pos2: cc.p(0, -58)
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.msgQue = new Array();
        this.index = 1;
        this.bcCp1 = this.info1.getComponent(cc.Label);
        this.bcCp1.string = "吃饱就可以睡觉了";
        this.bcCp2 = this.info2.getComponent(cc.Label);
        this.bcCp2.string = "";
        this.schedule(this.sch1s, 1);
        this.windmilRun(true);
        cc.log("broadcast start");
    },
    baradcastMsg: function baradcastMsg(str) {
        cc.log("push msg:%s to que", str);
        this.msgQue.push(str);
    },
    sch1s: function sch1s() {
        // cc.log("broadcast que len >>>> %s",this.msgQue.length)
        // cc.log("info2.x >>> %s,info2.y >>> %s",this.info2.position.x,this.info2.position.y)
        if (this.msgQue.length <= 0) {
            return;
        }
        cc.log("broadcast update~");
        var str = this.msgQue.pop();
        this.showMsg(str);
    },
    showMsg: function showMsg(str) {
        cc.log("broadcast showMsg >>>>>> %s", str);
        this.tilpSwing(true);
        if (this.index == 1) {
            this.info1.runAction(cc.moveBy(0.2, cc.p(0, 70)));
            this.info2.position = this.pos2;
            this.info2.getComponent(cc.Label).string = str;
            this.info2.runAction(cc.moveBy(0.2, cc.p(0, 58)));
            this.index = 2;
        } else {
            this.info2.runAction(cc.moveBy(0.2, cc.p(0, 70)));
            this.info1.getComponent(cc.Label).string = str;
            this.info1.position = this.pos2;
            this.info1.runAction(cc.moveBy(0.2, cc.p(0, 58)));
            this.index = 1;
        }
    },
    tilpSwing: function tilpSwing(enable) {
        if (!enable) {
            this.tilp.stopAllActions();
            return;
        }
        var swingLeft = cc.rotateTo(0.1, -5);
        var swingRight = cc.rotateTo(0.1, 5);
        var swing = cc.repeat(cc.sequence(swingLeft, swingRight), 5);
        this.tilp.runAction(swing);
    },
    windmilRun: function windmilRun(enable) {
        if (!enable) {
            this.windmil.stopAllActions();
            return;
        }
        var roateAct = cc.repeatForever(cc.rotateBy(5, 360));
        this.windmil.runAction(roateAct);
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
        //# sourceMappingURL=broadcast.js.map
        