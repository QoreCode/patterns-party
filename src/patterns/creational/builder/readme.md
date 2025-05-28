# [**Builder Pattern**](https://refactoring.guru/design-patterns/builder)

#### **Description:**
Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

![Builder Pattern](https://refactoring.guru/images/patterns/content/builder/builder-en.png?id=617612423ea3752477dc90929115b3ee)

| **Pros**                           | **Cons**                                  |
|-------------------------------------|-------------------------------------------|
| Simplifies the creation of complex objects. | Can result in many small classes if not carefully implemented. |
| Provides a flexible solution for building objects. | Not ideal if you don't need to build complex objects. |
| Promotes immutability and separation of concerns. |                                           |

#### **When to Use:**
- When the construction process of an object is complex or involves multiple steps.
- When you want to allow step-by-step customization of the object being built.
