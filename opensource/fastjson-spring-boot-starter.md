---
description: 自制spring boot starter for fastjson
---

# 自制spring boot starter for fastjson

> **GitHub：[https://github.com/JoeyBling/fastjson-spring-boot-starter](https://github.com/JoeyBling/fastjson-spring-boot-starter)**

> **码云：[https://gitee.com/zhousiwei/fastjson-spring-boot-starter](https://gitee.com/zhousiwei/fastjson-spring-boot-starter)**

> **欢迎使用和Star支持，如使用过程中碰到问题，可以提出Issue，我会尽力完善**

# 简介

该项目主要利用Spring Boot的自动化配置特性来实现快速的将fastjon引入spring boot使用fastjson解析框架。

- 源码地址
  - GitHub：<a href="https://github.com/JoeyBling/fastjson-spring-boot-starter" target="_blank">https://github.com/JoeyBling/fastjson-spring-boot-starter</a>
  - 码云：<a href="https://gitee.com/zhousiwei/fastjson-spring-boot-starter" target="_blank">https://gitee.com/zhousiwei/fastjson-spring-boot-starter</a>
- 我的博客：<a href="https://zhousiwei.gitee.io/" target="_blank">https://zhousiwei.gitee.io/</a>

**小工具一枚，欢迎使用和Star支持，如使用过程中碰到问题，可以提出Issue，我会尽力完善该Starter**

# 版本基础

- Spring Boot：1.5.x
- FastJson：1.2.15

# 如何使用

在该项目的帮助下，我们的Spring Boot可以轻松的引入fastjson，主需要做下面两个步骤：

- 在`pom.xml`中引入依赖：

> 当前最新版本 10.10.10.RELEASE

- 由于spring-boot-starter-parent版本更新问题 
spring-boot-starter-parent 2.0.0.RELEASE之前使用

```xml
<dependency>
	<groupId>io.gitee.zhousiwei</groupId>
	<artifactId>fastjson-spring-boot-starter</artifactId>
	<version>8.8.8.RELEASE</version>
</dependency>
```
- spring-boot-starter-parent 2.0.0.RELEASE之后使用

```xml
<dependency>
	<groupId>io.gitee.zhousiwei</groupId>
	<artifactId>fastjson-spring-boot-starter</artifactId>
	<version>10.10.10.RELEASE</version>
</dependency>
```

默认情况下就能在springboot项目中使用fastjson

# 参数配置

更细致的配置内容参考如下：

## 配置示例

```yaml
fastjson:
          enabled: true
          media-type: application/json;charset=UTF-8
          date-format: yyyy-MM-dd HH:mm:ss
```

## 配置说明

### 默认配置
```yaml
fastjson:
          enabled: true  是否启用fastjson(默认为:true)
          media-type: application/json;charset=UTF-8  媒体类型(默认为:application/json;charset=UTF-8)
          date-format: yyyy-MM-dd HH:mm:ss  日期格式(默认为:yyyy-MM-dd HH:mm:ss)
```

> `8.8.8.RELEASE`新增：`date-format`属性，且配置成功会打印控制台信息:`starter for fastJson-----fastJson init success.`

## 贡献者

- <a href="https://gitee.com/zhousiwei/" target="_blank">思伟</a>
