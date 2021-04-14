sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    head.say("Good")
    pause(1000)
    otherSprite.destroy()
})
let head: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 . . . . . 2 2 2 . . . 
    . . . . 2 . . . . . . . 2 . . . 
    . . . . 2 . . . . . . . 2 . . . 
    . . . . 2 2 . . . . 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(20, 60)
head = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 5 . 5 5 . . . . . . 
    . . . . . . 5 . . 5 5 . . . . . 
    . . . . . 5 5 . . . 5 5 . . . . 
    . . . . . 5 . f . f . 5 . . . . 
    . . . . 5 5 . . . . . 5 5 . . . 
    . . . . 5 . . . . . . . 5 . . . 
    . . . . 5 . . . . . . 5 5 . . . 
    . . . . 5 5 . . . . . 5 . . . . 
    . . . . . 5 5 5 . . 5 5 . . . . 
    . . . . . . . . 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
head.setPosition(120, 60)
head.setFlag(SpriteFlag.Ghost, true)
game.onUpdate(function () {
    mySprite.x += controller.dx()
})
