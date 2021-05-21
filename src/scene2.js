class scene2 extends Phaser.Scene{
    constructor(){
        super("scene2");
    }
    create(){
        this.add.image(400, 300, 'sky');

        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(400, 400, 'ground 2');
        platforms.create(50, 250, 'ground 2');
        platforms.create(400, 140, 'ground 2');
        platforms.create(750, 250, 'ground 2');

        player = this.physics.add.sprite(100, 100, 'dude');

        player.setBounce(0.5);

        player.setCollideWorldBounds(true);

        
        cursors = this.input.keyboard.createCursorKeys();
        

        stars = this.physics.add.group({
            key: 'stars',
            repeat: 4,
            setXY: { x: 20, y: 360, stepX: 180 },
        });
        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        stars2 = this.physics.add.group({
            key: "stars2",
            repeat: 1,
            setXY: {x:200, y:60, stepX:300 },
        })
        stars2.children.iterate(function (child2) {
            child2.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        bombs = this.physics.add.group();
        
        scoreText = this.add.text(40, 555, 'Combustible: 0', { fontSize: '30px Monaco', fill: '#de7e0d'});
        scoreText2 = this.add.text(340, 555, 'Piezas de nave: 0', { fontSize: '30px Monaco', fill: '#de7e0d'});

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(stars2, platforms);
        this.physics.add.collider(bombs, platforms);

        this.physics.add.overlap(player, stars, this.collectStar, null, this);
        this.physics.add.overlap(player, stars2, this.collectStar2, null, this);
        this.physics.add.collider(player, bombs, this.hitBomb, null, this);
    
    }
    update()
    {
        if (gameOver)
        {
            return;
        }
    
        if (cursors.left.isDown)
        {
            player.setVelocityX(-190);
    
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(190);
    
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
    
            player.anims.play('turn');
        }
    
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-200);
        }
      
        if ((stars.countActive(true) === 0) && (stars2.countActive(true) === 0)){
        stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 360, true, true);
        });
        stars2.children.iterate(function (child2) {
            child2.enableBody(true, child2.x, 360, true, true);
        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
        }
        if ((score == 750) && (score2 == 20)){
            this.scene.start("scene4")
        }
    }
    
    collectStar2 (player, stars2){
        stars2.disableBody(true, true);
        score2 += 1;
        scoreText2.setText('Piezas de nave: ' + score2);
        
    }
    collectStar (player, stars){
        stars.disableBody(true, true);
        score += 15;
        scoreText.setText('Combustible: ' + score);
    
    }
    
    hitBomb (player, bomb)
    {
        this.physics.pause();
    
        player.setTint(0xff0000);
    
        player.anims.play('turn');
    
        gameOver = true;
        if (gameOver = true){
            this.scene.start("scene3")
        }
    }
}    