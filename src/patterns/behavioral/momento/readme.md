# [Memento Design Pattern](https://refactoring.guru/design-patterns/memento)

## Short Description

The Memento is a behavioral design pattern that allows saving and restoring an object's previous state without exposing its internal details. It is commonly used for implementing undo/redo functionality in applications.

## Diagram

![Memento Structure](https://refactoring.guru/images/patterns/diagrams/memento/structure3.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Preserves encapsulation by not exposing internal state               | Can consume significant memory if many mementos are stored           |
| Enables undo/redo functionality without altering object interfaces   | Caretaker must manage the lifecycle of mementos                      |
| Facilitates rollback of objects to a previous state                  | Some dynamic languages may struggle to ensure memento immutability   |

## When to Use

Use the Memento pattern when:

- You need to provide undo/redo functionality.
- You want to save and restore an object's state without violating encapsulation.
- You need to maintain a history of object states for rollback purposes.

Avoid using the Memento pattern when:

- The object's state is simple and doesn't require rollback.
- Memory usage is a critical concern, and storing multiple states is not feasible.
- The added complexity of managing mementos is not justified.
