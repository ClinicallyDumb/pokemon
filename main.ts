/**
 * ***********************\
 * 
 * **ADD YOUR CODE ABOVE***
 * 
 * \***********************
 */
/**
 * ***********************\
 * 
 * **ADD YOUR CODE BELOW***
 * 
 * \***********************
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    pokeball = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f e 2 2 2 2 e f f . . . 
        . . f e 2 2 2 2 2 2 2 1 e f . . 
        . f e 2 2 2 2 2 2 2 2 2 1 e f . 
        f e 2 2 2 2 2 2 2 2 2 2 2 1 e f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 1 2 f 
        f 2 2 2 2 2 e e e 2 2 2 2 2 2 f 
        f e 2 2 2 e b b b e 2 2 2 2 e f 
        f b b b b b b c b b b b b b b f 
        f 1 1 1 1 d b b b d 1 1 1 1 1 f 
        f d 1 1 1 1 d d d 1 1 1 1 1 d f 
        . f d 1 1 1 1 1 1 1 1 1 1 d f . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . . f f d 1 1 1 1 d f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Projectile)
    pokeball.setPosition(mySprite.x, mySprite.y)
    otherSprite.destroy()
    pokemon += 1
    animation.runMovementAnimation(
    pokeball,
    animation.animationPresets(animation.shake),
    100,
    false
    )
    music.baDing.play()
    otherSprite.startEffect(effects.disintegrate, 1000)
    mySprite.say("Gotcha!", 500)
})
let pokeball: Sprite = null
let mySprite: Sprite = null
let pokemon = 0
scene.setBackgroundColor(7)
tiles.setTilemap(tiles.createTilemap(hex`10001000020202010c0c0c0c0c0c0c0c0c0c0c08021011050904040a0a0a0404090a0a030202110b040406141312050406101010101009100504040912120b0406110108010c0c0c0404040614141205061105060b0a0a0a0a0a04040812130506110506101010101010050403131205040c0406090c080e0f01040613121205040404060504040c0c040406121201090404040605040a0a0a0a0a0a0c0c0a0a0a0a0a0305061010101010100506111111101011050602010c0c0c0905040c0c0c0c08110506100b0a04040905040a0a0a040602050611091005061005060e0d0f05060905040c0c0c04060205061110100506070b0a0a0a0a0a03100b031111100b0307`, img`
    2 2 2 . . . . . . . . . . . . . 
    2 2 2 . 2 . . . . . . . 2 . . . 
    2 2 2 . . . . 2 2 2 . . . 2 2 2 
    2 2 2 2 . . . 2 2 2 . . . 2 . . 
    . . . . . . . . 2 2 2 . . 2 . . 
    . . . . . . . . . 2 2 . . 2 . . 
    2 2 2 2 2 2 . . . 2 2 . . . . . 
    2 . . 2 2 . . . 2 2 2 . . . . . 
    . . . . . . . . 2 2 . 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 . . 2 2 2 2 2 2 
    . . 2 . . . . 2 . . . . . . . 2 
    . . 2 . . . . 2 . . . . . . . 2 
    . . 2 2 2 . . 2 . . 2 2 2 . . 2 
    . . . . . . . 2 . . 2 2 2 . . 2 
    . . . . . . . 2 . . 2 2 2 . . 2 
    `, [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tileGrass2,sprites.castle.tilePath9,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.builtin.forestTiles4,sprites.castle.tilePath3,sprites.builtin.forestTiles0,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.builtin.forestTiles22,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 3 3 3 3 f f . . . 
    . . f f 1 3 3 3 3 1 f f . . 
    . f f 1 3 3 3 3 3 3 3 f f . 
    . f 3 3 3 3 3 3 3 1 3 3 f . 
    . f 3 3 3 3 f 3 3 3 1 3 f . 
    . f f 1 3 1 c f 3 3 3 3 f . 
    . f f f b f c c f b 3 1 f . 
    . . f c 1 f d d f 1 f f . . 
    . . f f 3 d d d d 3 f f . . 
    . . f f b c c c c b f f . . 
    . f c f 6 1 9 9 1 6 f c f . 
    . f d 9 9 1 9 9 1 9 9 d f . 
    . f f f 6 6 6 6 6 6 f f f . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
let pizza = sprites.create(img`
    . . . . f f f f . . . . . . . . . f . . . 
    . . . f 4 4 4 4 f . . . . . . . f 2 f . . 
    . . f 4 4 4 4 4 e f . . . . . . f 2 2 f . 
    . . f 4 4 4 4 4 4 f . . . . . . f 2 2 f . 
    . f 4 4 4 d f 4 4 e f . . . . f 2 2 5 2 f 
    f 4 4 4 4 f f 4 4 e f . . . . f 2 5 d 2 f 
    f 4 4 4 4 f f 4 e e e f . . . f 2 d d 2 f 
    . f e 4 4 4 4 4 e 4 4 f . . . . f 4 f f . 
    . . f f e e e e e e e e f . . . f 4 f . . 
    . . . . f f f e e f e e e f . f 4 4 f . . 
    . . . . . f 4 4 f e e e e f f 4 4 f . . . 
    . . . . . f 4 4 4 f f e e e f 4 f . . . . 
    . . . . f d f 4 4 4 e e e e f f . . . . . 
    . . . . . f f f 4 4 e e e e f . . . . . . 
    . . . . . . . . f f f e f f f . . . . . . 
    . . . . . . . . . f d e d f . . . . . . . 
    . . . . . . . . . . f f f . . . . . . . . 
    `, SpriteKind.Food)
let apple = sprites.create(img`
    . . . f f f f . . . . . . . . . f f f f . . 
    . . f 9 9 9 6 f f . . . . . . f 9 9 9 9 f . 
    . f 9 9 9 9 9 9 6 f f . . . f f 9 9 9 6 6 f 
    . f 9 9 9 9 9 9 9 f e f f . f 9 9 6 f 6 6 f 
    f e 9 9 9 9 9 9 9 6 e e e f 9 9 6 f 6 6 6 f 
    f 9 9 9 9 1 f 9 9 6 d e e e f 6 6 f 6 6 f . 
    f 6 9 9 9 f e 9 6 6 1 e e e f 6 f f f f . . 
    . f 6 6 9 f e 6 6 6 f 1 1 e e f f . . . . . 
    . . f f 6 6 6 6 f f 9 9 1 e e f . . . . . . 
    . . f 9 f f f f 9 9 9 6 1 e e f . . . . . . 
    . . . f f 5 5 f 9 9 6 f 1 e e f . . . . . . 
    . . . . . f 5 5 f f f f d e f . . . . . . . 
    . . . . f 9 f e 5 5 5 e f d f . . . . . . . 
    . . . . . f f f f e e 9 f d f . . . . . . . 
    . . . . . . . . f f f 9 f f . . . . . . . . 
    . . . . . . . . . f 6 6 6 f . . . . . . . . 
    . . . . . . . . . . f f f . . . . . . . . . 
    `, SpriteKind.Food)
let burger = sprites.create(img`
    . . . . . . . . . . . . f f f . . . . . 
    . . . . . . . . . . . f 7 7 7 f . . . . 
    . . . . . . . . . f f f 7 7 7 f . . . . 
    . . . . . . . f f 7 7 6 7 7 6 7 f f . . 
    . . . f f . f 7 7 7 6 6 7 7 6 7 7 7 f . 
    . . f 6 6 f f 7 7 6 7 6 7 7 7 6 7 7 7 f 
    . . f 6 6 6 f f 6 7 6 7 7 7 7 7 6 7 7 f 
    . . f 6 6 6 6 8 f 7 6 7 7 7 7 7 6 7 7 f 
    . f 6 6 8 6 8 8 6 f f f 7 7 7 7 6 7 f . 
    f f 8 6 6 6 6 6 6 6 6 f 7 7 7 f f f f . 
    f f 8 6 6 6 8 6 6 6 f 8 f f f 8 8 8 f . 
    f 6 6 6 6 8 6 f f 6 8 8 8 8 8 f 8 1 f . 
    f 8 6 6 6 6 f 2 1 1 8 8 f 8 8 f f f . . 
    . f 8 6 6 6 f 2 1 6 8 f 8 8 f . . . . . 
    . . f f 8 8 8 8 8 8 f 8 8 8 f . . . . . 
    . . . . f f f f f f f 1 8 1 f . . . . . 
    . . . . . . . . . . . f f f . . . . . . 
    `, SpriteKind.Food)
let berry = sprites.create(img`
    . . . . . . . . . . . . . . . . f . . 
    . . . . . f f . . . . . . . . f 5 f . 
    . . . . f c f . . . . . . . f 5 4 4 f 
    . . . . f 5 f . . . . f f f 5 4 4 4 f 
    . . . f 5 4 f . . f f c c f 4 4 4 f . 
    . . . f 5 5 5 f f 5 5 c f 4 4 4 f . . 
    . . f 5 5 5 5 5 5 5 5 f f 4 4 f . . . 
    . f 5 5 5 5 5 5 5 5 4 f c f 4 4 f . . 
    f 1 5 5 5 5 5 5 5 5 5 f c c f 4 f . . 
    f f 5 5 5 5 5 5 5 5 5 4 f f 4 f . . . 
    f 5 5 5 5 1 f 5 5 5 4 4 f f f . . . . 
    . f 5 5 5 f f 2 2 5 4 c c f . . . . . 
    . . f 4 5 5 5 2 4 4 4 4 4 f . . . . . 
    . f 5 4 4 4 4 4 4 f 4 4 c f . . . . . 
    . f f f 5 5 5 5 f 5 4 4 4 f . . . . . 
    . . f 4 f 5 5 5 5 f 4 4 4 f . . . . . 
    . . f f f f f 4 4 4 4 4 f . . . . . . 
    . . . . . . . f f f 4 f f . . . . . . 
    . . . . . . . . f 5 5 4 f . . . . . . 
    . . . . . . . . . f f f . . . . . . . 
    `, SpriteKind.Food)
let food1 = sprites.create(img`
    . . . . . . . f . . . . . . . . . . . 
    f f . . . f f 9 f . . . . . . . . . . 
    f 6 f . f 9 9 9 f . . f f f . . . . . 
    f 6 9 f b 9 b b b f f b b f . . . . . 
    f b 9 f b b b b f b b b b f . . . . . 
    f b b f b b b f b b f c f . . . . . . 
    . f f 9 f f f 9 9 f c b f . f . . . . 
    . f 6 b b 9 b 6 6 b b f . f b f . . . 
    f b 1 b b b 6 2 1 b f f f f b f . . . 
    . f 2 b b b 1 2 1 b b b f b b f . . . 
    . f b f b b 2 1 b b c c b b b f . . . 
    . . f b b b b b c c c b b f f . . . . 
    . . f f c c c c c c f b b f . . . . . 
    . . . f f c c f f f f f b f . . . . . 
    . . . f 6 f f f b f . f 9 f . . . . . 
    . . . f f . f 9 f . . f f . . . . . . 
    . . . . . . f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let food2 = sprites.create(img`
    . . . . . . . f f f f f . . . . . . . 
    . . . . . f f d d d d d f f . . . . . 
    . . . . f d d d d d d d d d f . . . . 
    . . . f c c b 1 1 1 b d d d d f . . . 
    . . f b c 1 1 b 1 f 1 b d d d d f . . 
    . . f c 1 1 1 b f 1 f 1 b d d d f . . 
    . . f c 1 1 1 b f f f 1 1 d d d d f . 
    . . f 1 c 4 4 c 1 f 1 1 1 d d d d f . 
    . f 7 6 b c c 1 1 1 1 1 1 d d d b f . 
    . f 7 7 6 1 1 1 1 1 1 1 b d d d b f . 
    . . f 6 6 6 6 6 6 1 1 b d d d d b f . 
    . . f 1 1 6 7 7 7 6 d b d d b b f . . 
    . . . f 1 1 6 6 6 b b c b b b b f . . 
    . . . . f c 1 1 1 1 c c b b b f . . . 
    . . . f 4 e f 1 1 1 1 1 c b f . . . . 
    . . . . f f . f f c c c f f . . . . . 
    . . . . . . . . f 4 e 4 f . . . . . . 
    . . . . . . . . . f f f . . . . . . . 
    . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(pizza, sprites.castle.tilePath5)
tiles.placeOnRandomTile(apple, sprites.castle.tilePath2)
tiles.placeOnRandomTile(burger, sprites.castle.tilePath8)
tiles.placeOnRandomTile(berry, sprites.castle.tilePath1)
tiles.placeOnRandomTile(food1, sprites.castle.tilePath7)
tiles.placeOnRandomTile(food2, sprites.castle.tilePath9)
pokeball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
forever(function () {
    if (controller.anyButton.isPressed()) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . 
            . . . f f 3 3 3 3 f f . . . 
            . . f f 1 3 3 3 3 1 f f . . 
            . f f 1 3 3 3 3 3 3 3 f f . 
            . f 3 3 3 3 3 3 3 1 3 3 f . 
            . f 3 3 3 3 f 3 3 3 1 3 f . 
            . f f 1 3 1 c f 3 3 3 3 f . 
            . f f f b f c c f b 3 1 f . 
            . . f c 1 f d d f 1 f f . . 
            . . f f 3 d d d d 3 f f . . 
            . f f f b c c c c b f f . . 
            . f b d f 1 9 9 f f f c f . 
            . f b b f 1 9 f d d f d f . 
            . f f f 6 6 6 f b b f f f . 
            . . . f f f f f f f . . . . 
            `)
        pause(200)
        mySprite.setImage(img`
            . . . . . f f f f . . . . . 
            . . . f f 3 3 3 3 f f . . . 
            . . f f 1 3 3 3 3 1 f f . . 
            . f f 1 3 3 3 3 3 3 3 f f . 
            . f 3 3 3 3 3 3 3 1 3 3 f . 
            . f 3 3 3 3 f 3 3 3 1 3 f . 
            . f f 1 3 1 c f 3 3 3 3 f . 
            . f f f b f c c f b 3 1 f . 
            . . f c 1 f d d f 1 f f . . 
            . . f f 3 d d d d 3 f f . . 
            . . f f b c c c c b f f . . 
            . f c f 6 1 9 9 1 6 f c f . 
            . f d 9 9 1 9 9 1 9 9 d f . 
            . f f f 6 6 6 6 6 6 f f f . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . 
            . . . f f 3 3 3 3 f f . . . 
            . . f f 1 3 3 3 3 1 f f . . 
            . f f 1 3 3 3 3 3 3 3 f f . 
            . f 3 3 3 3 3 3 3 1 3 3 f . 
            . f 3 3 3 3 f 3 3 3 1 3 f . 
            . f f 1 3 1 c f 3 3 3 3 f . 
            . f f f b f c c f b 3 1 f . 
            . . f c 1 f d d f 1 f f . . 
            . . f f 3 d d d d 3 f f . . 
            . . f f b c c c c f f f . . 
            . f c f f f 9 9 1 f d b f . 
            . f d f d d f 9 1 f b b f . 
            . f f f b b f 6 6 6 f f f . 
            . . . f f f f f f f f . . . 
            `)
        pause(200)
        mySprite.setImage(img`
            . . . . . f f f f . . . . . 
            . . . f f 3 3 3 3 f f . . . 
            . . f f 1 3 3 3 3 1 f f . . 
            . f f 1 3 3 3 3 3 3 3 f f . 
            . f 3 3 3 3 3 3 3 1 3 3 f . 
            . f 3 3 3 3 f 3 3 3 1 3 f . 
            . f f 1 3 1 c f 3 3 3 3 f . 
            . f f f b f c c f b 3 1 f . 
            . . f c 1 f d d f 1 f f . . 
            . . f f 3 d d d d 3 f f . . 
            . . f f b c c c c b f f . . 
            . f c f 6 1 9 9 1 6 f c f . 
            . f d 9 9 1 9 9 1 9 9 d f . 
            . f f f 6 6 6 6 6 6 f f f . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `)
        pause(100)
    }
})
forever(function () {
    if (pokemon == 6) {
        mySprite.say("You Win!", 1000)
        mySprite.startEffect(effects.confetti)
    }
})
