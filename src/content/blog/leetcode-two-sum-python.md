---
title: "LeetCode 笔记：Two Sum (Python)"
date: "2026-02-19"
summary: "经典两数之和，哈希表一次遍历解法与复杂度分析。"
---

题目：给定整数数组 `nums` 和整数 `target`，返回**两个数的索引**，使它们相加等于 `target`。

## 思路

使用哈希表记录“数值 → 索引”。遍历数组时，检查 `target - num` 是否已出现：

- 出现过：直接返回答案
- 没出现：把当前数字加入哈希表

## 代码（Python）

```python
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        need = target - num
        if need in seen:
            return [seen[need], i]
        seen[num] = i
```

## 复杂度

- 时间复杂度：`O(n)`
- 空间复杂度：`O(n)`

## 小结

这是最常见的哈希表模板题，后续的变种（如 3Sum、4Sum）通常会在排序 + 双指针上扩展。
