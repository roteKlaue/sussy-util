import Optional from "./Optional";

type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

export default class Tree<T> {
    root: TreeNode<T>;

    constructor(value: T, private readonly compareFunction: (a: T, b: T) => number) {
        this.root = this.createNode(value);
    }

    private createNode(value: T): TreeNode<T> {
        return { value };
    }

    insert(value: T): void {
        this.root = this.insertNode(this.root, value);
    }

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

    search(value: T): Optional<TreeNode<T>> {
        return Optional.ofNullable(this.searchNode(this.root, value));
    }

    private searchNode(root: TreeNode<T> | undefined, value: T): TreeNode<T> | undefined {
        if (!root || this.compareFunction(value, root.value) === 0) {
            return root;
        }

        if (this.compareFunction(value, root.value) < 0) {
            return this.searchNode(root.left, value);
        }

        return this.searchNode(root.right, value);
    }

    inOrderTraversal(callback: (value: T) => void): void {
        this.inOrderTraversalNode(this.root, callback);
    }

    private inOrderTraversalNode(root: TreeNode<T> | undefined, callback: (value: T) => void): void {
        if (!root) return;
        this.inOrderTraversalNode(root.left, callback);
        callback(root.value);
        this.inOrderTraversalNode(root.right, callback);
    }

    findMin(): Optional<TreeNode<T>> {
        let current = this.root;
        while (current && current.left) {
            current = current.left;
        }
        return Optional.ofNullable(current);
    }

    findMax(): Optional<TreeNode<T>> {
        let current = this.root;
        while (current && current.right) {
            current = current.right;
        }
        return Optional.ofNullable(current);
    }
}