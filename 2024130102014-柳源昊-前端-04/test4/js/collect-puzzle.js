
function collectPuzzle(...puzzles) {
    // TODO:在这里写入具体的实现逻辑：通过建立一个空数组，然后遍历输入的二维数组的每一项，只要元素没有出现在新建的数组中，就加入到新数组里，最后返回新数组
    // 对所有的碎片进行收集，获取不同拼图类型的结果，并返回
    const result = [];

    for(var i=0;i<puzzles.length;i++){
      for(var j=0;j<puzzles[i].length;j++)
        if (!result.includes(puzzles[i][j])){
          result.push(puzzles[i][j]);
      }
    }
    return result;
    }
  
  