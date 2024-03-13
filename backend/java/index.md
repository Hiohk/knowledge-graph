# Java

## 1. 先导知识

### 1.1 常用的 windows 组合键
- win + D：回到桌面
- win + E：打开资源管理器
- win + R：打开运行窗口
- win + L：锁屏
- alt + tab：应用之间的切换

### 1.2 常用的 DOS 命令
#### 打开 DOS 命令窗口
    win + R，输入 cmd，cmd 是 command 单词的缩写。

#### 常用 DOS 命令：

- dir：列出当前路径下所有的文件以及目录。
- cls：clear screen 清屏。
- exit：退出DOS命令窗口。
- 切换盘符：c: 或者 d: 或者e:
- del：删除一个文件或者多个文件。del Test.java del *.java
- ipconfig以及ipconfig /all：查看网卡的相关信息，例如ip地址，mac 地址等。
    - ping命令：查看两台计算机之间是否可以正常通信
    - ping 192.168.137.101
    - ping 192.168.137.101 -t
    - ping www.baidu.com
    - ping www.baidu.com -t
- 终止 DOS 命令窗口中某个命令的执行：ctrl + c
- mkdir：创建目录
- mkdir abc，表示在当前目录下新建一个目录：abc
- rd：删除目录
- rd abc，表示删除当前路径下的 abc 目录
- ren：重命名
- ren abc xyz，表示将当前路径下的 abc 目录名修改为 xyz
- cd 命令：
    - 作用是：切换目录。change directory
    - cd命令的用法：cd 路径
    - 路径包括：
    - 相对路径：相对路径一定是相对于当前路径而言的，以当前路径为基准，从当前所在的位置开始找。
    - 绝对路径：在 windows 当中，路径开始的时候，是以盘符开始的，都是绝对路径。例如：C:\Users\Administrator\xyz\abc\def
    - cd .. 回到上级目录 （在windows系统中两个点.. 代表的是一个上级目录。扩展：其实还有一个路径叫做一个点 . 一个点代表的是当前路径。）
    - cd / 回到跟目录
    - 注意：路径在windows当中自动补全：使用 tab 键。
- 定时关机：
    shutdown -s -t 3600 一小时之后自动关机。
- 批处理文件
    my.bat文件
```
cd C:\Users\Administrator\xyz\abc\def
c:
del *.java
```
作用：切换到 C:\Users\Administrator\xyz\abc\def目录下，删除这个目录中所有的 java 文件。

#### 通用的文本编辑快捷键
- ctrl+c 复制
- ctrl+v 粘贴
- ctrl+x 剪切
- ctrl+s 保存
- ctrl+z 撤销
- ctrl+y 重做
- ctrl+a 全选
- home 光标回到行首
- end 光标回到行尾
- ctrl + home 光标回到文章开始
- ctrl + end 光标回到文章末尾
- shift + home 或 end 选中一行
- 鼠标双击 （选中一个单词）
- ctrl + shift + 右箭头或左箭头 （选中一个单词）
- ctrl + f 查找

#### java 中的注释
单行注释：
```
// 单行注释
// 单行注释
// 单行注释
// 单行注释
```
多行注释：
```
/*
	多行注释
	多行注释
*/
```
文档注释：
```
/**
* javadoc 注释，可以给 javadoc 命令解析提取并生成帮助文档
* @author dujubin
* @version 1.0
* @since 1.0
*/
```
使用以下命令可以提取生成帮助文档：
```
javadoc -d docs -author -version -encoding utf-8 HelloWorld.java
```

## 2. Java 基础语法

### 2.1 标识符

#### 什么是标识符
1. 在Java中，标识符是用来给变量、方法、类和包等命名的字符序列。
2. 标识符的长度没有限制，但是建议使用有意义的、简洁的标识符，以提高代码的可读性和可维护性。

> 标识符标识符可以标识什么?
>
> 1.变量名
>
> 2.方法名
>
> 3.类名、接口名、枚举名、注解名
>
> 4.包名
>
> 5.常量名
>
> ......

#### 标识符命名规则
1. 标识符可以由字母、数字、下划线(_)和美元符号($)组成，不能含有其他符号。（java 支持全球所有语言，所以这里的 字母 指的是任何一个国家的文字都可以）。

2. 标识符不能以数字开头。

3. 标识符不能是 Java 中的关键字，如 public、class、void 等。

4. 标识符是区分大小写的，即 Foo 和 foo 是两个不同的标识符。

5. 标识符的长度没有限制，但是 Java 建议使用有意义的、简短的标识符。

#### 标识符命名规范
1. 见名知意

2. 驼峰式命名方式

3. 类名、接口名、枚举、注解：首字母大写，后面每个单词首字母大写。（StudentService，UserService）

4. 变量名和方法名：首字母小写，后面每个单词首字母大写。（doSome，doOther）

5. 常量名：全部大写，每个单词用下划线连接。（LOGIN_SUCCESS，SYSTEM_ERROR）

6. 包名：全部小写

### 2.2 关键字

#### 什么是关键字
Java 关键字是 Java 编程语言中预定义的具有特殊含义的单词，这些单词不能被用作标识符，而是在语法中有特定的用法和限制。

#### Java 关键字有哪些
1. Java 关键字都是小写的；
2. `abstract`, `assert`, `boolean`, `break`, `byte`, `case`, `catch`, `char`, `class`, `continue`, `default`, `do`, `double`, `else`, `enum`, `extends`, `final`, `finally`, `float`, `for`, `if`, `implements`, `import`, `instanceof`, `int`, `interface`, `long`, `native`, `new`, `package`, `private`, `protected`, `public`, `return`, `short`, `static`, `strictfp`, `super`, `switch`, `synchronized`, `this`, `throw`, `throws`, `transient`, `try`, `void`, `volatile`, `while`；
3. Java 保留字：`goto`，`const`。


### 2.3 字面量
#### 什么是字面量
字面量指的是在程序中直接使用的数据，字面量是 Java 中最基本的表达式，不需要进行计算或转换，直接使用即可。

#### Java 中有哪些字面量
- 整数型：10、-5、0、100
- 浮点型：3.14、-0.5、1.0
- 布尔型：true、false
- 字符型：'a'、'b'、'c'、'1'、'2'、'国'
- 字符串型："Hello"、"World"、"Java"、"你好呀"

### 2.4 变量
#### 什么是变量？
1. 变量是内存当中的一块空间。是计算机中存储数据最基本的单元。
2. 变量三要素：
    - 数据类型（决定空间大小）【int, double, String】
    - 变量名（只要是合法的标识符即可）
    - 变量值（变量中具体存储的数据）
3. 变量的声明、赋值、访问
    - int i; //声明一个整数型的变量，起名
    - i = 100; //给变量 i 赋值100
    - System.out.println(i); //访问 i 变量：读操作
    - i = 200; //访问 i 变量：改操作【给变量 i 重新赋值200】

#### 变量的作用
1. 变量的存在会让程序更加便于维护。
```java
System.out.println(100 + 111);
System.out.println(100 + 222);
// 以上代码的设计就不如以下的代码：
int num = 100;
System.out.println(num + 111);
System.out.println(num + 222);
```
2. 变量的存在可以增强程序的可读性。
```java
System.out.println(3.14 * 10 * 10);
// 以上代码的设计就不如以下的代码：
double π = 3.14;
int r = 10;
System.out.println(π * r * r);
```

::: tip 变量的小细节
1. 变量必须先声明，再赋值，才能访问;
2. 方法体当中的代码遵循自上而下的顺序依次逐行执行，变量先访问，再声明肯定是不行的;
3. 一行代码上可以同时声明多个变量;
4. 在同一个作用域当中，变量名不能重名，可以重新赋值;
5. 变量值的数据类型必须和变量的数据类型一致，这样是不允许的：`String name = 100`;
:::

#### 变量的作用域
- 作用域就是变量的有效范围。变量的作用域是怎样的呢？用一句大白话就可以概括了：出了大括号就不认识了。
- 作用域的不同主要是因为声明在不同位置的变量具有不同的生命周期。所谓的生命周期是：从内存开辟到内存释放。
- Java 遵循就近原则。

#### 变量的分类
- 局部变量
- 成员变量
    - 静态变量
    - 实例变量

### 2.5 二进制、八进制与十六进制
#### 二进制概述
计算机底层只能识别二进制。计算机底层只识别二进制是因为计算机内部的电子元件只能识别两种状态，即开和关，或者高电平和低电平。二进制正好可以用两
种状态来表示数字和字符，因此成为了计算机最基本的表示方法。在计算机内部，所有的数据都被转化为二进制形式进行处理和存储。虽然计算机可以通过不同的编程语言和程序来处理不同的数据类型和格式，但最终都需要将其转化为二进制形式才能被计算机底层识别和处理。

#### 十进制与二进制的转换
十进制 -> 二进制：除2取余，一直到商为0，最后将所有的余数逆序输出。
二进制 -> 十进制：每一位与权值相乘求和。

#### 十进制与八进制的转换
略

#### 十进制与十六进制转换
略

#### 二进制与十六进制转换
略

### 2.6 原码反码补码
#### byte 与 bit
- byte（字节）是计算机存储和处理数据的基本单位，通常由8个比特（bit）组成。每个比特是计算机中最小的存储单位，只能存储0或1两个状态。因此，一个字节可以存储8个比特的数据。
- 两者之间的关系是：1 byte = 8 bit，即8个比特（bit）组成一个字节（byte）。
- 在计算机中，数据通常以字节（byte）为单位进行存储和传输，而比特（bit）则是用来表示数据的最小单位。 
- 1KB = 1024byte
- 1MB = 1024KB
- 1GB = 1024MB
- 1TB = 1024GB

#### 原码、反码、补码
1. 原码、反码、补码是计算机二进制的三种表示形式；
2. 计算机在底层都是采用二进制补码形式表示的；
3. 二进制位最高位成为符号位，0为正数，1为负数。

#### 正数的原码、反码、补码
1. 正数的原码、反码、补码是相同；
2. 请问正数127的原码、反码、补码分别是多少？（三者都是：0111 1111）

#### 负数的原码、反码、补码
1. 负数的原码运算规则：将绝对值转化为二进制后，最高位改为1；
2. -5的原码：10000101；
3. -5的反码：11111010；（原则是：**以原码作为参考，符号位不变，其他位取反**）
4. -5的补码：11111011；（原则是：**以反码作为参考，符号位不变，加1**）
5. 补码 -> 原码：补码最高位不变，其余取反加1；
6. -128的原码、反码、补码：
   - 原码：1000 0000
   - 反码：1111 1111
   - 补码：1000 0000

一个比特（1 bit）可以表示的数的范围：-128~127。

#### 计算机底层为什么采用补码
1. 可以简化电路设计：采用补码形式可以将加减法运算转化为相同的操作，从而简化电路设计。
2. 解决了0的正负问题：在原码中，0有两个表示，+0和-0，这样会导致计算结果不唯一，而在补码中，0只有一种表示，即全0，可以避免这个问题。
3. 解决了负数溢出问题：在原码中，负数的表示范围比正数少1，这样在进行减法运算时容易出现负数溢出的情况，而在补码中，负数的表示范围与正数相同，可以避免负数溢出的问题。
4. 方便计算机进行运算：补码形式可以方便计算机进行加减法运算，而且可以使用相同的电路进行运算，从而提高了计算机的运算效率。

### 2.7 数据类型
#### 基本数据类型
- 整数型
byte: 

short:

int:

long:

- 浮点型
float: 

double:

- 布尔型
boolean:

- 字符型
char: 

| 数据类型 | 占用字节数 | 取值范围           | 具体取值范围                               | 默认值   |
| -------- | ---------- | ------------------ | ------------------------------------------ | -------- |
| byte     | 1          | $$-2^{7}~2^{7}-1$$ | -128 ~ 127                                 | 0        |
| short    | 2          | $$-2^{7}~2^{7}-1$$ | -32768 ~ 132767                            | 0        |
| int      | 4          | $$-2^{7}~2^{7}-1$$ | -2147483648 ~ 2147483647                   | 0        |
| long     | 8          | $$-2^{7}~2^{7}-1$$ | -9223372036854775808 ~ 9223372036854775807 | 0L       |
| float    | 4          | $$-2^{7}~2^{7}-1$$ | 1.4E-45 ~ 3.4028235E38                     | 0.0f     |
| double   | 8          | $$-2^{7}~2^{7}-1$$ | 4.9E-324 ~ 1.79769313448623157E308         | 0.0d     |
| boolean  | 1          | $$-2^{7}~2^{7}-1$$ | true ~ false                               | false    |
| char     | 2          | $$-2^{7}~2^{7}-1$$ | 0 ~ 65535                                  | '\u0000' |
#### 引用数据类型


### 2.8 运算符

### 2.9 控制语句

### 2.10 方法

### 2.11 package和import

