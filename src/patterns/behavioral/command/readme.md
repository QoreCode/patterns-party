# [Command Design Pattern](https://refactoring.guru/design-patterns/command)

## Short Description

The Command is a behavioral design pattern that turns a request into a stand-alone object, encapsulating all details of the request. This transformation allows you to pass requests as method arguments, delay or queue a request’s execution, and support undoable operations.

## Diagram

![Command Structure](https://refactoring.guru/images/patterns/diagrams/command/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Decouples sender and receiver, promoting flexibility                 | Introduces additional classes and complexity                         |
| Supports undo/redo functionality                                     | May lead to an increase in the number of classes                    |
| Enables queuing of requests and logging of the invocations           | Can make the system harder to understand due to the added abstraction|
| Facilitates parameterization of objects with operations              | Requires careful design to avoid excessive complexity               |

## When to Use

Use the Command pattern when:

- You need to decouple the sender and receiver of a request.
- You want to parameterize objects with operations.
- You need to queue requests, log the requests, or support undoable operations.

Avoid using the Command pattern when:

- The added complexity of additional classes is not justified.
- You don't need the flexibility provided by decoupling sender and receiver.
