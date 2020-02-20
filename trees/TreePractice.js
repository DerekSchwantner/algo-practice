// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function reversePath(element, tree) {
    let path = []
    let pointer = element

    while (pointer.parent) {
        // gets the current position among the current parents child nodes so we dont need to re-traverse down
        const index = pointer.parent.children.indexOf(pointer)
        path.push(index)

        pointer = pointer.parent
    }

    pointer = tree.root

    while (path.length) {
        pointer = pointer.children[path.pop()]
    }
}