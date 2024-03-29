---
title: MySQL索引原理
author: chaizz
date: 2021-11-13 17:50:17
tags: MySQL
categories: MySQL
photo: ["https://origin.chaizz.com/tc/Snipaste_2021-10-08_22-12-28.png"]
---

​                

<!--more-->



#  MySQL索引原理

  

  

> 索引是帮助MySQL高效获取数据的排好序的数据结构。

**在MySQL的InnoDB和MyISAM存储引擎中索引的数据结构都是B+树和HASH。**

**首先说数据结构中的一些树，比较常见的有二叉树、二叉查找树、平衡二叉树、红黑树、B树、B+树等。**



## 二叉树

定义：是N（N>=0）个节点的有限集合。该集合或者为空集（称为空二叉树），或者由一个根结点和两棵互不相交的、分别称为根结点的左子树和右子树组成。



![图片](https://origin.chaizz.com/f387e3b8447411ec9d7c5254006b8f1d.png)



<center> 普通二叉树（图源网络）</center>

特点：

- 每个结点最多有两颗子树，所以二叉树中不存在度大于2的结点。
- 左子树和右子树是有顺序的，次序不能任意颠倒。
- 即使树中某结点只有一棵子树，也要区分它是左子树还是右子树

二叉树又有满二叉树和完全二叉树，在此不做详解。

## 二叉查找树

定义：二叉排序树（Binary Sort Tree），又称二叉查找树（Binary Search Tree），亦称二叉搜索树。是数据结构中的一类。在一般情况下，查询效率比链表结构要高。

特点

- 若左子树不空，则左子树上所有结点的值均小于它的根结点的值；
- 若右子树不空，则右子树上所有结点的值均大于它的根结点的值；
- 左、右子树也分别为二叉排序树；
- 没有键值相等的结点。



![图片](https://origin.chaizz.com/09ef2b34447511ec9d7c5254006b8f1d.png)

<center>二叉查找树（图源网络）</center>



## 平衡二叉树

定义：平衡二叉树（AVL树）在符合二叉查找树的条件下，还满足任何节点的两个子树的高度最大差为1。

特点：

- 非叶子节点最多拥有两个子节点；
- 非叶子节点值大于左边子节点、小于右边子节点；
- 树的左右两边的层级数相差不会大于1;
- 没有值相等重复的节点;

![图片](https://origin.chaizz.com/1d670808447511ec9d7c5254006b8f1d.png)

<center>平衡二叉树（图源网络）</center>





## 红黑树

定义：红黑树是一种含有红黑结点并能**自平衡**的二叉查找树。它必须满足下面性质：

- 性质1：每个节点要么是黑色，要么是红色。
- 性质2：根节点是黑色。
- 性质3：每个为NIL叶子节点是黑色。
- 性质4：每个红色结点的两个子结点一定都是黑色。
- 性质5：任意一结点到每个叶子结点的路径都包含数量相同的黑结点。
- 如果一个结点存在黑子结点，那么该结点肯定有两个子结点。



红黑树通过三种操作实现自平衡：左旋、右旋、变色。

左旋：以某个结点作为支点(旋转结点)，其右子结点变为旋转结点的父结点，右子结点的左子结点变为旋转结点的右子结点，左子结点保持不变。如下图所示。



![图片](https://origin.chaizz.com/4b99132e447511ec9d7c5254006b8f1d.png)

<center>左旋（图源网络）</center>



右旋：以某个结点作为支点(旋转结点)，其左子结点变为旋转结点的父结点，左子结点的右子结点变为旋转结点的左子结点，右子结点保持不变。如下图所示。

![图片](https://origin.chaizz.com/5da9ea52447511ec9d7c5254006b8f1d.png)

<center>右旋（图源网络）</center>

## B 树

定义：是一种多路平衡查找树（不是二叉树），是一种自平衡的树，能够保持数据有序。这种数据结构能够让查找数据、顺序访问、插入数据及删除的动作，都在对数时间内完成。B树，概括来说是一个一般化的二叉查找树（binary search tree），可以拥有多于2个子节点。与自平衡二叉查找树不同，B树为系统大块数据的读写操作做了优化。B树减少定位记录时所经历的中间过程，从而加快存取速度。B树这种数据结构可以用来描述外部存储。这种数据结构常被应用在数据库和文件系统的实现上。

特点：

- 根结点至少有两个子节点。
- 每个中间节点都包含k-1个元素和k个孩子，其中 m/2 <= k <= m 。
- 每一个叶子节点都包含k-1个元素，其中 m/2 <= k <= m 。
- 所有的叶子结点都位于同一层。
- 每个节点中的元素从小到大排列，节点当中k-1个元素正好是k个孩子包含的元素的值域分划。

![图片](https://origin.chaizz.com/7a76deec447511ec9d7c5254006b8f1d.jpeg)

<center>B 树（图源网络）</center>





## B+树

定义：B+树是B树的变种，在b树特点的基础上修改了一些特点。

B+树的特点:

1. 拥有B树的特点.。
2. 叶子结点之间有指针连接。
3. 非叶子节点不存储数据。
4. 非叶子节点的元素,在叶子节点上都冗余了,也就是叶子结点存储了所有的元素,并且已经排好序。

![图片](https://origin.chaizz.com/8e88e36c447511ec9d7c5254006b8f1d.png)

<center>B+树（图源网络）</center>



> Mysql 的索引使用的是B+树,因为索引是用来加速查询的，而B+树通过对数据进行排序,是可以提高查询速度的,然后通过一个节点中可以存储多个元素，从而使得B+树的高度不会太高,在Mysql中的一个innodb页就是一个B+树节点,一个innodb页默认为16kb，所以一般情况下B+树可以存大概两千多万行的数据,然后通过利用B+数叶子结点存储了所有的数据并且进行了排序,并且叶子结点之间有指针，可以很好的支持全表扫描,范 围查询等SQL语句。



MyISAM 引擎的**主键**索引实现是B+树，存放在.myi 文件中。索引文件和数据文件是分开存储的。（非聚集索引）

![图片](https://origin.chaizz.com/9a83ff08447511ec9d7c5254006b8f1d.png)



InnoDB 引擎**主键**索引实现（聚集索引）。

表数据文件本身就是按照一个B+树组织的一个索引文件结构，存储在 .idb 文件中。

![图片](https://origin.chaizz.com/a92ff2a0447511ec9d7c5254006b8f1d.png)



**引出的问题：**

**1、MyISAM 和 InnoDB 都是B+树结构他们的区别在哪里？**

- myisam 索引文件和数据文件是分开存储的，即非聚集索引，所以B+树的叶子结点存储的数据文件的指针。
- innodb 索引文件和数据文件存储在一个文件中，即聚集索引，该文件结构是按照一个B+树组织的一个索引文件结构。所以叶子节点直接存储的就是数据。



**2、为什么建议InnoDB引擎的表必须设置主键，并且推荐使用自增主键？**

- 因为Mysql的索引就是一个B+树组织的文件，如果没有设置主键，Mysql 会主动找表里面唯一的列，如果没有则会自己创建一个虚拟列，来维护B+树的索引值。在B+树的同一层节点中节点值是连续的从左到右增大。使用自增主键在B+树中进行对比查找效率更高，存储空间更小。如果使用UUID，判断连续需要占用大量的计算。

  

**3、为什么非主键索引结构叶子结点存储的是主键值？**

- 因为B+树的节点都是有序的，如果是非自增的主键，在插入的时候会导致性能下降。

  

## Hash 索引结构

定义：Hash 索引是将索引键通过 Hash 运算之后，将 Hash运算结果的 Hash 值和所对应的行指针信息存放于一个 Hash 表中。hash索引基于哈希表实现，只有精确匹配索引所有列的查询才有效。Memory引擎默认使用的是此种索引。



特点：

- hash 索引结构的特殊性，其检索效率非常高，索引的检索可以一次定位，不像B-Tree 索引需要从根节点到枝节点，最后才能访问到页节点这样多次的IO访问，所以 Hash 索引的查询效率要远高于 B-Tree 索引。



- Hash 索引仅仅能满足"=","IN"和"<=>"查询，不能使用范围查询。



- Hash 索引中存放的是经过 Hash 计算之后的 Hash 值，而且Hash值的大小关系并不一定和 Hash 运算前的键值完全一样，所以数据库无法利用索引的数据来避免任何排序运算；



- Hash 索引遇到大量Hash值相等的情况后性能并不一定就会比B-Tree索引高。



![图片](https://origin.chaizz.com/b71e58b6447511ec9d7c5254006b8f1d.png)



Hash 索引结构和B+树索引结构的区别就是 hash索引结构的特点。



联合索引结构：

- 命名规则：表名_字段
- 需要加索引的字段，要在where条件中
- 数据量少的字段不需要加索引
- 如果where条件中是OR关系，加索引不起作用
- 符合最左前缀原则

联合索引又叫复合索引。对于复合索引:MySQL从左到右的使用索引中的字段，一个查询可以只使用索引中的一部分，但只能是最左侧部分。例如索引是key index (a,b,c). 可以支持a |  a,b | a,b,c 3种组合进行查找，但不支持 b,c进行查找 ，当最左侧字段是常量引用时，索引就十分有效。

![图片](https://origin.chaizz.com/tc/640)



## 索引的优点：

- 大大的加快数据查询速度。



## 索引的缺点：

- 索引文件需要维护，消耗数据库资源。
- 可能会占用大量磁盘空间。
- 当对表的数据进行修改/删除时，会影响效率。（数据库需要对索引结构进行维护）



## 索引的分类：

### 主键索引

- 设定主键后数据库会自动设置索引，无需手动创建。innodb为聚集索引。

- 如果不指定主键，数据库会自动查找一列非空的列，设置为主键索引，如果没有唯一数据，数据库则会自动创建一个类似于row_id 来当做主键 索引。

- 唯一且非空。



### 单列索引（单值索引、普通索引）

- 即一个索引只包含一个列，一个表可以有多个单列索引。

  

### 唯一索引

- 索引的值必须是唯一的，但是允许为空，只允许一个空值。

  

### 复合索引

- 即一个索引包含多个列。
- 遵循最左前缀原则。但是数据库也会自适应最左前缀。



### Full Text （全文索引，只能用于MyISAM ）

- 全文索引类型为Full Text ,在定义的索引的列上支持全文查找，允许在这些列上插入重复值和空值。全文索引可以在CHAR、VARCHAR、TEXT类型上创建。

1. 

## **索引的基本操作**

### 创建普通索引的方式：

1. 建表之后创建：
2. ```sql
   # 建表
   create table index_user ( 
       id INT PRIMARY KEY, NAME VARCHAR ( 20 ) 
   );
   # 为表的某个字段创建索引格式：
   
   create index 索引名 on 表名（表的某一列）
   
   create index name_index on index_user(name);
   
   # 查看索引
   show index from index_user;
   ```

3. ![图片](https://origin.chaizz.com/tc/640)

4. 

5. 建表时创建索引：
6. 创建表无法指定索引名字，索引名默认为列名。

7. ```sql
   CREATE TABLE index_user_1 ( id INT PRIMARY KEY, NAME VARCHAR ( 20 ), KEY ( NAME ) );
   ```

8. ![图片](https://origin.chaizz.com/tc/640)

9. 

### 创建唯一索引的方式：

1. 建表之后创建索
2. ```sql
   CREATE UNIQUE INDEX id_card_index ON index_user_2 ( id_card );
   ```

3. ![图片](https://origin.chaizz.com/tc/640)

4. 

5. 建表时创建索引
6. ```sql
   CREATE TABLE index_user_2 ( id INT PRIMARY KEY, NAME VARCHAR ( 20 ), id_card VARCHAR ( 18 ), UNIQUE ( NAME ) );
   ```

7. ![图片](https://origin.chaizz.com/tc/640)

8. 

### 创建复合索引的方式：

1. 创建表时创建：
2. ```sql
   CREATE TABLE index_user_3 ( id INT PRIMARY KEY, NAME VARCHAR ( 20 ), id_card VARCHAR ( 18 ), KEY ( NAME, id_card ) );
   ```

3. ![图片](https://origin.chaizz.com/tc/640)

4. 

5. 创建表后创建索引
6. ```
   CREATE INDEX name_idcard_index ON index_user_3 ( NAME, id_card );
   ```

7. ![图片](https://origin.chaizz.com/tc/640)

8. 

9. **复合索引的最左前缀原则：如果索引不包括第一顺序的索引，数据库则不会使用索引查询。MySQL为了更好的利用索引，在查询过程中，回动态的调整索引的顺序，索引当最左的索引不在第一顺序是数据库也能自动的调整顺序。**



## **聚集索引非聚集索引知识点：**

**聚集索引：**将数据存储与索引放在一起，索引结构的叶子结点保存了行数据。

**非聚集索引：**将数据与索引分开，索引结构的叶子结点存储的是指向数据文件的指针。

==**注意：在innodb 中，在聚集索引上创建的索引为辅助索引，非聚集索引都是f辅助索引，像复合索引、普通索引、唯一索引。辅助索引叶子结点保存的不是数据行的物理位置 而是主键的值，辅助索引访问数据都是二次查找。**==



**InnoDB中使用的是聚集索引，将主键组织到一个B+树中，而行数据就存储在叶子结点上，若使用where id= 1 这样的条件查找主键则按照B+树的检索算法即可快算找到对应的的叶子结点之后获得行数据。**



**若是对name列进行查找，则需要两个步骤，第一步在辅助索引B+树中检索name，到达辅助索引的叶子结点获得主键索引的ID，第二步在主键索引B+树上根据主键ID进行查找，到达叶子结点节课获取数据行。**

![图片](https://origin.chaizz.com/tc/640)







**MyISAM 使用的是非聚集索引，B+树结构没什么不同只不过叶子节点上存储的内容不同，主键索引存储了主键，辅助索引存储了辅助键，表数据存储在了独立的地方。以下图中B+树的叶子结点都使用一个内存指针指==向了真正的数据，对于表数据来说，这两个键没有任何差别。由于索引是独立的，通过辅助索引检索无需访问主键索引树。==（索引MyISAM 引擎用来做只含有大量的找找的功能比较合适。）**

![图片](https://origin.chaizz.com/tc/640)





### **聚集索引的优势：**

**每次使用辅助索引都要经过两次B+树查找，看上去聚集索引的效率要低于非聚集索引，这不是多此一举吗，聚集索引的优势在哪里？**

- 由于行数据和聚集索引的叶子结点存储在一起，同一页中会有多条行数据，访问同一页数据的不同行数据时，已经把叶加载到了缓存中，再次访问时会在内存中完成访问，不需要再次访问磁盘，这样主键荷航数据是一起被到渠道内存中的，找到叶子结点就可以直接将数据返回。如果按照主键ID寻找数据则会更快。
- 辅助索引的叶子结点存储的是主键值，而不是数据的，好处是当行数据发生改变时索引树的节点也要分裂变化（对索引进行重新排序），或者是我们需要查找的数据在上一次IO读写的时在缓存中没有，需要在发生一次IO操作，可以避免辅助索引的维护工作，另一个好处是辅助索引存储的是主键的值，减少了辅助索引占用的空间的大小。

### **聚集索引需要注意什么？**

使用主键为聚集索引时，最好不要用UUID，因为UUID太过离散，不适合排序，而且可能出现新增记录的UUID会插入到索引树的中间位置，导致索引树的调整复杂度变大，消耗时间和资源。

建议使用Int类型的自增，方便排序并且会在索引树的末尾增加主键值，对索引树的结构影响最小，而且主键占用的存储空间越大，辅助索引中保存的主键值也会变大占用存储空间，也会影响IO操作读取的数据量。


## 索引优化

### 什么时候无法使用索引？

- 在查询语句中使用like关键字，如果匹配的第一个字符为“%”，索引不会被使用，如果“%”不是在第一个位置，索引就会被使用。

- 查询的索引字段类型不一致。（隐式类型转换，但不全部都无法使用索引）**可以理解为对字段进行操作的都会失效**。

  在Mysql中会自动进行类型转换具体分多种情况：  

  1、如果查询条件为单纯的字符串怎MySQL会自动转化为数字 0。  

  `select 0 = 'aasd' ` 结果为 1 代表相等  `select 1 = 'aasd' ` 结果为 0 代表不相等`  select 1 = '1' ` 结果为 1 代表相等   。

  2、如果条件包含带数字和字母的字符串则会转化为该字符串中的数字的值。  `select 1 = '1aasd' ` 结果为 1 代表相等  `select 12 = '12aasd' ` 结果为1 代表相等。

  

- 查询中使用多列索引，查询条件不符合最左原则。（不包括最左前缀字段）。

- 查询语句中使用or 关键字，如果or前后两个都有索引会使用索引，如果有一个没有索引，就不会去使用索引查询。

  

