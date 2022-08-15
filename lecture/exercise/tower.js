let towerCreate = num => {
    let tower = [];
    for(i=1; i<=num; i++){
        let space = ' '.repeat(num - i)
        let star = '*'.repeat(i-1)
        tower.push(space + star + '*' + star + space) 
    }
    return(tower)
}
module.exports = towerCreate

console.log(towerCreate(3))