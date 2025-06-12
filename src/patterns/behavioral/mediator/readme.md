# [Mediator Design Pattern](https://refactoring.guru/design-patterns/mediator)

## Short Description

The Mediator is a behavioral design pattern that centralizes communication between objects, promoting loose coupling. Instead of objects communicating directly with each other, they interact through a mediator, reducing dependencies and simplifying maintenance.

## Diagram

![Mediator Structure](https://refactoring.guru/images/patterns/diagrams/mediator/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Reduces dependencies between objects                                 | Mediator can become overly complex if not designed carefully         |
| Centralizes communication logic                                      | May introduce a single point of failure                             |
| Enhances maintainability and scalability                             | Can lead to performance overhead in large systems                    |
| Promotes loose coupling and flexibility                              | Overuse can result in unnecessary abstraction                       |

## When to Use

Use the Mediator pattern when:

- You have many objects that need to communicate in complex ways.
- You want to centralize communication logic to simplify maintenance.
- You aim to reduce dependencies between objects to promote flexibility.

Avoid using the Mediator pattern when:

- The system is simple, and direct communication between objects suffices.
- Introducing a mediator would add unnecessary complexity.
- Performance is a critical concern, and the mediator introduces overhead.
