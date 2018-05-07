
cc.Class({
    extends: cc.Component,

    properties: {
        coinLab:{
            default: null,
            type: cc.Node,
        },
        coinBg:{
            default:null,
            type: cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    addCoin (val)
    {

    },

    cutCoin (val)
    {

    },

    updateCoin (str)
    {
        coinLab.string = str;
    },
    // update (dt) {},
});
