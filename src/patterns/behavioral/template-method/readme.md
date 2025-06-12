# [Template Method Design Pattern](https://refactoring.guru/design-patterns/template-method)

## Short Description

The Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure. This pattern is particularly useful for implementing invariant parts of an algorithm once and leaving the behavior that can vary to subclasses.

## Diagram

![Template Method Structure](https://refactoring.guru/images/patterns/diagrams/template-method/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Promotes code reuse by defining common behavior in a superclass      | Subclasses may become tightly coupled to the superclass             |
| Allows subclasses to implement specific steps without altering the overall algorithm | May lead to a large number of subclasses if many variations are needed |
| Facilitates maintenance by centralizing common behavior              | Overriding methods may introduce complexity if not carefully managed |

## When to Use

Use the Template Method pattern when:

- You have an algorithm with steps that can vary but the overall structure remains constant.
- You want to define the invariant parts of an algorithm once and leave the behavior that can vary to subclasses.
- You need to avoid code duplication by centralizing common behavior in a superclass.

Avoid using the Template Method pattern when:

- The algorithm's structure is likely to change frequently.
- The number of variations is small, and the overhead of creating subclasses is not justified.
- You need to change the algorithm's structure dynamically at runtime.
