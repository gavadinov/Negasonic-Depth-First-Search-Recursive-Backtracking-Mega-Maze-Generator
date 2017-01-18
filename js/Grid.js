class Grid {
	constructor(rows, cols) {
		this.matrix = [];
		this.rows = rows;
		this.cols = cols;

		this.fill();
	}

	/**
	 * Get a cell from the matrix
	 *
	 * @param x
	 * @param y
	 * @returns Cell
	 */
	get(x, y) {
		if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
			return undefined;
		}

		return this.matrix[x][y];
	}

	/**
	 * Fill the matrix with Cell objects
	 */
	fill() {
		for (var x = 0; x < this.cols; x++) {
			this.matrix[x] = [];
			for (var y = 0; y < this.rows; y++) {
				this.matrix[x][y] = new Cell(x, y);
			}
		}
	}

	/**
	 * Show all Cell objects on the grid
	 */
	show() {
		for (var x = 0; x < this.cols; x++) {
			for (var y = 0; y < this.rows; y++) {
				this.matrix[x][y].show();
			}
		}
	}

	/**
	 * Destroy a wall between two cells
	 *
	 * @param c1
	 * @param c2
	 */
	destroyWall(c1, c2) {
		var xDiff = c1.x - c2.x;
		var yDiff = c1.y - c2.y;
		if (xDiff < 0) {
			c1.right = false;
			c2.left = false;
		} else if(xDiff > 0) {
			c1.left = false;
			c2.right = false;
		} else if(yDiff < 0) {
			c1.bottom = false;
			c2.top = false;
		} else if(yDiff > 0) {
			c1.top = false;
			c2.bottom = false;
		}
	}

	/**
	 * Get all the neighbours of a given Cell
	 *
	 * @param x
	 * @param y
	 * @returns {Array.<Cell>}
	 */
	getNeighbours(x, y) {
		var neighbours = [];

		neighbours.push(this.get(x-1, y));
		neighbours.push(this.get(x+1, y));
		neighbours.push(this.get(x, y-1));
		neighbours.push(this.get(x, y+1));


		return neighbours.filter(cell => cell != undefined);
	}
}