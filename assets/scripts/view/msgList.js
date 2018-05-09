
cc.Class({
    extends: cc.Component,

    properties: {
         tilpList : {
             default : null,
             type : Array, 
         },
         hisList : {
             default : null,
             type : Array,
         },      
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.tilpList = new Array();
         this.hisList = new Array();
         var self = this;
         cc.loader.load(cc.url.raw("resources/data/msgList.json"), function(err,res){
            if (err) {  
                cc.log("read file error"); 
            }
            else{  
                 cc.log("read file ok");
                 self.tilpList = res.tilpList
                 self.hisList = res.hisList
            }  
         });  
     },

    start () {

    },
   
    // update (dt) {},
});
