# [Composite Design Pattern](https://refactoring.guru/design-patterns/composite)

## Short Description

The Composite pattern is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects. It allows clients to treat individual objects and compositions of objects uniformly.

## Diagram

![Composite Structure](https://refactoring.guru/images/patterns/diagrams/composite/structure-en.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Allows treating individual objects and compositions uniformly        | Can be difficult to create a uniform interface for classes with significantly different functionality |
| Facilitates adding new component types without breaking existing code | May lead to over-generalization, making the system more complex than necessary |

## When to Use

Use the Composite pattern when:

- You need to implement a tree-like object structure.
- You want client code to treat both simple and complex elements uniformly.
