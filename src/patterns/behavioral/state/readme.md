# [State Design Pattern](https://refactoring.guru/design-patterns/state)

## Short Description

The State is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. It appears as if the object changed its class. This pattern is particularly useful for implementing finite-state machines and managing state-dependent behavior in a clean and maintainable way.

## Diagram

![State Structure](https://refactoring.guru/images/patterns/diagrams/state/structure-en.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Eliminates large conditional statements (e.g., if-else or switch)     | May introduce additional classes, increasing complexity             |
| Encapsulates state-specific behavior in separate classes             | Overhead of managing multiple state classes                         |
| Simplifies the context class by delegating state-specific behavior    | Potential for excessive object creation in some scenarios           |
| Facilitates adding new states without modifying existing code        | Requires careful design to avoid excessive state transitions        |

## When to Use

Use the State pattern when:

- An object's behavior depends on its state and must change its behavior at runtime.
- You need to avoid large conditional statements that select behavior based on the object's state.
- You want to encapsulate state-specific behavior in separate classes to promote maintainability.

Avoid using the State pattern when:

- The object's state is simple and doesn't require dynamic behavior changes.
- The overhead of managing multiple state classes is not justified.
- The system doesn't require frequent state transitions or complex state-dependent behavior.
