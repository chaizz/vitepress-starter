---
title: 开发前的基础工作之系统环境篇【Pythonista】
author: chaizz
date: 2023-04-6
tags: 系统设置
categories: 系统设置
photos: ["https://origin.chaizz.com/tc/DALL·E 2023-04-06 17.04.16 - A cartoon version of a programmer.png"]
---

​    

<!--more-->

# 开发前的基础工作之系统环境篇



当我们进入到一个新的环境，或者是拿到一个新的操作系统，往往都需要我们配置自己的开发环境，系统软件环境等。

本次以Python开发者为例，介绍一个**Pythonista**需要做哪些准备工作。

个人常用的操作系统为Windows和Ubuntu, 所以以下的所有环境配置和软件都是基于Windows和Ubutu的。

## 1 windwos系统软件

windows系统层面一般不需要太多的设置，只需要安装一些自己的开发软件。

首先作为开发者的必备的软件：

- Python 不装不行的软件

- Git 代码版本控制系统
- PyCharm - Pythonista Python编辑器利器 (针对Python项目)
- Visual - Studio Code 同样是编辑器利器 （作为轻量化文本编辑器）
- WebStorm - Pythoneer写个前端项目也不是不行
- Navicat - 数据库可视化管理软件
- Another Redis Desktop Manager - Redis可视化管理工具
- ApiPost7 - 接口测试管理利器 同类型的有Apifox、Postman
- WindTerm - 轻量开源的终端管理工具
- chrome - 必备浏览器
- Docker Desktop - windwos系统的中的docker
- WSL - 本地Linux开发王炸
- Windows Terminal - 比CMD好用一万倍的终端
- Miniconda - Python多环境管理的佼佼者

其他的一些软件（非开发者必备）：

- ToDesk - 远程桌面 (半夜远程修改BUG必备)
- WizTree - 扫描磁盘空间文件利器
- VMware Workstation - 虚拟机，保证测试环境的纯(测试用的较多)
- IDM - 结合油猴脚本可以成为下载神器
- Fiddler Classic - 抓包利器
- Barrier - 跨平台共享使用鼠标和键盘利器。
- Typora - Markdown写作工具
- Snipaste - 桌面截图贴图利器。

## 2 Windows开发环境配置

### 2.1 配置Miniconda

[官网](https://docs.conda.io/en/latest/miniconda.html#windows-installers)下载exe可执行文件，直接安装即可。然后需要做的就是切换miniconda的源。Miniconda 的基本配置:

```powershell
# 取消base环境的显示
conda config --set auto_activate_base False

# 设置显示下载连接 
conda config --set show_channel_urls yes

# 切换清华源：
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/

# 删除一个conda环境
conda remove -n 名称 --all


# 更高conda的虚拟环境存储地址 （如果修改不成功，需要设置路径的权限）
conda config --add envs_dirs  具体的路径
```

如果要在Linux上开发，一般有好几种情况 (我一般使用第一种方式，使用WSL)：

1. 在Windows上安装WSL, 使用Ubuntu子系统

2. 使用虚拟机，在虚拟机中安装系统各个发行版的Linux系统。 (本地构建分布式使用)
3. 直接使用Linux系统 (基本很少使用，缺少常用的办公软件生态)

### 2.2 配置Windows Terminal

在微软商店即可直接下载，此软件也不需要什么配置，可以根据自己的使用习惯配置默认打开的配置文件，我这里使用的是PowerShell。

![image-20230406152440738](https://origin.chaizz.com/tc/image-20230406152440738.png)

### 2.3 配置WSL

直接在微软应用商店，下载需要的Linux版本， 这里我常用的是Ubuntu, 一般选择最新版22.04或者是20.04。

安装完毕后在windwos菜单中可以直接找到安装的ubuntu图标。可以直接打开使用。但是这里有一个点是默认安装的系统在C盘。我们可以手动更改为其他的盘符。

步骤如下：

```powershell
# 1、以管理员身份打开Windows Terminal 或者 PowerShell

# 2、 查看当前WSL服务应用
wsl -l -v
# 展示结果如下，Ubuntu-20.04是上一步安装的LInux子系统名称 （名称可能不一样） 
  NAME                   STATE           VERSION
* docker-desktop-data    Stopped         2
  Ubuntu-20.04           Running         2
  docker-desktop         Stopped         2

# 3、关闭wsl
wsl --shutdown
 
# 4、 卸载刚刚安装的系统
wsl --unregister Ubuntu-20.04

# 5、 导出到别的文件夹，此处导出到D盘下的WSL_Ubuntu
wsl --export Ubuntu-20.04 D:\WSL_Ubuntu\ubuntu.rar

# 6、 导入到指定的文件夹，同样在D盘D盘下的WSL_Ubuntu
wsl --import Ubuntu D:\WSL_Ubuntu D:\WSL_Ubuntu\ubuntu.rar

# 7、启动Ubutnu
wsl -d ubuntu
```

讲过上述布置后我们就可以得到一个在windwos下的Linux子系统，我们可以直接通过命令行进入该系统，就像操作Linux一样。

### 2.4 WSL 文件传输配置

```powershell
# 1、打开Windows Terminal 或者 PowerShell

# 2、进入Linux子系统，执行
explorer.exe .

# 3、此时终端会自动打开一个文件夹，就是在终端执行上一步命令的文件夹。
# 我们可以像操作本地文件一样操作Linux文件夹。

# 4、如果不想每次都执行 explorer.exe . 可以将Linux的文件位置，添加到盘符中。
# 4.1、将第2步弹出的文件夹路径复制出来 ：例如 \\wsl$\Ubuntu\root
# 4.2、打开windwos 此电脑--> 添加一个网络位置-->下一页-->指定网站的位置。
# 4.3、将4.2 复制的地址输入。此时在我的电脑网络位置中，就会出现刚刚设置的文件夹。

```

如下图所示：

![image-20230406155044674](https://origin.chaizz.com/tc/image-20230406155044674.png)



## 3 Linux开发环境配置

此处以WSL子系统为例。

配置apt源

```shell
# 备份源文件
sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak

#  使用目录替换源地址
sudo sed -i "s@http://.*archive.ubuntu.com@http://repo.huaweicloud.com@g" /etc/apt/sources.list

sudo sed -i "s@http://.*security.ubuntu.com@http://repo.huaweicloud.com@g" /etc/apt/sources.list

# 更新 apt
apt-get update
```



此处列出几个镜像站

| 华为云   | https://mirrors.huaweicloud.com/home  |
| -------- | ------------------------------------- |
| 清华大学 | https://mirrors.tuna.tsinghua.edu.cn/ |
| 阿里云   | https://developer.aliyun.com/mirror/  |
| 腾讯云   | https://mirrors.cloud.tencent.com/    |
| 网易网   | http://mirrors.163.com/               |
| 北大     | https://mirrors.pku.edu.cn/Mirrors    |

配置pip源

Linux 默认安装的python的pip源

```shell
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 或者手动更改 pip.conf 配置文件 /root/.config/pip/pip.conf
```

安装 minicaonda 和在windows上安装一致。

