// Card Component
function Card({ title, children, footer }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>

      <div>{children}</div>

      {footer && (
        <div
          style={{
            borderTop: "1px solid #eee",
            marginTop: "12px",
            paddingTop: "8px",
            fontWeight: "bold",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  )
}

// Badge Component
function Badge({ text, color = "blue" }) {
  const colors = {
    blue: { background: "#e0f2ff", color: "#0369a1" },
    green: { background: "#dcfce7", color: "#166534" },
    red: { background: "#fee2e2", color: "#991b1b" },
    yellow: { background: "#fef9c3", color: "#854d0e" },
  }

  return (
    <span
      style={{
        ...colors[color],
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        marginRight: "6px",
        display: "inline-block",
      }}
    >
      {text}
    </span>
  )
}

// ProductCard Component
function ProductCard({ name, price, tags = [], inStock = true }) {
  return (
    <Card title={name} footer={`$${price.toFixed(2)}`}>
      <div style={{ marginBottom: "8px" }}>
        {tags.map((tag, index) => (
          <Badge key={index} text={tag} />
        ))}
      </div>

      <Badge
        text={inStock ? "In Stock" : "Out of Stock"}
        color={inStock ? "green" : "red"}
      />
    </Card>
  )
}

// App Component
export default function App() {
  const products = [
    {
      name: "Wireless Mouse",
      price: 29.99,
      tags: ["tech", "office"],
      inStock: true,
    },
    {
      name: "Mechanical Keyboard",
      price: 89.99,
      tags: ["tech", "gaming"],
      inStock: true,
    },
    { name: "USB-C Hub", price: 45.0, tags: ["tech"], inStock: false },
  ]

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        fontFamily: "system-ui",
      }}
    >
      <h1>🛒 Product Catalog</h1>

      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  )
}
