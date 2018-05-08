"use strict";
cc._RF.push(module, '8e13fxbfwVOvoPxm0s0sffN', 'msgList');
// scripts/view/msgList.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        tilpList: null,
        hisList: null
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.tilpList = new Array();
        this.hisList = new Array();
        cc.loader.load(cc.url.raw("resources/data/msgList.json"), function (err, res) {
            if (err) {
                cc.log("read file error");
                cc.log(err);
            } else {
                cc.log("read sussed");
                this.tilpList = res.tilpList;
                this.hisList = res.hisList;
            }
        });
    }
}

// update (dt) {},
);

cc._RF.pop();