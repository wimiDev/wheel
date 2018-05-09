
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    random(begin,end)
    {
        Math.floor((cc.rand() % 6) + 1);
    },
    // update (dt) {},
});
