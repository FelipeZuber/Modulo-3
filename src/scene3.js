class scene3 extends Phaser.Scene{
    constructor(){
        super("scene3");
    }
    preload(){
        this.load.image("Perdiste", "./assets/Perdiste.png");
    }
    create(){
        this.add.image(400, 300, "Perdiste")
        this.add.text(250, 250, "Combustible encontrado: " + score)
        this.add.text(250, 200, "Piezas de nave encontradas: " + score2)

        var restartButton = this.add.text(270, 500, "Reiniciar Nivel",{fontSize:30})
        .setInteractive()
        .on("pointerdown",() => this.reiniciar());
    }
    reiniciar(){
        this.scene.start("scene2")
        gameOver = false 
        score= 0
        score2= 0
    }
}