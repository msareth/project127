song1 = ''
song2 = ''

function preload() {
  song1 = loadSound('Bon_Bon_Chocolat_EVERGLOW.mp3')
  song2 = loadSound('Mixed_Up_ENHYPEN.mp3')
}

function setup() {
  canvas = createCanvas(500, 500)
  canvas.center()

  video = createCapture(VIDEO)
  video.hide()
}

function draw() {
  image(video, 0, 0, 500, 500)
}
