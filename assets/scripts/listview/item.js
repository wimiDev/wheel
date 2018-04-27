

cc.Class({
    extends: cc.Component,

    properties: {
        tilp:{
            default: null,
            type : cc.Node,
        },
        num:{
            default: null,
            type : cc.Node,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setTilp (str) {
        this.tilp.string = str
    },

    setNum (str) {
        this.num.string = str
    },
    // update (dt) {},
});
