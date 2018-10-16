
cc.Class({
    extends: cc.Component,

    properties: {

        circle:{
            default:null,
            type:cc.Node,
        },
        itemTemplate:{
            default:null,
            type:cc.Node, 
        },
        broadcast:{
            default:null,
            type:cc.Node,
        },
        coinLable:{
            default:null,
            type:cc.Node,
        },
        curRotate: 0,
        setp: 51.4,
        curSpeed: 0,
        timer1 : 0,
        mysScheduler : null,
        listScript : null,
        msgList : null,
        coinPay: 4,
    },

    // LIFE-CYCLE CALLBACKS:
     onLoad () {
        cc.log("--------- game start -----------");

        this.storage = this.getComponent("gameStorage");
    },
    start () {
        this.init();
    },

    test(){

    },

    init(){
        //init coin
        this.myCoin = this.storage.getMyCoin();
        this.updateCoin(this.myCoin);

        //broadCast
        var broadcastNode = cc.find("main/boradbg",this.node);
        this.broadcastScript = broadcastNode.getComponent("broadcast");

        //msgList
        var recarbg = cc.find("main/recarbg",this.node); 
        this.listScript = recarbg.getComponent("ListViewCtrl");
        this.msgList = this.getComponent("msgList");
        var hisLsFSto = this.storage.getAllHis()
        cc.log("hisLsFSto.length",hisLsFSto.length)
        for(var i = 0; i < hisLsFSto.length; ++i)
        {
            // cc.log("addNewRec.time = %s,addNewRec.item = %s",hisLsFSto[i].time, hisLsFSto[i].item)
            this.addNewRec(hisLsFSto[i].time, hisLsFSto[i].item);
        }
    },

    updateCoin (val) {
       this.coinLable.getComponent(cc.Label).string = val;
       this.myCoin = val;
       this.storage.setMyCoin(val);
    },

    addCoin(addVal)
    {
        this.myCoin += addVal;
        this.updateCoin(this.myCoin);
    },

    cutCoin(cutVal)
    {
        this.myCoin -= cutVal;
        this.updateCoin(this.myCoin);
    },

    circleRun (speed) {
       if(!this.circle){ 
        cc.log("circle is null");
        return;
        }
        if (speed < 0 ){speed = 0}
        if(speed == this.setp){return ;}
        // cc.log("---------- circlerun -----------")
        speed = speed || 50;
        this.speed = speed;
        var cirecleNode = this.circle;
        cirecleNode.stopAllActions();
        var rotate = cc.rotateBy(this.setp/speed,-this.setp);
        var callback = cc.callFunc(this.updateRotate, this);

        var seq = cc.sequence(rotate,callback);
        cirecleNode.runAction(cc.repeatForever(seq));
        return;
    },

    createItem (tilp, num, id){
        var item = cc.instantiate(this.itemTemplate)
        item.x = 0
        item.y = 0
        item.getComponent("item").updateItem(tilp,num,0)
        return item
    },

    addNewRec(tilp, num){
        var item = this.createItem(tilp,num,0);
        this.listScript.pushToList(item);
    },

    cirecleStopToSetp (setp) {
        var rotate = (setp - 1) * this.setp % 360;
        var are = 51;
        var curRotate = -this.circle.rotation % 360
        // cc.log("curRotate = %s, rotate = %s",curRotate, rotate)
        if (Math.abs(curRotate - rotate) <= 3 )
        {
            var cirecleNode = this.circle;
            cirecleNode.stopAllActions();
            this.resetTimer1();
            // var itemStr = this.msgList.hisList[this._youGetNum - 1 % this.msgList.hisList.length];
            var itemStr = this.storage.getCurTime();

            this.addNewRec(itemStr,this._youGetNum);
            this.storage.addAHis(itemStr, this._youGetNum);//存储数据
            var bIndex  = this.random(0,this.msgList.tilpList.length)
            this.broadcastScript.baradcastMsg(this.msgList.tilpList[bIndex])
            this.addCoin(this._youGetNum)
            cc.log("-------- stoped all -------")
        }
    },

    updateRotate (target,data){
        this.curRotate = (this.curRotate + this.setp) % 360
        // cc.log("curRotate = %s, setp = %s", this.curRotate, this.setp)
    },

    startRandom () {
        var bIndex  = this.random(0,this.msgList.tilpList.length)
        this.broadcastScript.baradcastMsg(this.msgList.tilpList[bIndex])
        this._youGetNum  = this.random(1,7)
        cc.log("you get num = %d", this._youGetNum)
        this.cutCoin(this.coinPay);
        this.startTimer1()
    },

    startTimer1(time){
        this.timer1 = time || 0;
        this.unschedule(this.sch1s);
        this.schedule(this.sch1s,1);
        cc.log("----------- startTimer1 ----------");
    },

    resetTimer1(time){
        this.timer1 = time || 0;
        this.unschedule(this.sch1s);
        cc.log("-------- resetTimer1 ---------");
    },

    sch1s (dt){
        this.timer1 = this.timer1 + 1;
        // cc.log("timer1 time = %s,speed = %d", this.timer1, this.speed);
        if (this.timer1 >= 4)
        {
            // cc.log("--------speed -- --------")
            this.circleRun(this.speed - this.timer1*10);
        }
        else
        {
            // cc.log("--------speed ++ --------")
            this.circleRun(this.timer1*5 * this.setp);
        }
    },
    update (dt) {
        if(this.timer1 <= 0){return;}
        if (this.timer1 >= 4)
        {
            if ((this.speed - this.setp) <= 1)
            {
                // cc.log("------------ will be stop ---------");
                this.cirecleStopToSetp(this._youGetNum);
            }
        }
    },
    random (begin, end)
    {
       return Math.floor(Math.random()*(end - begin) + begin) ;
    },
});
