(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"HMhagrala_shirdykan_atlas_", frames: [[0,0,1669,937],[1282,939,300,300],[0,939,1280,720]]}
];


// symbols:



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["HMhagrala_shirdykan_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.unnamed = function() {
	this.spriteSheet = ss["HMhagrala_shirdykan_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.רקע = function() {
	this.spriteSheet = ss["HMhagrala_shirdykan_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WOW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.16,0.16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.WOW, new cjs.Rectangle(0,0,267,149.9), null);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unnamed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(0,0,300,300), null);


(lib.rand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.רקע();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rand1, new cjs.Rectangle(0,0,704,396), null);


// stage content:
(lib.HMhagrala_shirdykan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop ();
		home = this;
		this.rand1.addEventListener("click", fl_MouseClickHandler.bind(this));
		home.WIN.alpha = 0;
		home.count.text=0;
		home.start.alpha = 0;
		function fl_MouseClickHandler()
		{
			
			console.log("Mouse clicked");
			home.mynm.text=Math.floor(Math.random() * 10) + 1;
						home.WIN.alpha = 0;
			if (home.mynm.text==1 || home.mynm.text==10) {
				home.rand1.alpha -= 0.2;
				home.WIN.alpha = 1;
				home.count.text ++;
			if (home.count.text=="5")
		{
		this.rand1.alpha=0
		home.WIN.alpha = 0;	
		home.count.alpha = 0;
		home.start.alpha = 1;
			
		}
				
			}
		
		}
		
		
		
		this.start.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
		home.count.text=0;
		
		this.rand1.alpha=1
		home.WIN.alpha = 0;	
		home.count.alpha = 1;
		home.start.alpha = 0;
		home.mynm.text= " "
				
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.start = new lib.start();
	this.start.parent = this;
	this.start.setTransform(276,201,1,1,0,0,0,150,150);
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.count = new cjs.Text("", "bold 80px 'Agency FB'");
	this.count.name = "count";
	this.count.lineHeight = 95;
	this.count.lineWidth = 52;
	this.count.parent = this;
	this.count.setTransform(465,26.8);

	this.WIN = new lib.WOW();
	this.WIN.parent = this;
	this.WIN.setTransform(271.2,299.6,1,1,0,0,0,133.5,75);

	this.mynm = new cjs.Text("", "bold 80px 'Agency FB'", "#FFFFFF");
	this.mynm.name = "mynm";
	this.mynm.lineHeight = 95;
	this.mynm.lineWidth = 44;
	this.mynm.parent = this;
	this.mynm.setTransform(251.2,173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mynm},{t:this.WIN},{t:this.count},{t:this.start}]}).wait(1));

	// Layer 1
	this.rand1 = new lib.rand1();
	this.rand1.parent = this;
	this.rand1.setTransform(278.9,200,1,1,0,0,0,351.9,198);

	this.timeline.addTween(cjs.Tween.get(this.rand1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(202,202,704,396);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HMhagrala_shirdykan_atlas_.png?1508770078925", id:"HMhagrala_shirdykan_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;