// KMP算法，时间复杂度O(h+n)，参考阮一峰kmp
// 写substr和暴力搜索，不考虑面试么。
// 另外更高效的算法，BM算法(O(h))和Sunday，
// BM算法
// http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html

const strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (haystack === "") return -1;
    let inc = [];
    // 计算偏移量
    for (let i = 0; i < needle.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (needle[j] !== needle[i - j]) {
                inc[i] = j + 1;
                break;
            }
            if (j === i && needle[j] === needle[i - j]) {
                inc[i] = j + 1;
            }
        }
    }
    let i = 0;
    let l = needle.length
    while (i < haystack.length) {
        for (let j = 0; j < l; j++) {
            if (needle[j] !== haystack[i + j]) {
                i += inc[j];
                break;
            }
            if (j === l - 1 && needle[j] === haystack[i + j]) {
                return i;
            }
        }
    }
    return -1;
};

// 作者：user8191
// 链接：https://leetcode-cn.com/problems/implement-strstr/solution/jsde-kmpjie-fa-by-user8191/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。