var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    pixelArt: true
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('grass', 'assets/grass.png');
    this.load.image('star', 'assets/star.png');
    this.load.spritesheet('mario', 
        'assets/mario.png',
        { frameWidth: 14, frameHeight: 20 }
);
}

function create ()
{

    
    this.add.image(0, 0, 'grass').setOrigin(0, 0);
    this.add.image(400, 300, 'star');

    player = this.physics.add.sprite(100, 450, 'mario').setScale(2);

    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('mario', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'front',
        frames: [ { key: 'mario', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'back',
        frames: [ { key: 'mario', frame: 9 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('mario', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();


}

function update ()
{
    if (cursors.left.isDown && !cursors.right.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    if (cursors.right.isDown && !cursors.left.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    if (cursors.up.isDown && !cursors.down.isDown){
        player.setVelocityY(-160);

        player.anims.play('right', true);
    }
    if (cursors.down.isDown && !cursors.up.isDown){
        player.setVelocityY(+160);

        player.anims.play('left', true);
    }
    if (!cursors.left.isDown && !cursors.right.isDown)
    {
        player.setVelocityX(0);

    }
    if (!cursors.down.isDown && !cursors.up.isDown)
    {
        player.setVelocityY(0);

    }
    if (!cursors.down.isDown && !cursors.up.isDown && !cursors.left.isDown && !cursors.right.isDown)
    {
        player.anims.play('front', true);
    }
}
