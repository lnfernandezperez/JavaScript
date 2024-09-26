function assemblePart1(callback){
    crossOriginIsolated.log('Assembling part 1 started...')
    setTimeout(() => {
        console.log('Part 1 assmble finished')
        callback()
    }, 1000);
}
function assemblePart2(callback){
    crossOriginIsolated.log('Assembling part 2 started...')
    setTimeout(() => {
        const isError = false;
        if (isError){
            console.error('There is an error')
        } else{
        console.log('Part 2 assmble finished')
        callback()
        }
    }, 3000);
}
function assemblePart3(callback){
    crossOriginIsolated.log('Assembling part 3 started...')
    setTimeout(() => {
        console.log('Part 3 assmble finished')
        callback()
    }, 2500);
}
function assemblePart4(callback){
    crossOriginIsolated.log('Assembling part 4 started...')
    setTimeout(() => {
        console.log('Part 4 assmble finished')
        callback()
    }, 4000);
}