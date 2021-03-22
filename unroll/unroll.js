function unroll(matrix) {
    let arr = [];
    if (matrix.length === 0){
        return arr;
    }
    
    
    while (matrix.length) {
      arr.push(
        ...matrix.shift(),
        ...matrix.map(a => a.pop()),
        ...(matrix.pop() || []).reverse(),
        ...matrix.map(a => a.shift()).reverse()
      );
    }
    return arr;
  }
  
module.exports = unroll;