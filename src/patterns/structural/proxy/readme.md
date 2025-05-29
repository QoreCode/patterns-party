# [Proxy Design Pattern](https://refactoring.guru/design-patterns/proxy)

## Short Description

The Proxy is a structural design pattern that provides an object representing another object. It controls access to the original object, allowing you to perform additional actions before or after the request gets through.

## Diagram

![Proxy Structure](https://refactoring.guru/images/patterns/diagrams/proxy/structure.png)

## Pros and Cons

| Pros                                                                 | Cons                                                                 |
|----------------------------------------------------------------------|----------------------------------------------------------------------|
| Controls access to the original object                               | Adds an extra layer of indirection                                  |
| Can perform additional actions like lazy initialization, logging, or access control | May introduce slight performance overhead due to additional layer |
| Useful for implementing virtual proxies, remote proxies, and protection proxies | Complexity increases with the number of proxies                      |

## When to Use

Use the Proxy pattern when:

- You need to control access to an object.
- You want to perform actions before or after accessing the original object.
- You need to implement lazy initialization, caching, or access control.

Avoid using the Proxy pattern when:

- The added complexity of an additional layer is not justified.
- Direct access to the original object is required without any intermediary.

