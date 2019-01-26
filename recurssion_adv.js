let categories = [
    { id: 'animals', parent: null},
    { id: 'cats', parent: 'animals'},
    { id: 'dogs', parent: 'animals'},
    { id: 'doggo', parent: 'dog'},
    { id: 'kato', parent: 'cat'}
]

let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter( x => x.parent === parent)
        .forEach(c => node[c.id] = makeTree(categories, c.id))
    return node
}

console.log(
    JSON.stringify(
        makeTree(categories, null), null, 2
    )
)