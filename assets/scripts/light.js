
cc.Class({
    extends: cc.Component,

    properties: {
        id:-1,
        state:"off", 
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    on () {
        cc.log("light[%s] on.",this.id)
    },
    off () {
        cc.log("light[%s] off.",this.id)
    },

    flash (){
        cc.log("light[%s] flush.",this.id)
    },

    star () {
        cc.log("light[%s] star.",this.id)
    },
    // update (dt) {},
});
