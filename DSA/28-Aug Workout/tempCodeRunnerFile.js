  printAllWords(curr= this.root, word='', result=[]){
//     if(curr.endOfWord && Object.entries(curr.children).length===0){
//         return result.push(word)
//     }else if(curr.endOfWord){
//         result.push(word)
//     }

//     for(let c in curr.children){
//         this.printAllWords( curr.children[c] , word+c, result  )
//     }
//     return result
// }