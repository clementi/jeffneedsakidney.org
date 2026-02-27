---
title: "Hello, World"
date: 2026-02-01
excerpt: "The first post on the new site — a quick note about what this place is."
tags:
  - post
  - meta
---

Welcome to the new site. After years of a bare-bones placeholder, I finally built something worth reading.

This site runs on [Eleventy](https://www.11ty.dev), is styled with plain CSS, and is hosted on S3. No JavaScript frameworks, no build-time bundling beyond what Eleventy provides.

## What to expect

- Short notes and longer essays on software, mathematics, and whatever else catches my attention
- Project write-ups
- The occasional bit of code

## Code example

Here's a small Rust snippet, just to test syntax highlighting:

```rust
fn fibonacci(n: u64) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}
```

## Mathematics

And a bit of math, rendered server-side with KaTeX. The quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

Euler's identity, perhaps the most beautiful equation in mathematics:

$$e^{i\pi} + 1 = 0$$

Inline math works too: the area of a circle is $A = \pi r^2$.

---

More soon.
