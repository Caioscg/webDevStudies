const tags = [
    {id: 1, name: "node", note_id:1},
    {id: 2, name: "express", note_id:1},
    {id: 3, name: "react", note_id:1},
    {id: 4, name: "javascript", note_id:2},
    {id: 5, name: "frontend", note_id:2},
];
  
const newArray = tags.filter(tag => tag.note_id === 2)
  
console.log(newArray)