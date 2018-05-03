"use strict";
cc._RF.push(module, '3bc7ejOEJpI3p5WwmgrM6P0', 'item');
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
        this.tilp.getComponent(cc.Label).string = str;
    },
    setNum: function setNum(str) {
        this.num.getComponent(cc.Label).string = str;
    },
    updateItem: function updateItem(tilp, num, id) {
        cc.log("--------------updateItem------------");
        this.id = 0;
        this.setTilp(tilp);
        this.setNum(num);
    }
}
// update (dt) {},
);

cc._RF.pop();