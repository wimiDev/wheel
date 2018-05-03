"use strict";
cc._RF.push(module, '275cd01N0BC9bSZGswCti8P', 'broadcast');
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

        pos1: cc.Vec2(0, 0),
        pos2: cc.Vec2(0, -58)
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.msgQue = new Array();
        this.index = 1;
        this.bcCp1 = this.info1.getComponent("cc.Label");
        this.bcCp1.string = "吃饱就可以睡觉了";
        this.bcCp2 = this.info2.getComponent("cc.Label");
        this.bcCp2.string = "";
        this.schedule(this.sch1s, 1);
    },
    baradcastMsg: function baradcastMsg(str) {
        this.msgQue.push(str);
    },
    sch1s: function sch1s() {
        if (this.length <= 0) {
            return;
        }
        var str = this.msgQue.pop();
        this.showMsg(str);
    },
    showMsg: function showMsg(str) {
        if (this.index == 1) {
            this.info1.runAction(cc.moveBy(0.2, cc.Vec2(0, 70)));
            this.info2.position = pos2;
            this.info2.runAction(cc.moveBy(0.2, cc.Vec2(0, 58)));
            this.index = 2;
        } else {
            this.info2.runAction(cc.moveBy(0.2, cc.Vec2(0, 70)));
            this.info1.position = pos2;
            this.info1.runAction(cc.moveBy(0.2, cc.Vec2(0, 58)));
            this.index = 1;
        }
    }
    // update (dt) {},

});

cc._RF.pop();