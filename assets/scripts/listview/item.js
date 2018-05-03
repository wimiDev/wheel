

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
        },
        id : -1,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setTilp (str) {
        this.tilp.getComponent(cc.Label).string = str
    },

    setNum (str) {
        this.num.getComponent(cc.Label).string = str
    },
    updateItem (tilp, num, id){
        cc.log("--------------updateItem------------")
        this.id = 0;
        this.setTilp(tilp);
        this.setNum(num)
    },
    // update (dt) {},
});
