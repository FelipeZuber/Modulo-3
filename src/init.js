const config = {
    type: Phaser.AUTO,
    width:800,
    height:600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 120 },
            debug: false
        }
    },
    scene:[scene1, scene2, scene3, scene4]
} 

var game = new Phaser.Game(config)
var player;
var stars;
var stars2;
var bombs;
var platforms;
var cursors;
var score = 0;
var score2 = 0;
var gameOver = false;
var scoreText;
var scoreText2;
var collectStar;
var collectStar2;
var hitBomb;
var Win;
