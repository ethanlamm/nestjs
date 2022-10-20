Nest.js

一、初始项目结构

src

​	----main.ts：应用程序的入口文件，它使用核心函数 NestFactory 创建一个 Nest 应用程序实例

​	----app.module.ts：应用程序的根模块

​	----app.controller.ts：具有单个路由的基本控制器

​	----app.controller.spec.ts：控制器的单元测试

​	----app.service.ts：具有单一方法的基本服务

test

​	----测试文件

​	----app.e2e.spec.ts

​	----jest-e2e.json

nest-cli.json：nestjs脚手架配置文件

tsconfig.json：ts配置文件

二、快速创建 Module（包含 Controller、Service）

方法一：

在项目根目录下，执行该命令`nest g res folderName`，选择传输层类型（选择 REST API），按下回车键，则会在`src`下创建一个文件夹`floder`，其下包含自身的`module`、`controller`和`service`，并且三者相互关联。另外，此`module`会在`app.module.ts`的`imports`中引用，与`app.module.ts`构成联系

方法二：

在项目根目录下，先执行`nest g mo folderName`、后执行`nest g co folderName`、`nest g s folderName`（注意：后两者不讲究先后顺序，但`nest g mo folderName`必须首先执行），则会在`src`下创建一个文件夹`floder`，其下包含自身的`module`、`controller`和`service`，但三者**并不完全**相互关联，需要手动将`controller`和`service`相关联。同样，此`module`会在`app.module.ts`的`imports`中引用，与`app.module.ts`构成联系

三、面向切面

![2022-10-19](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\Snipaste_2022-10-19_14-46-26.png)

