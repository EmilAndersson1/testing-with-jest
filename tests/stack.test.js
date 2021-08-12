const stack = require("../src/stack");

test("peek on empty stack returns undefined", () => {
  expect(stack.peek()).toBeUndefined();
});

test("peek on stack with one element returns that element", () => {
  stack.push(1);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(1);
});

test("peek on stack with two or more elements returns the top element", () => {
  stack.push(1);
  stack.push("wow");
  stack.push(42);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(42);
});

test("push four elements to stack, pop one element, returns the top element, push one element, pop it, pop stack again, return top element (3).", () => {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  expect(stack.pop()).toBe(4);
  stack.push(5);
  stack.pop();
  expect(stack.pop()).toBe(3);
});
