# [Observer Design Pattern](https://refactoring.guru/design-patterns/observer)

## Short Description

The Observer is a behavioral design pattern that defines a one-to-many dependency between objects. When one object (the subject) changes its state, all its dependents (observers) are notified and updated automatically. This pattern is commonly used to implement distributed event-handling systems, in which one object (the subject) maintains a list of its dependents (observers) and notifies them of state changes.

## Diagram

![Observer Structure](https://refactoring.guru/images/patterns/diagrams/observer/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Promotes loose coupling between subject and observers                | Can lead to memory leaks if observers are not properly unregistered  |
| Supports dynamic addition and removal of observers                    | May introduce performance overhead with many observers               |
| Facilitates automatic updates to all observers                       | Potential for unexpected updates if observers are not properly managed |
| Enhances scalability in event-driven systems                         | Debugging can be challenging due to indirect communication          |

## When to Use

Use the Observer pattern when:

- You need to create a subscription mechanism to allow multiple objects to listen and react to events or changes in another object.
- You want to implement distributed event-handling systems where one object (subject) notifies multiple dependents (observers) about state changes.
- You need to decouple the subject from its observers, allowing for more flexible and maintainable code.

Avoid using the Observer pattern when:

- The subject and observers are tightly coupled and changes in one require changes in the other.
- Performance is a critical concern, and the overhead of notifying many observers is unacceptable.
- The system does not require dynamic addition or removal of observers.
