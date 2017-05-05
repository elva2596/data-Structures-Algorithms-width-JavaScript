/**
 * Created by 路路 on 2017/5/2.
 */
/*
var arr = [1,2,3,4,5,6];
var newArr = [7,8,9];
arr.splice(1,1,newArr);
console.log(arr);
*/

/*
创建二维和多维数组

Array.matrix = function (rowsLen,colLen,iniatial){
    var arr = [];
    for(var i=0;i<rowsLen;i++){
        var cols = [];
        for(var j=0;j<colLen;j++){
            cols[j] = iniatial
        }
        arr[i] = cols;
    }
    return arr;
};

var arr = Array.matrix(3,3,10)
console.log(arr)
*/

/*
    处理二维数组的元素
 */
var grades = [
    [89,77,78],
    [76,82,81],
    [91,94,89]
];
var total = 0,
    ave = 0.0;
/*
1.行列访问，外层循环是行，内层循环是列

for(var row =0;row<grades.length;row++){
    for(var col=0;col<grades[row].length;col++){
        total+=grades[row][col]
    }
    ave+=total/grades[row].length;
    console.log(total)
    console.log(ave)
    total=0;
    ave=0.0
}
*/

/*
    按行访问:外层循环是列，内层循环是行
 */
for(var col=0;col<grades.length;col++){
    for(var row=0;row<grades[col].length;row++){
        total+=grades[row][col]
    }
    ave = total/grades[col].length
    console.log(total)
    console.log(ave)
    ave = 0.0
    total = 0
}


