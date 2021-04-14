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
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 . . 3 3 . . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . . 3 . . . 3 . . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . 3 . . . . . 3 3 . . . . 
    . . . . . 3 . . . . . 3 . . . . 
    . . . . . . 3 . . . . 3 . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setFlag(SpriteFlag.Ghost, false)
mySprite2.setPosition(30, 90)
game.onUpdate(function () {
    mySprite.x += controller.dx()
    mySprite.y += controller.dy()
})
