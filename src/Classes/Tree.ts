import Optional from "./Optional";

type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

/**
 * Represents a binary search tree.
 * @template T - The type of elements stored in the tree.
 */
export default class Tree<T> {
    root: TreeNode<T>;

    /**
     * Creates a new Tree instance.
     * @param {T} value - The value of the root node.
     * @param {(a: T, b: T) => number} compareFunction - The function used to compare elements.
     */
    public constructor(value: T, private readonly compareFunction: (a: T, b: T) => number) {
        this.root = this.createNode(value);
    }

    /** 
     * Creates a new tree node with the given value. 
     * @param {T} value - The value of the node. 
     * @returns {TreeNode<T>} - The created tree node.
     */
    private createNode(value: T): TreeNode<T> {
        return { value };
    }

    /**
     * Inserts a new value into the tree.
     * @param {T} value - The value to insert.
     */
    public insert(value: T): void {
        this.root = this.insertNode(this.root, value);
    }

    /**
     * Recursively inserts a value into the tree.
     * @param {TreeNode<T> | undefined} root - The root node of the subtree.
     * @param {T} value - The value to insert.
     * @returns {TreeNode<T>} - The updated root of the subtree.
     */
    private insertNode(root: TreeNode<T> | undefined, value: T): TreeNode<T> {
        if (!root) {
            return this.createNode(value);
        }

        const comparisonResult = this.compareFunction(value, root.value);

        if (comparisonResult < 0) {
            root.left = this.insertNode(root.left, value);
        } else if (comparisonResult > 0) {
            root.right = this.insertNode(root.right, value);
        }

        return root;
    }

    /**
     * Searches for a value in the tree.
     * @param {T} value - The value to search for.
     * @returns {Optional<TreeNode<T>>} - An Optional containing the found node or undefined.
     */
    public search(value: T): Optional<TreeNode<T>> {
        return Optional.ofNullable(this.searchNode(this.root, value));
    }

    /**
     * Recursively searches for a value in the tree.
     * @param {TreeNode<T> | undefined} root - The root node of the subtree.
     * @param {T} value - The value to search for.
     * @returns {TreeNode<T> | undefined} - The found node or undefined.
     */
    private searchNode(root: TreeNode<T> | undefined, value: T): TreeNode<T> | undefined {
        if (!root || this.compareFunction(value, root.value) === 0) {
            return root;
        }

        if (this.compareFunction(value, root.value) < 0) {
            return this.searchNode(root.left, value);
        }

        return this.searchNode(root.right, value);
    }

    /**
     * Performs an in-order traversal of the tree, applying the callback to each node's value.
     * @param {(value: T) => void} callback - The callback function to apply to each node's value.
     */
    public inOrderTraversal(callback: (value: T) => void): void {
        this.inOrderTraversalNode(this.root, callback);
    }

    /**
     * Recursively performs an in-order traversal of the tree, applying the callback to each node's value.
     * @param {TreeNode<T> | undefined} root - The root node of the subtree.
     * @param {(value: T) => void} callback - The callback function to apply to each node's value.
     */
    private inOrderTraversalNode(root: TreeNode<T> | undefined, callback: (value: T) => void): void {
        if (!root) return;
        this.inOrderTraversalNode(root.left, callback);
        callback(root.value);
        this.inOrderTraversalNode(root.right, callback);
    }

    /**
     * Finds the minimum value in the tree.
     * @returns {Optional<TreeNode<T>>} - An Optional containing the node with the minimum value or undefined.
     */
    public findMin(): Optional<TreeNode<T>> {
        let current = this.root;
        while (current && current.left) {
            current = current.left;
        }
        return Optional.ofNullable(current);
    }

    /**
     * Finds the maximum value in the tree.
     * @returns {Optional<TreeNode<T>>} - An Optional containing the node with the maximum value or undefined.
     */
    public findMax(): Optional<TreeNode<T>> {
        let current = this.root;
        while (current && current.right) {
            current = current.right;
        }
        return Optional.ofNullable(current);
    }
}