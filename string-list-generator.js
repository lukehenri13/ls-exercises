const createList = (cont, nome = 'Text') => {
    let list = '<ul>\n'
    for( let i = 1; i <= cont; i++) {
        list += `<li> ${nome} ${i} </li>\n`.padStart(3);
    }
    list += '</ul>\n';
    return list;

}


console.log(createList(3));
console.log(createList(5, 'Aluno'));