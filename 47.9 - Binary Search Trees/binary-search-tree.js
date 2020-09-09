class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		// new node
		const node = new Node(val);

		// if tree is empty, insert at root
		if (!this.root) {
			this.root = node;
			return this;
		}

		// else find correct spot for new Node
		let current = this.root;
		while (true) {
			// if val is less than root
			if (val < current.val) {
				// if left is empty, place new Node inside
				if (current.left === null) {
					current.left = node;
					return this;
				}
			} else if (val > current.val) {
				if (current.right === null) {
					current.right = node;
					return this;
				} else {
					current = current.right;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val, current = this.root) {
		// new node
		const node = new Node(val);

		// if tree is empty, insert at root
		if (!this.root) {
			this.root = node;
			return this;
		}

		// check left side
		if (val < current.val) {
			// if left side is empty, insert new node
			if (current.left === null) {
				current.left = node;
				return this;
			} else {
				// continue to check left side
				return this.insertRecursively(val, current.left);
			}
		} else {
			// if right side is empty, insert new node
			if (current.right === null) {
				current.right = node;
				return this;
			} else {
				// continue down right side
				return this.insertRecursively(val, current.right);
			}
		}
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		let currentNode = this.root;
		let found = false;

		if (currentNode.val === val) return currentNode;

		while (currentNode && !found) {
			// if val is less than current node check left side
			if (val < current.val) {
				currentNode = current.left;
			} else if (val > current.val) {
				// if val is greater than current node check right side
				currentNode = current.right;
			} else {
				// else val is found
				found = true;
			}
		}

		if (!found) return undefined;
		return currentNode;
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val, current = this.root) {
		if (this.root === null) return undefined;

		if (val < current.val) {
			if (current.left === null) return undefined;
			return this.findRecursively(val, current.left);
		} else if (val > current.val) {
			if (current.right == null) return undefined;
			return this.findRecursively(val, current.right);
		}
		return current;
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder() {
		let data = [];
		let current = this.root;

		function traverse(node) {
			data.push(node.val); // visit
			node.left && traverse(node.left); // go left if there's a left
			node.right && traverse(node.right); // go right if there's a right
		}

		traverse(current);
		return data;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder() {
		let data = [];
		let current = this.root;

		function traverse(node) {
			node.left && traverse(node.left); // go left if there's a left
			data.push(node.val); // visit
			node.right && traverse(node.right); // go right if there's a right
		}

		traverse(current);
		return data;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder() {
		let data = [];
		let current = this.root;

		function traverse(node) {
			node.left && traverse(node.left); // go left if there's a left
			node.right && traverse(node.right); // go right if there's a right
			data.push(node.val); // visit
		}

		traverse(current);
		return data;
	}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {
		let node = this.root;
		let queue = [];
		let data = [];

		que.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		return data;
	}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
