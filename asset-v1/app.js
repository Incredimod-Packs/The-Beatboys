/** Noxdog was here **/
var app=new function(){this.name="Tremors",this.version="BB v1",this.date="2009",this.folder="asset-v1/",this.looptime=9449,this.bpm=102,this.totalframe=452,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=50,this.recminloop=2,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#CEC598",this.col0="#000000",this.col1="#CEC598",this.col2="#CEC598",this.col3="#878164",this.col4="#CEC598",this.animearray=[{name:"01_Wanderer",color:"BE6820",uniqsnd:!0},{name:"02_Tambo",color:"BE6820",uniqsnd:!0},{name:"03_Weed_seller",color:"BE6820",uniqsnd:!0},{name:"04_Drummer",color:"BE6820",uniqsnd:!0},{name:"05_Anubis",color:"BE6820",uniqsnd:!0},{name:"06_Mummy",color:"7078DA",uniqsnd:!0},{name:"07_Beast_tamer",color:"7078DA",uniqsnd:!1},{name:"08_Dommra",color:"7078DA",uniqsnd:!0},{name:"09_Jhones",color:"7078DA",uniqsnd:!0},{name:"10_Hermit",color:"7078DA",uniqsnd:!1},{name:"11_Artifact",color:"D54001",uniqsnd:!1},{name:"12_Cello",color:"D54001",uniqsnd:!1},{name:"13_Screamer",color:"D54001",uniqsnd:!1},{name:"14_Raider",color:"D54001",uniqsnd:!1},{name:"15_Parchment",color:"D54001",uniqsnd:!1},{name:"16_Pharaoh",color:"D0B857",uniqsnd:!1},{name:"17_Sarcophagus",color:"D0B857",uniqsnd:!0},{name:"18_Guard",color:"D0B857",uniqsnd:!1},{name:"19_Choir",color:"D0B857",uniqsnd:!0},{name:"20_Prince",color:"D0B857",uniqsnd:!1}],this.bonusarray=[],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};