class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    add(node) {
        this.next = node;
        return node;
    }
}

function AddTwoNumbers(list1, list2) {
    let result = new ListNode(0);
    let flag = 0;

    while (list1 != null && list2 != null) {

        let sum = list1.val + list2.val + flag;

        flag = sum > 10 ? 1 : 0;

        result.add(new ListNode(sum % 10));

        list1 = list1.next;
        list2 = list2.next;
    }

    while (list1 != null) {
        let sum = list1.val + flag;
        flag = sum > 10 ? 1 : 0;
        result.add(new ListNode(sum % 10));
        list1 = list1.next;
    }

    while (list2 != null) {
        let sum = list2.val + flag;
        flag = sum > 10 ? 1 : 0;
        result.add(new ListNode(sum % 10));
        list2 = list2.next;
    }

    if (flag > 0) {
        result.add(new ListNode(1));
    }

    return result.next;
}


test('test1', () => {

    let num1 = new ListNode(2);
    num1.add(new ListNode(4))
        .add(new ListNode(3));

    let num2 = new ListNode(5);
    num2.add(new ListNode(6))
        .add(new ListNode(4));

    let result = AddTwoNumbers(num1, num2);

    console.log(result)

    // expect(result.val).toBe(7);
    // expect(result.next.val).toBe(0);
    // expect(result.next.next.val).toBe(8);

})


