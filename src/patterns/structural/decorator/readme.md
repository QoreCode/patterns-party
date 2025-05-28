# [Decorator Design Pattern](https://refactoring.guru/design-patterns/decorator)

## Short Description

The Decorator is a structural design pattern that allows behavior to be added to individual objects dynamically, without affecting the behavior of other objects from the same class. It involves creating a set of decorator classes that are used to wrap concrete components.

## Diagram

![Decorator Structure](https://refactoring.guru/images/patterns/diagrams/decorator/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                           |
|----------------------------------------------------------------------|----------------------------------------------------------------|
| Allows behavior to be added to individual objects dynamically        | Can lead to a large number of small classes                    |
| Provides a flexible alternative to subclassing for extending functionality | Can make the system more complex due to the number of classes |
| Supports the Open/Closed Principle                                  | Requires careful design to avoid excessive complexity          |

## When to Use

Use the Decorator pattern when:

- You need to add responsibilities to individual objects dynamically and transparently, without affecting other objects.
- You want to add functionalities to objects in a flexible and reusable way.
- You need to extend the behavior of a class in a way that avoids creating a large number of subclasses.
