# 🧩 Components & Props

**Tier 1 — React Fundamentals** | Interview Weight: ⭐⭐⭐ HIGH

## What You'll Learn

- What components are and why they matter
- How to pass data with props
- Default props via destructuring
- The special `children` prop
- Component composition (building complex UI from simple pieces)

## Key Concepts

### Components = Building Blocks
A React component is just a function that returns JSX. That's it. You're creating your own custom HTML elements.

```jsx
function Greeting() {
  return <h2>Hello!</h2>;
}
```

### Props = Data In
Props are how a parent component passes data down to a child. Think of them like function arguments.

```jsx
function UserCard({ name, role }) {
  return <div>{name} - {role}</div>;
}

// Usage:
<UserCard name="Max" role="Developer" />
```

### Golden Rules of Props
1. **Props are read-only** — never modify them inside a component
2. **Data flows DOWN** — parent → child, never the reverse (for now)
3. **Props can be anything** — strings, numbers, arrays, objects, even other components

### Default Props
Use JavaScript destructuring defaults:

```jsx
function Badge({ text = 'Beginner', color = '#4caf50' }) {
  return <span style={{ color }}>{text}</span>;
}
```

### Children Prop
Whatever you put between a component's opening and closing tags becomes `children`:

```jsx
function Card({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      {children}  {/* Whatever was placed inside <Card>...</Card> */}
    </div>
  );
}

// Usage:
<Card title="My Card">
  <p>This paragraph is the "children"</p>
</Card>
```

## 🎯 Interview Hot Takes

- **"What are props?"** — Read-only data passed from parent to child components. They make components reusable.
- **"Can you modify props?"** — No! Props are immutable. If you need to change data, use state (next lesson).
- **"What's the children prop?"** — A special prop that contains whatever JSX is placed between a component's opening and closing tags. It enables composition.
- **"Class vs function components?"** — Function components are the modern standard. Class components still work but hooks (coming soon) made functions the go-to.

## Run It

```bash
npm install
npm run dev
```

Or open in StackBlitz — no setup needed!
