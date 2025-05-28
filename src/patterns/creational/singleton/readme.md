# [**Singleton Pattern**](https://refactoring.guru/design-patterns/singleton)

## **Description:**
Ensures that a class has only one instance and provides a global point of access to that instance.

![Singleton Pattern](https://refactoring.guru/images/patterns/content/singleton/singleton.png)

| **Pros**                           | **Cons**                                  |
|-------------------------------------|-------------------------------------------|
| Guarantees a single instance.      | Hard to unit test.                        |
| Provides a global access point.     | Violates Single Responsibility Principle. |
| Reduces memory usage by reusing the same instance. | Can be an anti-pattern if used improperly (e.g., as a global variable). |

## **When to Use:**
- When exactly one instance of a class is required.
- When you need to control access to resources like a database connection or configuration settings.
