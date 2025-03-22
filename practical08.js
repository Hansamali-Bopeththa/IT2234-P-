// Callback function
const greet = (msg, fun) => {
    console.log("hi...." + msg);
    fun();
};

const myName = (name) => {
    console.log("My name is " + name);
};

greet("Good morning", () => { console.log("My name is David"); });
