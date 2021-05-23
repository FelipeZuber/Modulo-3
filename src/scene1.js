class scene1 extends Phaser.Scene{
    constructor() {
        super("scene1")
    }
    preload(){
        this.load.image("Menu", "./assets/Menu.png");
        this.load.image('ground 2', './assets/platform 2.png');
        this.load.image('sky', './assets/sky.png');
        this.load.image('ground', './assets/platform.png');
        this.load.image('stars', './assets/stars.png');
        this.load.image("stars2", "./assets/stars2.png");
        this.load.image('bomb', './assets/bomb.png');
        this.load.spritesheet('dude', './assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }
    create(){
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1
        });
    
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 6,
            repeat: -1
        });

        var logo=this.add.image(400,300,"Menu").setScale(0.26)


        var restartButton = this.add.text(340, 300, "JUGAR",{fontSize:50})
        .setInteractive()
        .on("pointerdown",() => this.reiniciar()); 
    }
    reiniciar(){
        this.scene.start("scene5")
        gameOver = false 
    }
}