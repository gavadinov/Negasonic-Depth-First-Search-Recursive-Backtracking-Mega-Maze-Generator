class Cell {
	constructor(x, y) {
        this.x = x;
        this.y = y;

        this.visited = false;

        this.top = true;
        this.right = true;
        this.bottom = true;
        this.left = true;
    }

    /**
     * Visualise the cell on the grid
     */
    show() {
        var x = this.x * cellWidth;
        var y = this.y * cellWidth;
        var w = cellWidth;
        stroke('black');
        if (this.top) {
            line(x, y, x + w, y);
        }
        if (this.bottom) {
            line(x, y + w, x + w, y + w);
        }
        if (this.left) {
            line(x, y, x, y + w);
        }
        if (this.right) {
            line(x + w, y, x + w, y + w);
        }

        if (this.visited) {
            noStroke();
            fill(66, 218, 231, 100);
            rect(x, y, w, w);
        }
    }

    /**
     * So we can track where the algorithm is looking
     */
    highlight() {
        var w = cellWidth/2;
        var x = this.x * cellWidth + w;
        var y = this.y * cellWidth + w;
        fill('red');
        ellipse(x, y, w, w);
    }
}
