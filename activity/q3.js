//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//Example 1:
//Input: n = 3
//Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example to test the function

function arrayToList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}


function printList(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}


let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);

let mergedList = mergeTwoLists(list1, list2);
printList(mergedList);  
