(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/lightctrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fd27a+X3XVKYLzu9yE7/fMu', 'lightctrl', __filename);
// scripts/lightctrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        rgLow: 1,
        rgHeight: 14,
        state: "dnt"
    },

    // onLoad () {},

    start: function start() {
        this.lights = new Array();
        this.init();
        this.time = 0;
    },
    init: function init() {
        var wheel = cc.find("main/wheel_bg1", this.node);
        for (var i = this.rgLow; i <= this.rgHeight; i++) {
            var name = "light_" + i;
            // cc.log("get light by name ->%s",name);
            var light = wheel.getChildByName(name);
            // cc.log("%s = %s",name,light);
            light.getComponent("light").setId(i);
            this.lights[i] = light;
        }
        this.turnAll(false);
        this.schedule(this.sch01, 0.01);
    },
    circleRun: function circleRun() {
        if (this.circleIndex > this.rgHeight || !this.circleIndex) {
            this.circleIndex = this.rgLow;
        }
        // cc.log("this.lights[%s] = %s", this.circleIndex, this.lights[this.circleIndex])
        this.lights[this.circleIndex].getComponent("light").off();
        // this.circleIndex += 1;
    },
    turnAll: function turnAll(offOrOn) {
        for (var i = this.rgLow; i <= this.rgHeight; i++) {
            if (offOrOn) {
                this.lights[i].getComponent("light").on();
                continue;
            }
            this.lights[i].getComponent("light").off();
        }
    },
    sch01: function sch01() {
        if (this.time % 100 == 0) {
            this.circleRun();
        }
        this.time += 1;
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
        //# sourceMappingURL=lightctrl.js.map
        