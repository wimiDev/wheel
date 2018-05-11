"use strict";
cc._RF.push(module, '92413SSlgFNI6+1sbIZR+fm', 'ListViewCtrl');
// scripts/listview/ListViewCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // itemTemplate: { // item template to instantiate other items
        //     default: null,
        //     type: cc.Node
        // },
        scrollView: {
            default: null,
            type: cc.ScrollView
        },
        spawnCount: 0, // how many items we actually spawn
        totalCount: 0, // how many items we need for the whole list
        spacing: 0, // space between each item
        bufferZone: 0, // when item is away from bufferZone, we relocate it
        items: new Array()
    },
    start: function start() {
        this.items = []; // array to store spawned items
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.content = this.scrollView.content;
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0;
        this.initialize();
    },

    initialize: function initialize() {
        //   var item = cc.instantiate(this.itemTemplate)
        //   item.x = 0
        //   item.y = 0
        //   cc.log("添加一个item")
        //   this.pushToList(item)
    },

    getPositionInView: function getPositionInView(item) {
        // get item position in scrollview's node space
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function update(dt) {},

    scrollEvent: function scrollEvent(sender, event) {
        switch (event) {
            case 0:

                break;
            case 1:

                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7:

                break;
            case 8:

                break;
            case 9:

                break;
        }
    },

    //item is node
    pushToList: function pushToList(item) {
        var height = item.height + this.spacing;
        cc.log("item.height = %s", height);
        item.y = this.lastContentPosY - this.spacing - item.height / 2;
        item.x = 0; //this.content.width/2
        this.lastContentPosY -= height;
        this.items.push(item);
        this.content.width = item.width;
        if (Math.abs(this.lastContentPosY) > this.content.height) {
            this.content.height += height;
        }
        cc.log(this.content.height);
        this.content.addChild(item);
    },

    removeItem: function removeItem() {},

    scrollToFixedPosition: function scrollToFixedPosition() {
        this.scrollView.scrollToOffset(cc.p(0, 500), 2);
    }
});

cc._RF.pop();