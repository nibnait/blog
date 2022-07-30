---
category: 算法
title: 03 单双链表、栈和队列、递归和Master公式、哈希表和有序表的使用和性能
tag: [algorithm, 左神-体系学习班, 链表, 栈, 队列]
---
# 03 单双链表、栈和队列、递归和Master公式、哈希表和有序表的使用和性能

## 内容：
- 单链表、双链表
- 栈、队列
- 递归的物理实质
- 评估递归复杂度的Master公式
- 哈希表的使用和性能
- 有序表的使用和性能

## 题目：

### 考察coding能力：
#### 反转单链表、反转双链表
[Code01_1_ReverseListNode.java](https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/algorithmzuo/b_%E4%BD%93%E7%B3%BB%E5%AD%A6%E4%B9%A0%E7%8F%AD/class03/Code01_1_ReverseListNode.java)  
[Code01_2_ReverseDoubleListNode.java](https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/algorithmzuo/b_%E4%BD%93%E7%B3%BB%E5%AD%A6%E4%B9%A0%E7%8F%AD/class03/Code01_2_ReverseDoubleListNode.java)
#### 在链表中删除指定值的所有节点
[Code02_DeleteGivenValue.java](https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/algorithmzuo/b_%E4%BD%93%E7%B3%BB%E5%AD%A6%E4%B9%A0%E7%8F%AD/class03/Code02_DeleteGivenValue.java)

### 用双链表实现栈和队列
[Code03_DoubleEndsQueueToStackAndQueue.java](https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/algorithmzuo/b_%E4%BD%93%E7%B3%BB%E5%AD%A6%E4%B9%A0%E7%8F%AD/class03/Code03_DoubleEndsQueueToStackAndQueue.java)

### 用环形数组实现队列
[Code04_RingArray.java](https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/algorithmzuo/b_%E4%BD%93%E7%B3%BB%E5%AD%A6%E4%B9%A0%E7%8F%AD/class03/Code04_RingArray.java)

### 实现有getMin功能的栈
[Code05_GetMinStack.java](https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/algorithmzuo/b_%E4%BD%93%E7%B3%BB%E5%AD%A6%E4%B9%A0%E7%8F%AD/class03/Code05_GetMinStack.java)

### 两个栈实现队列
[Code06_TwoStacksImplementQueue.java](https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/algorithmzuo/b_%E4%BD%93%E7%B3%BB%E5%AD%A6%E4%B9%A0%E7%8F%AD/class03/Code06_TwoStacksImplementQueue.java)

### 两个队列实现栈
[Code07_TwoQueueImplementStack.java](https://github.com/nibnait/algorithms/blob/master/src/main/java/algorithm_practice/algorithmzuo/b_%E4%BD%93%E7%B3%BB%E5%AD%A6%E4%B9%A0%E7%8F%AD/class03/Code07_TwoQueueImplementStack.java)

### 用递归行为得到数组中的最大值，并用master公式来估计时间复杂度
Master 公式：  
形如 T(N) = a * T(N/b) + O(N^d) （a、b、d都是常数）的递归函数，可以直接通过 Master 公式来确定时间复杂度  
 - 如果 log(b,a) < d, 复杂度为 O(N^d)
 - 如果 log(b,a) > d, 复杂度为 O(N^log(b,a))
 - 如果 log(b,a) == d, 复杂度为 O(N^d * logN)


