# [Strategy Design Pattern](https://refactoring.guru/design-patterns/strategy)

## Short Description

The Strategy is a behavioral design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable. This pattern allows a client to choose the appropriate algorithm at runtime, promoting flexibility and the open/closed principle.

## Diagram

![Strategy Structure](https://refactoring.guru/images/patterns/diagrams/strategy/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Promotes the open/closed principle by allowing new strategies to be added without modifying existing code | May introduce additional classes, increasing complexity             |
| Decouples the context from the algorithm, allowing for easier maintenance and extension | Clients must be aware of the different strategies available          |
| Enables dynamic selection of algorithms at runtime                   | Overhead of managing multiple strategy classes                      |
| Enhances code readability by removing complex conditional statements | May lead to excessive object creation in some scenarios             |

## When to Use

Use the Strategy pattern when:

- You have a family of algorithms that can be swapped at runtime.
- You want to avoid conditional statements that select behavior based on the algorithm.
- You need to decouple the algorithm from the context that uses it.
- You want to promote the open/closed principle in your codebase.

Avoid using the Strategy pattern when:

- The algorithms are simple and unlikely to change.
- The overhead of managing multiple strategy classes is not justified.
- The system doesn't require dynamic selection of algorithms.
