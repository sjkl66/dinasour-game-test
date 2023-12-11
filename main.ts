namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
}
function setup (vy: number) {
    dinosaur = sprites.create(assets.image`Dinosaur`, SpriteKind.Player)
    ground = sprites.create(assets.image`ground`, SpriteKind.Ground)
    dinosaur.vy = vy
    dinosaur.x -= 50
    ground.x = 80
    ground.y = 60
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Ground, (sprite, othersprite) => {
        sprite.vy = 0;
        onground = true;
        sprite.y -= vy/100;
    })
    scene.setBackgroundColor(13)
}
let ground: Sprite = null
let onground = false
let dinosaur: Sprite = null
setup(100)
