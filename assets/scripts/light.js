
cc.Class({
    extends: cc.Component,

    properties: {
        id:-1,
        state:"off",
        lightOn : "resources/texture/light1.png", 
        lightOff : "resources/texture/light2.png",
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.lightOn = "resources/texture/light1.png";
         this.lightOff = "resources/texture/light2.png";
     },

    start () {
        
    },

    setId (_id)
    {
        this.id = _id;
    },
    
    on () {
        var spLight = this.getComponent(cc.Sprite);
        // cc.log("light[%s] on.",this.id)
        spLight.spriteFrame = new cc.SpriteFrame(cc.url.raw(this.lightOn));
    },

    off () {
        // cc.log("light[%s] off.",this.id)
        var spLight = this.getComponent(cc.Sprite);
        spLight.spriteFrame = new cc.SpriteFrame(cc.url.raw(this.lightOff));
    },

    flash (){
        cc.log("light[%s] flush.",this.id)
    },

    star () {
        cc.log("light[%s] star.",this.id)
    },
    // update (dt) {},
});
