// TODO 1: Create a <Card> component that accepts:
//   - title (string) — displayed as an <h3>
//   - children (any JSX) — the main content area
//   - footer (string, optional) — shown at the bottom with a top border
// Hint: use {children} in the return to render whatever is placed between <Card>...</Card>

// TODO 2: Create a <Badge> component that accepts:
//   - text (string) — the badge label
//   - color (string, default "blue") — one of "blue", "green", "red", "yellow"
// Use default parameter syntax: function Badge({ text, color = "blue" })
// Style it as a small pill (rounded background, colored text)

// TODO 3: Create a <ProductCard> component that accepts:
//   - name (string)
//   - price (number)
//   - tags (array of strings, default [])
//   - inStock (boolean, default true)
// It should:
//   - Use your <Card> component for layout
//   - Show the name as the card title
//   - Display the price formatted as "$XX.XX"
//   - Map over tags and render a <Badge> for each one
//   - Show "In Stock" (green) or "Out of Stock" (red) using a Badge
//   - Use the footer to display the price

// TODO 4: Create a products array with 3+ products and render them using <ProductCard>
// Use the spread operator to pass props: <ProductCard key={...} {...product} />

export default function App() {
  // TODO 4: Define your products array here
  // const products = [
  //   { name: "Wireless Mouse", price: 29.99, tags: ["tech", "office"], inStock: true },
  //   { name: "Mechanical Keyboard", price: 89.99, tags: ["tech", "gaming"], inStock: true },
  //   { name: "USB-C Hub", price: 45.00, tags: ["tech"], inStock: false },
  // ];

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>🛒 Product Catalog</h1>
      <p>Build your components below!</p>

      {/* TODO 4: Map over products and render <ProductCard> for each */}
    </div>
  );
}
