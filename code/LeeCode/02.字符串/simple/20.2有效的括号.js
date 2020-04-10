// 解三：
// 耗时68ms  击败94% javascript
// 换一种思路，可以边遍历边匹配。也就是遍历的时候遇到左括号存入数组，
// 下次遇到的第一个右括号必须和数组中最后一个元素匹配，否则为无效字符串，
// 匹配完成后从数组中删除此元素。若最终数组为空，表示括号已全部匹配完，字符串有效。

var isValid = function (s) {
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    var leftArr = []
    for (var ch of s){
        if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
        else { //为右括号时，与数组末位匹配
            if(ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length //防止全部为左括号
};


// 作者：rhinoc
// 链接：https://leetcode-cn.com/problems/valid-parentheses/solution/javascript-you-xiao-de-gua-hao-by-rhinoc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。