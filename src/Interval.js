Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return this.start <= interval.start && interval.start <= this.end && this.start <= interval.end  && interval.end <= this.end;
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
	if (this.end < interval.start) {
		return [this, interval];
	} else if (interval.end < this.start) {
		return [interval, this];
	}
	
	var start, end;
	start = this.start < interval.start ? this.start : interval.start;
	end = this.end > interval.end ? this.end : interval.end;
	
	return new Interval(start, end);
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
	if (this.end < interval.start || interval.end < this.start) {
		return null;
	}
	
	var start, end;
	start = this.start < interval.start ? interval.start : this.start;
	end = this.end > interval.end ? interval.end : this.end;
	
	return new Interval(start, end);
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {
	if (this.end < interval.start) {
		return [this, interval];
	} else if (interval.end < this.start) {
		return [interval, this];
	}
	
	var tab = [];
	
	if (this.start === interval.start && this.end === interval.end)
		return tab;

	if (this.start < interval.start)
		tab.push(new Interval(this.start, interval.start-1));
	else
		tab.push(new Interval(interval.start, this.start-1));
	
	if (this.end < interval.end)
		tab.push(new Interval(this.end+1, interval.end));
	else
		tab.push(new Interval(interval.end+1, this.end));
	
	return tab;
};