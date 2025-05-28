# [**Prototype Pattern**](https://refactoring.guru/design-patterns/prototype)

## **Description:**
Creates new objects by copying an existing object, known as the prototype. The prototype is cloned to create new instances.

![Prototype Pattern](https://refactoring.guru/images/patterns/content/prototype/prototype.png?id=e912b1ada20bbf7b2ffc09e93b9fab20)

| **Pros**                           | **Cons**                                  |
|-------------------------------------|-------------------------------------------|
| Efficient for object creation when a large number of similar objects are needed. | Cloning can be complex if the object graph is intricate (deep cloning). |
| Eliminates the need for multiple constructors. | Not ideal if the objects are not similar to each other. |
| Easy to add new products without changing the code. |                                           |

## **When to Use:**
- When you need to create objects that are very similar to one another.
- When object creation is expensive, and cloning is more efficient than constructing from scratch.
- When you need to clone complex objects with many configurations.
