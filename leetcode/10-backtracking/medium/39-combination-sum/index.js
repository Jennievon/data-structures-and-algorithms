var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function combinationSum(candidates, target) {
    var result = [];
    backtrack([], 0, target);
    return result;
    function backtrack(combination, start, remain) {
        if (remain < 0) {
            return;
        }
        else if (remain === 0) {
            result.push(__spreadArray([], combination, true));
        }
        else {
            for (var i = start; i < candidates.length; i++) {
                combination.push(candidates[i]);
                backtrack(combination, i, remain - candidates[i]);
                combination.pop();
            }
        }
    }
}
// Example usage
var candidates = [2, 3, 6, 7];
var target = 7;
var result = combinationSum(candidates, target);
console.log(result); // Output: [[0, 3], [1, 6], [2, 7], [4, 5]]
