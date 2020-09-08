/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues() {
		if (!this.root) return null;

		// get value of root node
		let total = this.root.val;

		function sumHelper(node) {
			// go through all children for a Node
			for (let child of node.children) {
				// accumulate all values
				total += child.val;
				// if child has children
				if (child.children.length > 0) {
					// recurse with the child as the root
					return sumHelper(child);
				}
			}
		}
		sumHelper(this.root);
		return total;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {
		if (!this.root) return null;

		let count = this.root.val % 2 === 0 ? 1 : 0;

		function countEvensHelper(node) {
			// go through all children for a Node
			for (let child of node) {
				// accumulate how many values are even numbers
				if (child.val % 2 === 0) count++;
				// if child has any children
				if ((child, children.length > 0)) {
					return countEvensHelper(child);
				}
			}
		}
		countEvensHelper(this.root);
		return count;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound) {}
}

module.exports = { Tree, TreeNode };
