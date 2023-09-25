1. How js is executed
When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

During the context runtime, the parser parses the source code and allocates memory for the variables and functions. The source code is generated and gets executed.

Two types of execution context global and function

 There are two phases of JavaScript execution context:
 1.Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.

 2.Execution phase: In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.


example:

function funcA(m,n) {
    return m * n;
}

function funcB(m,n) {
    return funcA(m,n);
}

function getResult(num1, num2) {
    return funcB(num1, num2)
}

var res = getResult(5,6);

console.log(res); // 30
* First it allocates memory for funcA, funcB, the getResult function, and the res variable

* Then it invokes getResult(), which will be pushed on the call stack.
 
* Then getResult() will call funcB()

* At this point, funcB's context will be stored on the top of the stack.

* Then it will start executing and call another function funcA().

* Similarly, funcA's context will be pushed.

* Once execution of each function is done, it will be removed from the call stack

2. How Call stack works || How call stack help js code to get executed


* Function Calls: When a JavaScript program starts running, an initial execution context is created, which usually corresponds to the global scope.

* Function Invocation: When a function is invoked (called), a new execution context is created for that function, and it's pushed onto the top of the call stack. This means that the function is now the currently executing function, and its local variables and parameters are stored in memory.

* Execution: The JavaScript engine executes the code within the currently executing function, line by line, until it encounters a return statement or reaches the end of the function. During this execution, if the function calls other functions (including itself recursively), those function calls are also added to the call stack, creating a stack of function calls.

* Completion: When a function completes its execution (either by reaching the end or encountering a return statement), it is popped off the call stack. This signifies that the function has finished executing, and the program returns to the previous function in the stack.

* Return Values: As functions complete, they may return values, which can be used by the calling function. The return values are propagated back up the call stack.

* Stack Order: The call stack follows a Last-In-First-Out (LIFO) order. The function that was added most recently to the stack is the one that executes and completes first.

* Recursion: Recursive function calls also use the call stack. Each recursive call creates a new execution context, and the stack grows until the base case is reached, at which point the stack starts unwinding as each function completes.

* Error Handling: If an unhandled exception occurs within a function, it will propagate up the call stack until it is caught by an error-handling mechanism (e.g., a try-catch block). If no error handler is found, the program may terminate, and an error message is usually displayed.

3. How call stack help js code to get executed

 We use call stack for memorizing which function is running right now. Basically, a Javascript engine uses a call stack to manage execution context, the javascript engine builds a global execution context and pushes it to the top of the call stack when you run the script.
  
Example:
 
function f1() {
    console.log('Hi by f1!');
}
 
function f2() {
    f1();
    console.log('Hi by f2!');
}
 
f2();  