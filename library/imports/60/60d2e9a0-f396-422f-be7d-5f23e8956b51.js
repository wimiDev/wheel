"use strict";
cc._RF.push(module, '60d2emg85ZCL759XyPolWtR', 'game');
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
            var item = this.createItem("哈哈哈", 250, 0);
            this.listScript.pushToList(item);
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
        this.startRandom();
        cc.log("-------------- getrecarbg -------------");
        var recarbg = cc.find("main/recarbg", this.node);
        this.listScript = recarbg.getComponent("ListViewCtrl");
        cc.log(this.listScript);
    },
    start: function start() {},
    startTimer1: function startTimer1(time) {
        this.timer1 = time || 0;
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