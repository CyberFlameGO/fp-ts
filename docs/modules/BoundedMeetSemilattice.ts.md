---
title: BoundedMeetSemilattice.ts
nav_order: 10
parent: Modules
---

## BoundedMeetSemilattice overview

A `BoundedMeetSemilattice` must satisfy the following laws in addition to `MeetSemilattice` laws:

- `a ∧ 1 <-> a`

Added in v3.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [type classes](#type-classes)
  - [BoundedMeetSemilattice (interface)](#boundedmeetsemilattice-interface)

---

# type classes

## BoundedMeetSemilattice (interface)

**Signature**

```ts
export interface BoundedMeetSemilattice<A> extends MeetSemilattice<A> {
  readonly one: A
}
```

Added in v3.0.0
