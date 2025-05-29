# [Facade Design Pattern](https://refactoring.guru/design-patterns/facade)

## Short Description

The Facade is a structural design pattern that provides a simplified interface to a complex subsystem, making it easier to use and understand. It hides the complexities of the subsystem and provides a higher-level interface that makes the subsystem easier to use.

## Diagram

![Facade Structure](https://refactoring.guru/images/patterns/diagrams/facade/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Simplifies the interface to a complex subsystem                      | Can become a god object if it knows too much about the subsystem     |
| Reduces dependencies on external code                                | May limit flexibility by hiding subsystem details                   |
| Makes the subsystem easier to use and understand                     | Can introduce a single point of failure                            |

## When to Use

Use the Facade pattern when:

- You need to provide a simple interface to a complex subsystem.
- You want to reduce dependencies on external code.
- You want to make a subsystem easier to use and understand.

Avoid using the Facade pattern when:

- You need to expose the full functionality of a subsystem.
- You want to allow clients to interact directly with subsystem components.
