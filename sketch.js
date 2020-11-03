let button1;
let button2;
let slider;
let container;
let radio;

function setup() {

    createCanvas(windowWidth, windowHeight);
    button1 = createButton('Blue');
    button2 = createButton('Red');
    button3 = createButton('Green');

    button1.id('unique-button');
    button2.id('unique-button');
    button3.id('unique-button');

    slider = createSlider(0, 255, 100);

    radio = createRadio();
    radio.option('Arial');
    radio.option('Georgia');
    radio.option('Courier New');

    container = createDiv();
    container.child(button1);
    container.child(button2);
    container.child(button3);
    container.position(windowWidth / 2 - 100, 500);
}

function draw() {

    let val2 = radio.value();
    if (val2 == 'Arial') {
        textFont('Arial');
    } else if (val2 == 'Georgia') {
        textFont('Georgia');
    } else if (val2 == 'Courier New') {
        textFont('Courier New');
    }
    radio.position(windowWidth / 2 - 100, 600);

    background(244, 184, 96);
    text('Change the text.', windowWidth / 2, windowHeight / 2);
    textAlign(CENTER);

    slider.position(windowWidth / 2 - 50, 550);

    button1.mousePressed(changeblue);
    button2.mousePressed(changered);
    button3.mousePressed(changegreen);

    let val = slider.value();
    textSize(val);

}

function changeblue() {
    fill(38, 64, 139);
}

function changered() {
    fill(219, 41, 85);
}

function changegreen() {
    fill(0, 168, 150);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
