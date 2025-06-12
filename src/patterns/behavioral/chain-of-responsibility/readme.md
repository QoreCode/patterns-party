# [Chain of Responsibility Design Pattern](https://refactoring.guru/design-patterns/chain-of-responsibility)

## Short Description

The Chain of Responsibility is a behavioral design pattern that allows a request to pass through a chain of handlers. Each handler decides either to process the request or pass it along to the next handler in the chain, promoting loose coupling and flexibility in the system.

## Diagram

![Chain of Responsibility Structure](https://refactoring.guru/images/patterns/diagrams/chain-of-responsibility/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Decouples sender and receiver, promoting flexibility                 | Can be difficult to debug if the chain is long                      |
| Allows dynamic addition of handlers                                  | Performance overhead due to multiple handler checks                 |
| Supports single responsibility principle                             | Potential for duplicate code across handlers                        |
| Facilitates open/closed principle                                    | May lead to deep call stacks affecting performance                  |

## When to Use

Use the Chain of Responsibility pattern when:

- You need to decouple senders and receivers of requests.
- Multiple handlers can process a request, but you want to allow the request to pass through a chain of handlers.
- You want to add or remove handlers dynamically without affecting other parts of the system.

Avoid using the Chain of Responsibility pattern when:

- Each request must be handled by exactly one handler.
- The sender must know which receiver will handle the request.
- The chain of handlers is fixed and unlikely to change.
