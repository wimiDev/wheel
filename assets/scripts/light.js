
cc.Class({
    extends: cc.Component,

    properties: {
        id:-1,
        state:"off", 
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.lightOn = cc.url.raw("resources/texture/light1.png");
        this.lightOff = cc.url.raw("resources/texture/light2.png");
        
    },

    setId (_id)
    {
        this.id = _id;
    },
    
    on () {
        cc.log("light[%s] on.",this.id)
        var spLight = this.getComponent(cc.Sprite);
        spLight.spriteFrame.setTexture(this.lightOn);
    },

    off () {
        cc.log("light[%s] off.",this.id)
        var spLight = this.getComponent(cc.Sprite);
        spLight.spriteFrame.setTexture(this.lightOff);
    },

    flash (){
        cc.log("light[%s] flush.",this.id)
    },

    star () {
        cc.log("light[%s] star.",this.id)
    },
    // update (dt) {},
});
