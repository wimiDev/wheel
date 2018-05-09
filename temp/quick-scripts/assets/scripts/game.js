(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '60d2emg85ZCL759XyPolWtR', 'game', __filename);
// scripts/game.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        circle: {
            default: null,
            type: cc.Node
        },
        itemTemplate: {
            default: null,
            type: cc.Node
        },
        broadcast: {
            default: null,
            type: cc.Node
        },
        curRotate: 0,
        setp: 51.4,
        curSpeed: 0,
        timer1: 0,
        mysScheduler: null,
        listScript: null,
        msgList: null
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {
        cc.log("--------- game start -----------");
        var recarbg = cc.find("main/recarbg", this.node);
        this.listScript = recarbg.getComponent("ListViewCtrl");
        var broadcastNode = cc.find("main/boradbg", this.node);
        this.broadcastScript = broadcastNode.getComponent("broadcast");
        this.msgList = this.getComponent("msgList");
    },
    start: function start() {},
    circleRun: function circleRun(speed) {
        if (!this.circle) {
            cc.log("circle is null");
            return;
        }
        if (speed < 0) {
            speed = 0;
        }
        if (speed == this.setp) {
            return;
        }
        // cc.log("---------- circlerun -----------")
        speed = speed || 50;
        this.speed = speed;
        var cirecleNode = this.circle;
        cirecleNode.stopAllActions();
        var rotate = cc.rotateBy(this.setp / speed, -this.setp);
        var callback = cc.callFunc(this.updateRotate, this);

        var seq = cc.sequence(rotate, callback);
        cirecleNode.runAction(cc.repeatForever(seq));
        return;
    },
    createItem: function createItem(tilp, num, id) {
        var item = cc.instantiate(this.itemTemplate);
        item.x = 0;
        item.y = 0;
        item.getComponent("item").updateItem(tilp, num, 0);
        return item;
    },
    cirecleStopToSetp: function cirecleStopToSetp(setp) {
        var rotate = (setp - 1) * this.setp % 360;
        var are = 51;
        var curRotate = -this.circle.rotation % 360;
        // cc.log("curRotate = %s, rotate = %s",curRotate, rotate)
        if (Math.abs(curRotate - rotate) <= 3) {
            var cirecleNode = this.circle;
            cirecleNode.stopAllActions();
            this.resetTimer1();
            var itemStr = this.msgList.hisList[this._youGetNum - 1 % this.msgList.hisList.length];
            var item = this.createItem(itemStr, this._youGetNum, 0);
            this.listScript.pushToList(item);
            var bIndex = this.random(0, this.msgList.tilpList.length);
            this.broadcastScript.baradcastMsg(this.msgList.tilpList[bIndex]);
            cc.log("-------- stoped all -------");
        }
    },
    updateRotate: function updateRotate(target, data) {
        this.curRotate = (this.curRotate + this.setp) % 360;
        // cc.log("curRotate = %s, setp = %s", this.curRotate, this.setp)
    },
    startRandom: function startRandom() {
        var bIndex = this.random(0, this.msgList.tilpList.length);
        this.broadcastScript.baradcastMsg(this.msgList.tilpList[bIndex]);
        this._youGetNum = this.random(1, 7);
        cc.log("you get num = %d", this._youGetNum);
        this.startTimer1();
    },
    startTimer1: function startTimer1(time) {
        this.timer1 = time || 0;
        this.unschedule(this.sch1s);
        this.schedule(this.sch1s, 1);
        cc.log("----------- startTimer1 ----------");
    },
    resetTimer1: function resetTimer1(time) {
        this.timer1 = time || 0;
        this.unschedule(this.sch1s);
        cc.log("-------- resetTimer1 ---------");
    },
    sch1s: function sch1s(dt) {
        this.timer1 = this.timer1 + 1;
        // cc.log("timer1 time = %s,speed = %d", this.timer1, this.speed);
        if (this.timer1 >= 4) {
            // cc.log("--------speed -- --------")
            this.circleRun(this.speed - this.timer1 * 10);
        } else {
            // cc.log("--------speed ++ --------")
            this.circleRun(this.timer1 * 5 * this.setp);
        }
    },
    update: function update(dt) {
        if (this.timer1 <= 0) {
            return;
        }
        if (this.timer1 >= 4) {
            if (this.speed - this.setp <= 1) {
                // cc.log("------------ will be stop ---------");
                this.cirecleStopToSetp(this._youGetNum);
            }
        }
    },
    random: function random(begin, end) {
        return Math.floor(Math.random() * (end - begin) + begin);
    }
});

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
        //# sourceMappingURL=game.js.map
        