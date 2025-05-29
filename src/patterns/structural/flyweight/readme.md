# [Flyweight Design Pattern](https://refactoring.guru/design-patterns/flyweight)

## Short Description

The Flyweight is a structural design pattern that allows programs to support a large number of fine-grained objects efficiently by sharing common parts of their state. It reduces memory usage by separating intrinsic (shared) and extrinsic (unique) state and reusing objects with shared data.

## Diagram

![Flyweight Structure](https://refactoring.guru/images/patterns/diagrams/flyweight/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Reduces memory consumption by sharing common data                    | Complexity increases due to the need to manage shared and unique state |
| Improves performance when working with many similar objects          | Might introduce unnecessary complexity if used prematurely           |
| Supports a large number of objects efficiently                       | Makes code less readable and harder to debug                        |

## When to Use

Use the Flyweight pattern when:

- You need to create a large number of similar objects.
- Memory usage is a concern, and many objects can share common data.
- The object's state can be split into intrinsic (shared) and extrinsic (unique) parts.

Avoid using the Flyweight pattern when:

- Objects are too different and can't share state effectively.
- The added complexity doesn't justify the memory savings.
- You need full control over the object’s state in one place.
