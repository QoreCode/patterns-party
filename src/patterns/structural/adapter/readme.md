# [Adapter Design Pattern](https://refactoring.guru/design-patterns/adapter)

## Short Description

The Adapter is a structural design pattern that enables objects with incompatible interfaces to work together by wrapping an existing class with a new interface.

## Diagram

![Adapter Structure (Object Adapter)](https://refactoring.guru/images/patterns/diagrams/adapter/structure-object-adapter.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Adheres to Single Responsibility Principle by isolating interface conversion logic | Adds extra complexity and layers to the code                        |
| Complies with Open/Closed Principle: you can introduce new Adapters without changing existing code | Potential performance overhead from frequent interface conversions  |
| Encourages reuse of existing incompatible code                       | Overuse can lead to unnecessary abstraction and difficult-to-follow code |

## When to Use

Use the Adapter pattern when:

- You want to use an existing class but its interface does not match the one you need.
- You aim to develop a reusable class that can collaborate with unrelated and unforeseen classes.
- You need to decouple the old component from the new system while using its functionality.

Avoid using the Adapter pattern when:

- There is a significant difference in functionality between the old component and the new system's requirements.
- Multiple layers of inheritance are involved, which can make the code inheritance messy.
