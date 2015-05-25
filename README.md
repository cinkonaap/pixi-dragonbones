# pixi-dragonbones

Pixi.js plugin that enables Dragonbones support.

## Example

#### Prebuilt Files

After loading the distributed files, the dragonbones is injected into `PIXI` namespace.

First of all, load your assets using `skeletonParser`:
````javascript
PIXI.loader
    .use(PIXI.dragonbones.loaders.skeletonParser())
    .add([
        {name: 'dragon', url: 'assets/dragon_skeleton.json'}
    ])
    .load((function (loader, res) {}));
````

Then, initialize your `Skeleton` using loaded skeleton and atlas data:
````javascript
this._skeleton = PIXI.dragonbones.display.Skeleton.makeArmature("dragonBoy", "DragonBoy");
````
Set animation and add skeleton to PIXI display hierarchy:

````javascript
this._skeleton.armature.animation.gotoAndPlay("walk", 0.2);

this._stage.addChild(this._skeleton.display);
````

And do not forget to run tick function of DragonBones:

````javascript
PIXI.dragonbones.runtime.animation.WorldClock.clock.advanceTime(timeElapsed);
````

From now on, use instantiated object as reference to `armature`, `display` and `factory` objects.

Change display of `Slot`:

````javascript
var randomCloth = this._skeleton.factory.getTextureDisplay("parts/clothes" + ( Math.floor( Math.random() * 4 ) + 1 ));
this._skeleton.armature.getSlot("clothes").setDisplay( randomCloth );
````

## Building

You will need to have [node][node] and [gulp][gulp] setup on your machine.

Then you can install dependencies and build:

```js
npm i && npm run build
```

That will output the built distributables to `./dist`.

[node]:       http://nodejs.org/
[gulp]:       http://gulpjs.com/
