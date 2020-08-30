/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		let newNode = new Node(val);

		/** if LinkedList is empty */
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			/** append to end of list */
			this.tail.next = newNode;
			this.tail = newNode;
		}

		/** increment LinkedList length */
		this.length += 1;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		new newNode() = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length += 1;
	}

	/** pop(): return & remove last item. */

	pop() {
		return this.removeAt(this.length - 1);
	}

	/** shift(): return & remove first item. */

	shift() {
		return this.removeAt(0);
	}

	/** getIdx(idx): retrieve node at idx */

	getIdx(idx) {
		/** set temporary node to be this.head
		 * count will be placeholder for idx
		 */
		let curr = this.head;
		let count = 0;

		/** increment through values if not count !== idx */
		while (curr !== null && count !== idx) {
			count++;
			curr === curr.next;
		}

		// if count === idx, return the value of curr
		return curr;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		/** Check if index is valid */
		if (idx >= this.length || idx < 0) {
			throw new Error('Invalid index');
		}

		return this.getIdx(idx).val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		/** Check if index is valid */
		if (idx >= this.length || idx < 0) {
			throw new Error('Invalid index');
		}

		/** change value */
		let node = this.getIdx(idx);
		node.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		/** Check if index is valid */
		if (idx >= this.length || idx < 0) {
			throw new Error('Invalid index');
		}

		// get node before
		let prev = this.getIdx(idx - 1);

		let newNode = new Node(val);
		newNode.next = prev.next;
		prev.next = newNode;

		this.length += 1;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		/** Check if index is valid */
		if (idx >= this.length || idx < 0) {
			throw new Error('Invalid index');
		}

		// get node before
		let prev = this.getIdx(idx - 1);

		// special case: remove tail
		if (idx === this.length - 1) {
			let val = prev.next.val;
			prev.next = null;
			this.tail = prev;
			this.length -= 1;
			return val;
		}

		// normal case: remove in middle of LinkedList

		// get val to return after removing item at idx
		let val = prev.next.val;
		prev.next = prev.next.next;
		this.length -= 1;
		return val;
	}

	/** average(): return an average of all values in the list */

	average() {
		if (this.length === 0) return 0;

		/** set temporary node to be this.head
		 * count will be placeholder for idx
		 */
		let curr = this.head;
		let count = 0;

		while (curr) {
			count += curr.val;
			curr = curr.next;
		}

		return count / this.length;
	}
}

module.exports = LinkedList;
