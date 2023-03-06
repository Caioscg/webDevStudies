const tags = [
    {id: 1, name: "node", note_id:1},
    {id: 2, name: "express", note_id:1},
    {id: 3, name: "react", note_id:1},
    {id: 4, name: "javascript", note_id:2},
    {id: 5, name: "frontend", note_id:2},
]

const newArray1 = tags.map(tag => tag.name)

const newArray2 = tags.map(tag => {
    return {
        name: tag.name
    }
})

const newArray3 = tags.map(tag => {
    return {
        ...tag,
        date: new Date()
    }
})

console.log(newArray1, newArray2, newArray3)