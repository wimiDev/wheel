

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
        this.tilp.string = str
    },

    setNum (str) {
        this.num.string = str
    },
    updateItem (tilp, num, id){
        cc.log("--------------updateItem------------")
        this.id = 0;
        this.setTilp("哈哈哈哈");
        this.setNum("0999999")
    },
    // update (dt) {},
});
