How node js works ?

Node.js was written mostly with C/C++. As a program that is supposed to run web servers, Node.js needs to constantly interact with a device's operating system.

Building Node.js with a low-level language like C made it easy for the software to access the operating system’s resources and use them to execute instructions.

But there are many more intricacies involved in how Node.js works. Node.js runs fast and efficient web servers but how exactly does it do that? This section explains the process Node.js uses to achieve its efficiency.

There are three main components we must understand to see how Node.js works. These components are:

* V8 Engine
* Libuv
* Event Loop

We'll dive into detail and explain each of these components, and how they make up Node.js.