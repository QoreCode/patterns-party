# [Iterator Design Pattern](https://refactoring.guru/design-patterns/iterator)

## Short Description

The Iterator is a behavioral design pattern that allows sequential access to elements of a collection without exposing its underlying representation. It decouples algorithms from the collections they operate on, enabling more flexible and reusable code.

## Diagram

![Iterator Structure](https://refactoring.guru/images/patterns/diagrams/iterator/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Decouples algorithms from data structures, promoting flexibility     | Introduces additional classes and complexity                         |
| Allows multiple traversal strategies for the same collection          | May lead to an increase in the number of classes                    |
| Facilitates open/closed principle                                    | Can make the system harder to understand due to the added abstraction|
| Supports traversal of complex data structures                        | Requires careful design to avoid excessive complexity               |

## When to Use

Use the Iterator pattern when:

- You need to traverse a collection without exposing its internal structure.
- You want to provide multiple ways to iterate over a collection.
- You need to decouple the algorithm from the collection.

Avoid using the Iterator pattern when:

- The collection is simple and doesn't require multiple traversal strategies.
- The added complexity of additional classes is not justified.
