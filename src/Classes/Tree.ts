import Optional from './Optional';

class TreeNode<T> {
	public value: T;
	public left?: TreeNode<T>;
	public right?: TreeNode<T>;

	public constructor(value: T) {
		this.value = value;
	}
}

/**
 * Represents a binary search tree.
 * @template T - The type of elements stored in the tree.
 */
export default class Tree<T> {
	private readonly compare: (a: T, b: T) => number;
	root?: TreeNode<T>;

	/**
     * Creates a new Tree instance.
     * @param {T} value - The value of the root node.
     * @param {(a: T, b: T) => number} compareFunction - The function used to compare elements.
     */
	public constructor(value: T, compareFunction: (a: T, b: T) => number) {
		this.compare = compareFunction;
		this.root = this.createNode(value);
	}

	/** 
     * Creates a new tree node with the given value. 
     * @param {T} value - The value of the node. 
     * @returns {TreeNode<T>} - The created tree node.
     */
	private createNode = (value: T): TreeNode<T> => {
		return new TreeNode(value);
	};

	/**
     * Inserts a new value into the tree.
     * @param {T} value - The value to insert.
     */
	public insert = (value: T): void => {
		this.root = this.insertNode(this.root, value);
	};

	/**
     * Recursively inserts a value into the tree.
     * @param {TreeNode<T> | undefined} root - The root node of the subtree.
     * @param {T} value - The value to insert.
     * @returns {TreeNode<T>} - The updated root of the subtree.
     */
	private insertNode = (root: TreeNode<T> | undefined, value: T): TreeNode<T> => {
		if (!root) return this.createNode(value);

		const comparison = this.compare(value, root.value);

		if (comparison < 0) {
			root.left = this.insertNode(root.left, value);
		} else if (comparison > 0) {
			root.right = this.insertNode(root.right, value);
		}

		return root;
	};

	/**
     * Searches for a value in the tree.
     * @param {T} value - The value to search for.
     * @returns {Optional<TreeNode<T>>} - An Optional containing the found node or undefined.
     */
	public search = (value: T): Optional<TreeNode<T>> => {
		return Optional.ofNullable(this.searchNode(this.root, value));
	};

	/**
     * Recursively searches for a value in the tree.
     * @param {TreeNode<T> | undefined} root - The root node of the subtree.
     * @param {T} value - The value to search for.
     * @returns {TreeNode<T> | undefined} - The found node or undefined.
     */
	private searchNode = (root: TreeNode<T> | undefined, value: T): TreeNode<T> | undefined => {
		if (!root) return undefined;

		const comparison = this.compare(value, root.value);
		if (comparison === 0) return root;
		if (comparison < 0) return this.searchNode(root.left, value);

		return this.searchNode(root.right, value);
	};

	/**
     * Performs an in-order traversal of the tree, applying the callback to each node's value.
     * @param {(value: T) => void} callback - The callback function to apply to each node's value.
     */
	public inOrderTraversal = (callback: (value: T) => void): void => {
		this.inOrderTraversalNode(this.root, callback);
	};

	/**
     * Recursively performs an in-order traversal of the tree.
     * @param {TreeNode<T> | undefined} root - The root node of the subtree.
     * @param {(value: T) => void} callback - The callback function to apply to each node's value.
     */
	private inOrderTraversalNode = (root: TreeNode<T> | undefined, callback: (value: T) => void): void => {
		if (!root) return;
		this.inOrderTraversalNode(root.left, callback);
		callback(root.value);
		this.inOrderTraversalNode(root.right, callback);
	};

	/**
     * Performs a pre-order traversal of the tree, applying the callback to each node's value.
     * @param {(value: T) => void} callback - The callback function to apply to each node's value.
     */
	public preOrderTraversal = (callback: (value: T) => void): void => {
		this.preOrderTraversalNode(this.root, callback);
	};

	/**
     * Recursively performs a pre-order traversal of the tree.
     * @param {TreeNode<T> | undefined} root - The root node of the subtree.
     * @param {(value: T) => void} callback - The callback function to apply to each node's value.
     */
	private preOrderTraversalNode = (root: TreeNode<T> | undefined, callback: (value: T) => void): void => {
		if (!root) return;
		callback(root.value);
		this.preOrderTraversalNode(root.left, callback);
		this.preOrderTraversalNode(root.right, callback);
	};

	/**
     * Performs a post-order traversal of the tree, applying the callback to each node's value.
     * @param {(value: T) => void} callback - The callback function to apply to each node's value.
     */
	public postOrderTraversal = (callback: (value: T) => void): void => {
		this.postOrderTraversalNode(this.root, callback);
	};

	/**
     * Recursively performs a post-order traversal of the tree.
     * @param {TreeNode<T> | undefined} root - The root node of the subtree.
     * @param {(value: T) => void} callback - The callback function to apply to each node's value.
     */
	private postOrderTraversalNode = (root: TreeNode<T> | undefined, callback: (value: T) => void): void => {
		if (!root) return;
		this.postOrderTraversalNode(root.left, callback);
		this.postOrderTraversalNode(root.right, callback);
		callback(root.value);
	};

	/**
     * Finds the minimum value in the tree.
     * @returns {Optional<TreeNode<T>>} - An Optional containing the node with the minimum value or undefined.
     */
	public findMin = (): Optional<TreeNode<T>> => {
		let current: TreeNode<T> | undefined = this.root;
		while (current?.left) current = current.left;
		return Optional.ofNullable(current);
	};

	/**
     * Finds the maximum value in the tree.
     * @returns {Optional<TreeNode<T>>} - An Optional containing the node with the maximum value or undefined.
     */
	public findMax = (): Optional<TreeNode<T>> => {
		let current: TreeNode<T> | undefined = this.root;
		while (current?.right) current = current.right;
		return Optional.ofNullable(current);
	};

	/**
     * Removes a value from the tree if it exists.
     * @param {T} value - The value to remove.
     */
	public remove = (value: T): void => {
		this.root = this.removeNode(this.root, value);
	};

	/**
     * Recursively removes a node from the tree.
     * @param {TreeNode<T> | undefined} root - The root node of the subtree.
     * @param {T} value - The value to remove.
     * @returns {TreeNode<T> | undefined} - The updated subtree root.
     */
	private removeNode = (root: TreeNode<T> | undefined, value: T): TreeNode<T> | undefined => {
		if (!root) return undefined;

		const comparison = this.compare(value, root.value);
		if (comparison < 0) {
			root.left = this.removeNode(root.left, value);
		} else if (comparison > 0) {
			root.right = this.removeNode(root.right, value);
		} else {
			// Value found
			if (!root.left && !root.right) return undefined; 
			if (!root.left) return root.right; 
			if (!root.right) return root.left; 

			// Node with two children: get the inorder successor
			const successor = this.getMinNode(root.right);
			if (successor) {
				root.value = successor.value;
				root.right = this.removeNode(root.right, successor.value);
			}
		}

		return root;
	};

	/**
     * Gets the node with the minimum value in the subtree.
     * @param {TreeNode<T>} root - The root node of the subtree.
     * @returns {TreeNode<T> | undefined} - The node with the minimum value.
     */
	private getMinNode = (root: TreeNode<T>): TreeNode<T> | undefined => {
		let current: TreeNode<T> | undefined = root;
		while (current?.left) current = current.left;
		return current;
	};
}
