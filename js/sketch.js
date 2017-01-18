var grid,
	generator;

function setup() {
	createCanvas(800, 800);
	frameRate(15);

	cols = floor(width / cellWidth);
	rows = floor(height / cellWidth);
	grid = new Grid(rows, cols);
	generator = new Generator(grid);
}

function draw() {
	background('gray');

	generator.run();

	grid.show();
}
