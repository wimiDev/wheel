
cc.Class({
    extends: cc.Component,

    properties: {
        tilpList : null,
        hisList : null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
         this.tilpList = new Array();
         this.hisList = new Array();
         cc.loader.load(cc.url.raw("resources/data/msgList.json"), function(err,res){  
            if (err) {  
                cc.log("read file error");
                 cc.log(err);  
            }
            else{  
                 cc.log("read sussed");
                 this.tilpList = res.tilpList;
                 this.hisList = res.hisList;
            }  
        });  
    },

    // update (dt) {},
});
