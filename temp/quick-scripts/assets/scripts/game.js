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

        curRotate: 0,
        setp: 51.4,
        curSpeed: 0,
        timer1: 0,
        mysScheduler: null,
        listScript: null
    },

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
        cc.log("---------- circlerun -----------");
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
    cirecleStopToSetp: function cirecleStopToSetp(setp) {
        var rotate = (setp - 1) * this.setp % 360;
        var are = 51;
        var curRotate = -this.circle.rotation % 360;
        // cc.log("curRotate = %s, rotate = %s",curRotate, rotate)
        if (Math.abs(curRotate - rotate) <= 3) {
            var cirecleNode = this.circle;
            cirecleNode.stopAllActions();
            this.resetTimer1();
            cc.log(this.listScript);
            this.listScript.addItem();
            cc.log("-------- stoped all -------");
        }
    },
    updateRotate: function updateRotate(target, data) {
        this.curRotate = (this.curRotate + this.setp) % 360;
        // cc.log("curRotate = %s, setp = %s", this.curRotate, this.setp)
    },
    startRandom: function startRandom() {
        this._youGetNum = Math.floor(cc.rand() % 6 + 1);
        cc.log("you get num = %d", this._youGetNum);
        this.startTimer1();
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {
        cc.log("--------- game start -----------");
        this.myScheduler = cc.director.getScheduler();
        this.startRandom();
        cc.log("-------------- getrecarbg -------------");
        cc.log(this.node.getChildByName("main"));
        // this.listScript = this.node.getChildByName("recarbg")
    },
    start: function start() {},
    startTimer1: function startTimer1(time) {
        this.timer1 = time || 0;
        this.myScheduler.schedule(this.sch1s, this, 1);
        cc.log("----------- startTimer1 ----------");
    },
    resetTimer1: function resetTimer1(time) {
        this.timer1 = time || 0;
        this.myScheduler.unschedule(this.sch1s, this);
        cc.log("-------- resetTimer1 ---------");
    },
    sch1s: function sch1s(dt) {
        this.timer1 = this.timer1 + 1;
        cc.log("timer1 time = %s,speed = %d", this.timer1, this.speed);
        if (this.timer1 >= 4) {
            cc.log("--------speed -- --------");
            this.circleRun(this.speed - this.timer1 * 10);
        } else {
            cc.log("--------speed ++ --------");
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
        