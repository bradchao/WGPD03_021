
var Brad01Layer = cc.Layer.extend({
    p2:null,
    status:null,
    isOn: false,
    poker7:null,
    poker4:null,
    ctor:function () {
        this._super();

        this.p2 = new cc.Sprite("res/p2.jpg");
        this.p2.attr({
            x: cc.winSize.width / 8,
            y: cc.winSize.height *7 / 8
        });
        this.addChild(this.p2);

        this.status = new cc.Sprite(
            this.isOn?res.status_on:res.status_off);
        this.status.attr({
            x: cc.winSize.width *7/8,
            y:cc.winSize.height*7/8
        });
        this.addChild(this.status);

        // this.poker7 = new cc.Sprite(
        //     res.poker_png,cc.rect(221,711,220,218));
        // this.poker7.attr({
        //     x: cc.winSize.width / 4,
        //     y: cc.winSize.height /2,
        //     rotation: -90,
        // });
        // this.addChild(this.poker7);

        cc.spriteFrameCache.addSpriteFrames(
            res.poker_plist, res.poker_png);

        this.poker4 = new cc.Sprite("#pokers_0.png");
        this.poker4.attr({
            x: cc.winSize.width *3/ 4,
            y: cc.winSize.height /2,
        });
        this.poker4.setScale(0.5,0.5);
        this.addChild(this.poker4);

        this.test1();


        this.myMouseListener(this);


        return true;
    },

    test1: function(){

        this.poker4.setSpriteFrame("pokers_1.png"); // for plist
        //this.poker4.setTexture(res.status_off); // no access plist

    },

    myMouseListener: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown:function (event) {
               layer.isOn = !layer.isOn;
               layer.status.setTexture(
                   layer.isOn?res.status_on:res.status_off);
            }
        },layer);
    },

});

var Brad01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad01Layer();
        this.addChild(layer);
    }
});

