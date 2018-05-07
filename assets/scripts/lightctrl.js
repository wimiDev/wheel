
cc.Class({
    extends: cc.Component,

    properties: {
        rgLow:  1,
        rgHeight: 14,
        state: "dnt",
    },

    // onLoad () {},

    start () {
        this.lights = new Array();
        this.init();
        this.time = 0;
    },
    
    init() {
        var wheel = cc.find("main/wheel_bg1",this.node); 
        for(var i = this.rgLow; i <= this.rgHeight; i++)
        {
            var name = "light_" + i;
            // cc.log("get light by name ->%s",name);
            var light = wheel.getChildByName(name);
            // cc.log("%s = %s",name,light);
            light.getComponent("light").setId(i)
            this.lights[i] = light;
        }
        this.turnAll(false);
        this.schedule(this.sch01,0.01);
        this.lights[1].getComponent("light").on();
        this.lights[2].getComponent("light").on();
        this.lights[3].getComponent("light").on();
    },

    circleRun() {
        if(this.circleIndex > this.rgHeight || !this.circleIndex)
        {   
            this.turnAll(false);
            this.circleIndex = this.rgLow;
        }
        // cc.log("this.lights[%s] = %s", this.circleIndex, this.lights[this.circleIndex])
        this.lights[this.circleIndex].getComponent("light").on();
        this.circleIndex += 1;

    },

    turnAll (offOrOn) {
        for(var i = this.rgLow; i <= this.rgHeight; i++)
        {
            if(offOrOn)
            {
                this.lights[i].getComponent("light").on();
                continue;
            }
            this.lights[i].getComponent("light").off();
        }
    },

    sch01 () {
        if(this.time % 20 == 0)
        {
            this.circleRun();
        }
        this.time += 1;
    },

    // update (dt) {},
});
