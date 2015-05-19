/*
  pixi-application v 
  Generate date 2015-05-18, 21:48:48 
*/
(function (scope) {
    var Application = function () {
        this._stage = new PIXI.Stage(0x4F5C5C, true);
        this._renderer = new PIXI.autoDetectRenderer(800, 600);

        document.body.appendChild(this._renderer.view);

        this._onTick = this._onTick.bind(this);

        this._addGraphics();
        this._addDragonbones();
        this._addText();

        window.requestAnimationFrame( this._onTick );
    };

    Application.prototype._addDragonbones = function () {
        PIXI.loader
            .use(PIXI.dragonbones.loaders.dragonbonesParser)
            .add([
                {name: 'dragon', url: 'assets/dragon_skeleton.json'}
            ])
            .load((function (loader, res) {
                var arm = PIXI.dragonbones.makeArmature("dragonBoy", res.dragonSkeleton.data, res.dragonAtlas.data, res.dragonAtlasImage.data);
            }).bind(this));
    };

    Application.prototype._addText = function () {
        this._label = new PIXI.Text('Spine in Pixey!', {
            fill: "#FF0000",
            stroke: "#0000FF",
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: "#FFFFFF",
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 5
        });

        this._label.x = 300;
        this._label.y = 30;

        this._stage.addChild(this._label);
    };

    Application.prototype._addGraphics = function () {
        this._graphic1 = new PIXI.Graphics();

        this._graphic1.beginFill(0xFF0000, 1.0);
        this._graphic1.drawRect(-25, -25, 50, 50);
        this._graphic1.endFill();

        this._stage.addChild(this._graphic1);
        this._graphic1.position.x = 50;
        this._graphic1.position.y = 50;

    };

    Application.prototype._onTick = function () {
        window.requestAnimationFrame( this._onTick );

        this._filterCount += 0.1;

        this._renderer.render(this._stage);
    };

    scope.Application = Application;
}(packages.packagify('app.pixi')));