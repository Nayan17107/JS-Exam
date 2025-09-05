// Q.1 WAP to check array is palindrome or not using JavaScript (only with Numbers)

// let n1 = [1,2,3,2,1]

// let n2 = n1.slice().reverse();

// if(JSON.stringify(n1) === JSON.stringify(n2)){
//     console.log("It is Palindrome Number");
// }else{
//     console.log("It is Not Palindrome Number");
// }

// Output -> It is Palindrome Number



// Q.2 WAP to Merge two array in single Array using JavaScript.

// let arr1 = [10,20,30]
// let arr2 = [40,50]

// let Ans = [...arr1, ...arr2];

// console.log(Ans)

// Output -> [ 10, 20, 30, 40, 50 ]



// Q.3 WAP to implements Quick Sort using JavaScript.

// let arr = [1,4,5,2,7,8,9,3];

// function quickSort(arr) {
//     if (arr.length <= 1) return arr;

//     let pivot = arr[Math.floor(arr.length / 2)];
//     let left = arr.filter(m => m < pivot);
//     let middle = arr.filter(m => m === pivot);
//     let right = arr.filter(m => m > pivot);

//     return quickSort(left).concat(middle).concat(quickSort(right));
// }

// console.log(quickSort(arr));

// Output -> 

// [
//   1, 2, 3, 4,
//   5, 7, 8, 9
// ]



// Q.4 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function) 


// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }


// class Singlylinklist{
//     constructor(){
//         this.head = null;
//     }

//     appendData(val){
//         let temp = new Node(val);

//         if(this.head == null){
//             this.head = temp;
//         }
//         else{
//             let current = this.head;

//             while (current.next != null) {
//                 current = current.next;
//             }

//             current.next = temp;
//         }
//     }

//     removeData(){
//         if(this.head == null){
//             console.log("Now Everything is Empty");
//         }
//         else if(this.head.next == null){
//             this.head = null;
//         }
//         else{
//             let current = this.head;
//             let prev;

//             while(current.next != null){
//                 prev = current;
//                 current = current.next;
//             }
//             prev.next = null;
//         }
//     }

//     displayData(){
//         if(this.head == null){
//             console.log("List is Empty...");
//         }
//         else{
//             let current = this.head;
//             let data = "";

//             while (current) {
//                 data += current.data + " -> ";
//                 current = current.next;
//             }
//             console.log(data);
//         }
//     }
// };

// let singlylinklist = new Singlylinklist();


// singlylinklist.appendData(10);
// singlylinklist.appendData(20);
// singlylinklist.appendData(30);
// singlylinklist.appendData(40);
// singlylinklist.appendData(50);

// singlylinklist.displayData();

// singlylinklist.removeData();
// singlylinklist.removeData();
// singlylinklist.removeData();
// singlylinklist.removeData();
// singlylinklist.removeData();
// singlylinklist.removeData();

// singlylinklist.displayData();

// Output ->

// 10 -> 20 -> 30 -> 40 -> 50 -> 
// Now Everything is Empty
// List is Empty...



// Q.5 WAP to implement insert and remove element from Queue using JavaScript.

// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     delete() {
//         return this.items.shift();
//     }

//     printQueue() {
//         if(this.items.length === 0){
//             console.log("Queue is Empty!");
//         }else{
//             console.log(this.items.join(" <- "));
//         }
//     }
// }

// let queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// queue.printQueue();   

// queue.delete()
// queue.delete()
// queue.delete()

// queue.printQueue();  

// Output -> 

// 10 <- 20 <- 30
// Queue is Empty!