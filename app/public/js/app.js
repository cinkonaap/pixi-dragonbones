(function (scope) {
    var Application = function () {
        this._stage = new PIXI.Stage(0x4F5C5C, true);
        this._renderer = new PIXI.autoDetectRenderer(800, 600);

        this._skeleton = undefined;

        document.body.appendChild(this._renderer.view);

        this._time = 0;
        this._onTick = this._onTick.bind(this);

        this._addGraphics();
        this._addDragonbones();
        this._addText();

        window.requestAnimationFrame( this._onTick );
    };

    Application.prototype._addDragonbones = function () {
        PIXI.loader
            .use(PIXI.dragonbones.loaders.skeletonParser())
            .add([
                {name: 'warrior', url: 'assets/warrior_skeleton.json'}
            ])
            .load((function (loader, res) {
                var skeleton = PIXI.dragonbones.display.Skeleton.makeArmature("warrior_Anims", "warrior");
                skeleton.armature.animation.gotoAndPlay("wrong_0", 0.2);

                skeleton.display.x = 360;
                skeleton.display.y = 450;

                this._stage.addChild(skeleton.display);

                this._skeleton = skeleton;
            }).bind(this));
    };

    Application.prototype._addText = function () {
        this._label = new PIXI.Text('DragonBones3 in Pixey!', {
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

    Application.prototype._onTick = function (e) {
        window.requestAnimationFrame( this._onTick );

        PIXI.dragonbones.runtime.animation.WorldClock.clock.advanceTime(0.02);

        this._renderer.render(this._stage);
    };

    scope.Application = Application;
}(packages.packagify('app.pixi')));
