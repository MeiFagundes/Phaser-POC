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

let gameHeight;
let gameWidth;
var game = new Phaser.Game(config);

function preload () {
    this.load.image('grass', 'assets/grass.jpg');
    this.load.image('tree', 'assets/tree1.png');
    this.load.spritesheet('mario', 
        'assets/mario.png',
        { frameWidth: 14, frameHeight: 20 }
    );

    this.load.audio('main_song', 'assets/audio/song_main.ogg');
}

function create () {
    gameHeight = this.sys.canvas.height;
    gameWidth = this.sys.canvas.width;

    
    let background = this.add.image(gameWidth / 2, gameHeight / 2, 'grass');
    
    let trees = this.physics.add.staticGroup();

    let tree1 = trees.create(600, 50, 'tree').setScale(0.5).refreshBody();
    let tree2 = trees.create(500, 50, 'tree').setScale(0.5).refreshBody();
    let tree3 = trees.create(400, 50, 'tree').setScale(0.5).refreshBody();
    let tree4 = trees.create(300, 50, 'tree').setScale(0.5).refreshBody();
    let tree5 = trees.create(200, 50, 'tree').setScale(0.5).refreshBody();
    let tree6 = trees.create(100, 50, 'tree').setScale(0.5).refreshBody();
    let tree7 = trees.create(550, 150, 'tree').setScale(0.5).refreshBody();
    let tree8 = trees.create(450, 150, 'tree').setScale(0.5).refreshBody();
    let tree9 = trees.create(350, 150, 'tree').setScale(0.5).refreshBody();
    let tree10 = trees.create(250, 150, 'tree').setScale(0.5).refreshBody();
    let tree11 = trees.create(150, 150, 'tree').setScale(0.5).refreshBody();
    
    tree1.body.setSize(100, 120);
    tree2.body.setSize(100, 120);
    tree3.body.setSize(100, 120);
    tree4.body.setSize(100, 120);
    tree5.body.setSize(100, 120);
    tree6.body.setSize(100, 120);
    tree7.body.setSize(100, 120);
    tree8.body.setSize(100, 120);
    tree9.body.setSize(100, 120);
    tree10.body.setSize(100, 120);
    tree11.body.setSize(100, 120);

    player = this.physics.add.sprite(gameWidth / 2, gameHeight / 2, 'mario').setScale(3);


    let tree7b = trees.create(550, 450, 'tree').setScale(0.5).refreshBody();
    let tree8b = trees.create(450, 450, 'tree').setScale(0.5).refreshBody();
    let tree9b = trees.create(350, 450, 'tree').setScale(0.5).refreshBody();
    let tree10b = trees.create(250, 450, 'tree').setScale(0.5).refreshBody();
    let tree11b = trees.create(150, 450, 'tree').setScale(0.5).refreshBody();
    let tree1b = trees.create(600, 500, 'tree').setScale(0.5).refreshBody();
    let tree2b = trees.create(500, 500, 'tree').setScale(0.5).refreshBody();
    let tree3b = trees.create(400, 500, 'tree').setScale(0.5).refreshBody();
    let tree4b = trees.create(300, 500, 'tree').setScale(0.5).refreshBody();
    let tree5b = trees.create(200, 500, 'tree').setScale(0.5).refreshBody();
    let tree6b = trees.create(100, 500, 'tree').setScale(0.5).refreshBody();

    tree1b.body.setSize(100, 150);
    tree2b.body.setSize(100, 150);
    tree3b.body.setSize(100, 150);
    tree4b.body.setSize(100, 150);
    tree5b.body.setSize(100, 150);
    tree6b.body.setSize(100, 150);
    tree7b.body.setSize(0, -10);
    tree8b.body.setSize(0, -10);
    tree9b.body.setSize(0, -10);
    tree10b.body.setSize(0, -10);
    tree11b.body.setSize(0, -10);

    

    player.setCollideWorldBounds(true);

    this.physics.add.collider(trees, player);

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

    let backgroundMusic = this.sound.add('main_song');

    backgroundMusic.play();
}

function update () {
    if (cursors.left.isDown && !cursors.right.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }

    if (cursors.right.isDown && !cursors.left.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }

    if (cursors.up.isDown && !cursors.down.isDown) {
        player.setVelocityY(-160);

        player.anims.play('right', true);
    }

    if (cursors.down.isDown && !cursors.up.isDown) {
        player.setVelocityY(+160);

        player.anims.play('left', true);
    }

    if (!cursors.left.isDown && !cursors.right.isDown) {
        player.setVelocityX(0);

    }

    if (!cursors.down.isDown && !cursors.up.isDown) {
        player.setVelocityY(0);

    }

    if (!cursors.down.isDown && !cursors.up.isDown && !cursors.left.isDown && !cursors.right.isDown) {
        player.anims.play('front', true);
    }
}
