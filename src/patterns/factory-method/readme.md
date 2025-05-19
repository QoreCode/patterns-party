# [**Factory Method Pattern**](https://refactoring.guru/design-patterns/factory-method)

## **Description:**
Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.

## ![Factory Method Pattern](https://refactoring.guru/images/patterns/content/factory-method/factory-method-en.png?id=cfa26f33dc8473e803fadae0d262100a)

| **Pros**                           | **Cons**                                  |
|-------------------------------------|-------------------------------------------|
| Simplifies object creation.        | Increases the number of classes.         |
| Allows subclasses to change the class of object. | Requires knowledge of the hierarchy of the objects being created. |
| Promotes loose coupling by not needing the client to know about concrete classes. |                                           |

## **When to Use:**
- When the creation process of objects is complex or varies.
- When a class can't anticipate the class of objects it must create.
- When you need to provide a way for subclasses to choose the type of objects to create.
