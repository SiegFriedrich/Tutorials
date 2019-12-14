## Spring4 tutorial

### Spring 体系结构
```

 ___________________________________________________________
| -----------------------------  -------------------------- |
| | Data Access / Integration |  |  Web (MVC / Remoting)  | |
| |      JDBC     ORM         |  |  WebSocket Servlet     | |
| |        OXM   JMS          |  |  Web       Portlet     | |
| |       Transaction         |  |                        | |
| -----------------------------  -------------------------- |
|                                                           |
|    AOP     Aspects     Instrumentation     Messaging      |
|                                                           |
| --------------------------------------------------------- |
| |                 Core Container                        | |
| |         Beans   Core     Context      SpEL            | |                                                |
| --------------------------------------------------------- |
|                                                           |
| --------------------------------------------------------- |
| |                           Test                        | |
| --------------------------------------------------------- |
|___________________________________________________________|
```

### Spring 环境配置

#### 核心容器

- spring-core
提供了框架的基本组成部分，包括IoC和依赖注入

- spring-beans
提供了BeanFactory工厂模式，移除了编码单例的需要，可以把配置和依赖从实际编码逻辑中解耦。

- spring-context
context模块建立在有core和beans模块的基础上建立起来的，类似于JNDI注册方式访问对象。
其中添加了国际化，时间传播，资源加载和透明创建上下文等功能。同时也支持JavaEE的功能，比如EJB，JMX和远程调用。
ApplicationContext接口是Context模块的焦点。

- spring-context-support
spring-contextsupport提供了对第三方库集成到Spring上下文的支持，比如缓存（EhCache，Guava，JCache），邮件（JavaMail），调度（CommonJ，Quartz），模板引擎（FreeMarker，JasperReports，Velocity）等。

- spring-expression
expression提供了强大的表达式语言，用于在运行时查询和操作对象图。

#### 数据访问/集成
包含了JDBC，ORM，OXM，JMS和事务处理模块。

- JDBC 模块提供了JDBC抽象层，消除了冗长的JDBC编码和对象数据库供应商特定错误代码解析。
- ORM 提供了对流行对象关系映射API的集成，包括JPA，JDO和Hibernate等，通过此模块可以让这些ORM框架和spring的其他功能整合，比如前面提及的的事务管理。
- OXM 提供了xml 的支持，比如JAXB，Castor， XML Beans，JiBX，XStream等。
- JMS 模块包含生产produce和消费consume消息的功能。 集成了spring-messaging模块。。。
- 事务模块 实现特殊接口类以及所有的POJO支持编程式和声明式事务管理。

#### WEB
Web层由Web，Web-MVC，Web-Socket和Web-Portlet组成

- Web 提供了面向web的基本功能和面向web的应用上下文，比如多部份文件上传功能，使用servlet监听器初始化IoC容器等，还包括HTTP客户端以及Spring远程调用中与WEB相关的部分。

- Web-MVC 模块为WEB应用提供了模型视图控制和REST Web服务的实现。Spring的MVC框架可以使领域模型代码和web表单完全的分离，且可以与Spring框架的其他所有功能进行集成。

- Web-Socket 为WebSocket-based提供了支持，而且在WEB应用程序中提供了客户端和服务器端之间通信的两种方式。

- Web-Portlet 模块提供了用于Portlet环境的MVC实现，并反映了Spring-webmvc模块的功能。

#### 其他

- AOP
面向切面的编程实现，允许你定义方法拦截器和切人点 对代码进行干净的解耦，从而使 实现功能的代码 彻底的解耦出来。

- Aspects
提供了与AspectJ的集成，这是一个功能强大且成熟的面向切面（AOP）编程的框架。

- Instrumentation
模块在一定的应用服务器中提供了类instrumentation的支持和类加载器的实现。

- Messaging 不懂！

- 测试模块 支持对具有JUnit或TestNG框架的Spring组件的测试。

### Spring Hello World 实例

### Spring IoC容器

### Spring 依赖注入

### Spring Beans 自动装配

### Spring 基于注解的配置

### Spring AOP

### Spring JDBC 框架

### Spring 事务管理

### Spring Web MVC框架
