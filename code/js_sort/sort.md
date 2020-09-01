## 十大排序算法汇总

- [景禹](https://mp.weixin.qq.com/s?__biz=MzA4NDE4MzY2MA==&mid=2647522161&idx=1&sn=a2f98bcdd86f31425994cdbe339dc4bb&chksm=87d24472b0a5cd645e2df1dd372cd88097b73c759e36231d2ce2821ff11fe46553771f5dbad8&mpshare=1&scene=1&srcid=0819Vj2BhhvQBfgl2XEWhVGc&sharer_sharetime=1597816536684&sharer_shareid=f8d25c6b3b3b5f92cb53a2ecd9878784&key=5bf60a20aea657272f49b2acda3c43427c2ce133373558067c001492efe5c821ca70ccf1785682ec985f4161cf999d25b9b8d022fa818a87332ca5d755db1e4f490b8a02b3baac72a86d258b2b6d180ce14e5aa30a4653045d73b1f8ad4abfcf6ef8d12445c485098b405b6beac54d52ed6cf5c4cab974a60d81aea2b4427f4a&ascene=1&uin=MTg0NzI0OTQwMA%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=AT8BtWaapdgCisn2K1eJi5M%3D&pass_ticket=O5MXXXABkxaoroaRUJaxOlOhlBNfHr1bw33QCmRyTrTfx7B6wAlWKzO0gUuryZmI)

- 就地排序（in-place sorting）

  - 定义：一个就地排序算法使用恒定的的额外空间来产生输出（仅修改给定的数组）。它仅通过修改线性表中元素的顺序来对线性表进行排序。
  - 插入排序（Insertion Sort）和选择排序（Selection Sort）

- 内部排序和外部排序

  - 当所有待排序记录不能被一次载入内存进行处理时，这样的排序就被称为外部排序。
  - 外部排序通常应用在待排序记录的数量非常大的时候。
  - 归并排序以及它的变体都是典型的外部排序算法。
  - 外部排序通常与硬盘、CD 等外部存储器（辅存）关联在一起。

- 稳定排序
  - 当我们对可能存在重复键的键值对（例如，人名作为键，其详细信息作为值）按照键对这些对象进行排序时，稳定性就显得至关重要。
  + 如何判定一个排序算法的是稳定的呢？
    - 如果两个具有相等关键字的对象在排序前后的相对位置没有发生变化，则认为排序算法是稳定的。
  + 哪些排序算法是稳定的呢？
    - 冒泡排序（Bubble Sort）、插入排序（Insertion Sort）、归并排序（Merge Sort）和计数排序（Counting Sort）等本身就具有稳定排序的特质。
  + 哪些排序算法是不稳定的呢？
    - 快速排序（Quick Sort）和 堆排序（Heap Sort）等就是不稳定的排序算法，但是这些排序算法可以通过将元素的相对次序考虑进来而变得稳定，方法就是空间换时间，开辟一些额外的空间（大概 ) 以实现稳定性。
  + 是否可以使任何排序算法都变得稳定呢？
    - 任何排序算法都可以通过指定的方式变得稳定，可以通过修改键值的比较操作将本质上不稳定的任何基于比较的排序算法修改为稳定，保证键值相等的两个元素在排序前后的相对位置不变。
