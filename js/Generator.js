class Generator {
	constructor(grid) {
		this.stack = [];
		this.grid = grid;
		this.current = grid.get(0, 0);
		this.current.visited = true;
		this.current.top = false;
	}

	/**
	 * Visit a Cell and jump to the next one
	 */
	run() {
		if (this.current) {
			// Get all unvisited neighbours
			var neighbours = this.grid.getNeighbours(this.current.x, this.current.y).filter(n => !n.visited);

			// If we have free neighbours we select a random one and visit it
			if (neighbours.length > 0) {
				this.stack.push(this.current);

				var rand = floor(random(0, neighbours.length)),
					next = neighbours[rand];

				this.grid.destroyWall(this.current, next);
				this.current = next;
				this.current.visited = true;
				this.current.highlight();

			// If we don't have free neighbours we start going back
			} else if (this.stack.length > 0) {
				this.current = this.stack.pop();
				this.current.highlight();
			}
		}
	}
}