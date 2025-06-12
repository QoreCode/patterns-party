# [Visitor Design Pattern](https://refactoring.guru/design-patterns/visitor)

## Short Description

The Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate. This separation allows you to add new operations to existing object structures without modifying the structures, promoting the open/closed principle.

## Diagram

![Visitor Structure](https://refactoring.guru/images/patterns/diagrams/visitor/structure-en.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Allows adding new operations without modifying existing classes      | Adding new element classes requires changes to all visitors         |
| Promotes the open/closed principle                                    | Can lead to a bloated visitor interface with many methods           |
| Facilitates separation of concerns by encapsulating operations       | May introduce complexity in managing multiple visitors              |
| Enables operations on complex object structures without altering them | Requires careful design to avoid circular dependencies              |

## When to Use

Use the Visitor pattern when:

- You need to perform operations on elements of an object structure that may have different types.
- You want to add new operations to existing object structures without modifying them.
- You aim to separate algorithms from the objects on which they operate.

Avoid using the Visitor pattern when:

- The object structure is likely to change frequently, requiring changes to all visitors.
- You need to add new element classes, as this will require changes to all visitors.
