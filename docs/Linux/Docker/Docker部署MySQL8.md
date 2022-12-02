---
title: Docker部署MySQL8
date: 2022-2-19 21:00:00
authoer: chaizz
tags: MySQL
categories: Docker
photos: ["https://tc.chaizz.com/1d3f92b2918411ec84fb0242ac140002.png"]
---

​                         

<!--more-->



s

# 1、安装Docker

略

# 2、直接运行命令

后台启动MySQL，然后进入容器中设置MySQL用户。

```shell
docker run -d -p 3306:3306 --name MYSQL8.0 -e MYSQL_ROOT_PASSWORD=123456  mysql:latest
```

# 3、设置MySQL远程连接以及密码 

##  1、进入容器内部

```shell
docker exec -it 容器ID/容器名 bash
```

## 2、登录MySQL

```shell
mysql -uroot -p123456
```

## 3、 设置root用户名以及密码规则

设置密码不过期

```sql
alter user 'root'@'%' identified by '123456' password expire never;
```

设置密码规则

```sql
alter user 'root'@'%' identified with mysql_native_password by '123456';
```

## 4、刷新权限

```sql
flush privileges;
```

使用Navicat连接 成功 OK！





