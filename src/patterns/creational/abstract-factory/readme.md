# [**Abstract Factory Pattern**](https://refactoring.guru/design-patterns/abstract-factory)

## **Description:**
Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

![Abstract Factory Pattern](https://refactoring.guru/images/patterns/content/abstract-factory/abstract-factory-en.png?id=d0210ee255712a245fead94a3fafabe0)

| **Pros**                           | **Cons**                                  |
|-------------------------------------|-------------------------------------------|
| Allows a family of related products to be created. | Increases the number of classes in the codebase. |
| Helps to avoid tight coupling with concrete classes. | Complex hierarchy.                       |
| Supports multiple types of products. | Difficult to extend the system if new products are introduced. |

## **When to Use:**
- When the system needs to create families of related products (e.g., user interface elements that work across different platforms).
- When you want to isolate code that works with specific product families.
