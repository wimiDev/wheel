"use strict";
cc._RF.push(module, 'a3c74pfz5FK250EB9FLiuU+', 'gameStorage');
// scripts/tool/gameStorage.js

"use strict";

//金币默认开始是88

cc.Class({
    extends: cc.Component,

    properties: {
        coinKey: "COIN",
        hisKey: "RANDHIS_",
        hisIndex: "HISINDEX",
        defaultCoin: 520
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.hisMAX = 10;
        this.init();
    },
    start: function start() {},
    init: function init() {
        //init mycoin
        var myCoin = this.getMyCoin();
        cc.log("myCoin = %s", this.getMyCoin());

        //init hisIndex
        var hisIndex = this.getHisIndex();
        cc.log("hisIndex = %s", this.getHisIndex());
    },
    getMyCoin: function getMyCoin() {
        return cc.sys.localStorage.getItem(this.coinKey) || this.defaultCoin;
    },
    setMyCoin: function setMyCoin(val) {
        cc.sys.localStorage.setItem(this.coinKey, val);
    },
    getHisIndex: function getHisIndex() {
        return cc.sys.localStorage.getItem(this.hisIndex) || 0;
    },
    setHisIndex: function setHisIndex(val) {
        cc.sys.localStorage.setItem(this.hisIndex, val);
    },
    getHisByIndex: function getHisByIndex(idx) {
        var _hisKey = "";
        _hisKey = this.hisKey + idx;
        cc.log("get his idx = %s, data = %s", _hisKey, cc.sys.localStorage.getItem(_hisKey));
        var hisObj = JSON.parse(cc.sys.localStorage.getItem(_hisKey));
        return hisObj;
    },
    setHisByIndex: function setHisByIndex(idx, data) {
        var _hisKey = this.hisKey + idx;
        cc.log("hisKey = %s, storage key = %s", _hisKey, JSON.stringify(data));
        cc.sys.localStorage.setItem(_hisKey, JSON.stringify(data));
    },
    getAllHis: function getAllHis() {
        var allHis = new Array();
        for (var i = 1; i <= 10; ++i) {
            var hisObj = this.getHisByIndex(i);
            allHis.push(hisObj);
        }
        return allHis;
    },
    addAHis: function addAHis(_time, _item) {
        var data = {
            time: _time,
            item: _item
        };
        var hisIndex = Number(this.getHisIndex());

        if (hisIndex < 1) {
            hisIndex = 1;
        } else {
            hisIndex = hisIndex + 1;
        }

        if (hisIndex > this.hisMAX) {
            hisIndex = 1;
        }
        cc.log("addAHis -> %s", hisIndex);
        this.setHisByIndex(hisIndex, data);
        this.setHisIndex(hisIndex);
    },
    getCurTime: function getCurTime() {
        var date = new Date();
        var mon = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var timeStr = [mon, day].join("/") + "   " + [hour, min, sec].join(":");
        cc.log("getCurTime %s", timeStr);
        return timeStr;
    }
}
// update (dt) {},
);

cc._RF.pop();