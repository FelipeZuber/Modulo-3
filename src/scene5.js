class scene5 extends Phaser.Scene{
    constructor(){
        super("scene5");
    }
    preload(){
        this.load.image("MenuLVL", "./assets/MenuLVL.png");
    }
    create(){
        var MenuLVL = this.add.image(400, 300,"MenuLVL");
        MenuLVL.setInteractive()
        MenuLVL.on("pointerdown",() => this.scene.start("scene2"));
    }
    
}