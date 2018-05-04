"use strict";
cc._RF.push(module, '598f5LnSlRI3JnqoQcdt2mY', 'light');
// scripts/light.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        id: -1,
        state: "off"
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    on: function on() {
        cc.log("light[%s] on.", this.id);
    },
    off: function off() {
        cc.log("light[%s] off.", this.id);
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