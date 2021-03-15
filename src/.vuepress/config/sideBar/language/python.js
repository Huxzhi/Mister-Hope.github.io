module.exports = [
  "",
  "intro",
  "install",
  "interpreter",
  {
    title: "基础教程",
    icon: "creative",
    path: "guide/",
    collapsable: false,
    prefix: "guide/",
    children: [
      "write",
      "io",
      "basic",
      "string",
      "list-and-tuple",
      "condition",
      "loop",
      "dict-and-set",
    ],
  },
  {
    title: "函数",
    icon: "function",
    path: "function/",
    collapsable: false,
    prefix: "function/",
    children: ["intro", "define", "call", "argument", "recursive"],
  },
  {
    title: "高级语法",
    icon: "advance",
    path: "advance/",
    collapsable: false,
    prefix: "advance/",
    children: [
      "slice",
      "iteration",
      "list-comprehensions",
      "generator",
      "iterator",
    ],
  },
  {
    title: "函数式编程",
    icon: "function",
    collapsable: false,
    prefix: "functional-programming/",
    children: [
      "",
      {
        title: "高阶函数",
        icon: "function",
        path: "high-order-function/",
        collapsable: false,
        prefix: "high-order-function/",
        children: ["intro", "map-and-reduce", "filter", "sorted"],
      },
      "return-function",
      "anonymous-function",
      "decorator",
      "parital-function",
    ],
  },
];
