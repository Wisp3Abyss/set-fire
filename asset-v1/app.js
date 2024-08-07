/*the creator of the make it a real mod not chinese or malaysia*/
var app = new function() {
    this.name = "Set Fire", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 6600, this.bpm = 145, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !2, this.bonusendloopA = !2, this.recmaxloop = 100, this.recminloop = 10, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#273C7F", this.col0 = "#273C7F", this.col1 = "#273C7F", this.col2 = "#273C7F", this.col3 = "#273C7F", this.col4 = "#273C7F", this.animearray = [{
        name: "1_kick",
        color: "F37811",
        uniqsnd: !1
    }, {
        name: "2_hihat",
        color: "F37811",
        uniqsnd: !1
    }, {
        name: "3_chair",
        color: "F37811",
        uniqsnd: !0
    }, {
        name: "4_toms",
        color: "F37811",
        uniqsnd: !1
    }, {
        name: "5_joker",
        color: "F37811",
        uniqsnd: !0
    }, {
        name: "6_reese",
        color: "FFE694",
        uniqsnd: !1
    }, {
        name: "7_ambience",
        color: "FFE694",
        uniqsnd: !1
    }, {
        name: "8_ay",
        color: "FFE694",
        uniqsnd: !1
    }, {
        name: "9_robot",
        color: "FFE694",
        uniqsnd: !1
    }, {
        name: "10_jiahua",
        color: "FFE694",
        uniqsnd: !1
    }, {
        name: "11_808",
        color: "78D4D3",
        uniqsnd: !1
    }, {
        name: "12_lead",
        color: "78D4D3",
        uniqsnd: !1
    }, {
        name: "13_brass",
        color: "78D4D3",
        uniqsnd: !0
    }, {
        name: "14_chorus",
        color: "78D4D3",
        uniqsnd: !1
    }, {
        name: "15_fast",
        color: "78D4D3",
        uniqsnd: !0
    }, {
        name: "16_zun",
        color: "2252B4",
        uniqsnd: !1
    }, {
        name: "17_qingqing",
        color: "2252B4",
        uniqsnd: !1
    }, {
        name: "18_fuckass",
        color: "2252B4",
        uniqsnd: !1
    }, {
        name: "19_greenhat",
        color: "2252B4",
        uniqsnd: !1
    }, {
        name: "20_iamgay",
        color: "2252B4",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "MikuGang",
        src: "v1-b1-mikugang-hb.mp4",
        code: "1,2,11,14,16",
        sound: "bonus-mikugang",
        aspire: "aspire"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json";
    }
};
