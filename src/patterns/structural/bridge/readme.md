# [Bridge Design Pattern](https://refactoring.guru/design-patterns/bridge)

## Short Description

The Bridge pattern decouples an abstraction from its implementation so that the two can evolve independently. It is used to avoid a permanent binding between abstraction and its implementation.

## Diagram

![Bridge Structure](https://refactoring.guru/images/patterns/diagrams/bridge/structure-en.png)

## Pros and Cons

| Pros                                                                 | Cons                                                           |
|----------------------------------------------------------------------|----------------------------------------------------------------|
| Allows independent development of abstraction and implementation    | Can increase complexity due to multiple layers of abstraction  |
| Improves flexibility and scalability                                 | Requires careful design to avoid unnecessary abstraction        |
| Supports Open/Closed Principle                                       | Overhead of additional indirection                             |

## When to Use

Use the Bridge pattern when:

- You want to separate a complex component's interface from its implementation.
- You expect changes in both the abstraction and implementation independently.
- You want to avoid a proliferation of classes caused by using inheritance to extend abstraction and implementation separately.
