function Badge({ text, color = "blue" }) {
  const colors = {
    blue: { bg: "#dbeafe", text: "#1e40af" },
    green: { bg: "#dcfce7", text: "#166534" },
    red: { bg: "#fee2e2", text: "#991b1b" },
    yellow: { bg: "#fef9c3", text: "#854d0e" },
  };
  const style = colors[color] || colors.blue;

  return (
    <span style={{
      backgroundColor: style.bg,
      color: style.text,
      padding: "4px 12px",
      borderRadius: "9999px",
      fontSize: "0.85rem",
      fontWeight: 600,
    }}>
      {text}
    </span>
  );
}

function Card({ title, children, footer }) {
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "16px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    }}>
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      <div>{children}</div>
      {footer && (
        <div style={{
          borderTop: "1px solid #e5e7eb",
          paddingTop: "12px",
          marginTop: "12px",
          color: "#6b7280",
          fontSize: "0.9rem",
        }}>
          {footer}
        </div>
      )}
    </div>
  );
}

function UserProfile({ name, role, skills = [], avatar }) {
  return (
    <Card
      title={name}
      footer={`Role: ${role}`}
    >
      {avatar && (
        <div style={{ fontSize: "3rem", marginBottom: "8px" }}>{avatar}</div>
      )}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {skills.map((skill) => (
          <Badge key={skill.name} text={skill.name} color={skill.level} />
        ))}
      </div>
    </Card>
  );
}

function Alert({ type = "info", children }) {
  const styles = {
    info: { bg: "#eff6ff", border: "#3b82f6", icon: "ℹ️" },
    success: { bg: "#f0fdf4", border: "#22c55e", icon: "✅" },
    warning: { bg: "#fffbeb", border: "#f59e0b", icon: "⚠️" },
    error: { bg: "#fef2f2", border: "#ef4444", icon: "❌" },
  };
  const s = styles[type] || styles.info;

  return (
    <div style={{
      backgroundColor: s.bg,
      borderLeft: `4px solid ${s.border}`,
      padding: "12px 16px",
      borderRadius: "4px",
      marginBottom: "12px",
      display: "flex",
      gap: "8px",
    }}>
      <span>{s.icon}</span>
      <div>{children}</div>
    </div>
  );
}

function Button({ variant = "primary", size = "md", onClick, children }) {
  const variants = {
    primary: { bg: "#3b82f6", color: "#fff" },
    secondary: { bg: "#e5e7eb", color: "#374151" },
    danger: { bg: "#ef4444", color: "#fff" },
  };
  const sizes = {
    sm: { padding: "4px 12px", fontSize: "0.85rem" },
    md: { padding: "8px 20px", fontSize: "1rem" },
    lg: { padding: "12px 28px", fontSize: "1.1rem" },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...variants[variant],
        ...sizes[size],
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      {children}
    </button>
  );
}

export default function App() {
  const users = [
    {
      name: "Alice",
      role: "Frontend Dev",
      avatar: "👩‍💻",
      skills: [
        { name: "React", level: "green" },
        { name: "TypeScript", level: "blue" },
        { name: "CSS", level: "yellow" },
      ],
    },
    {
      name: "Bob",
      role: "Full Stack",
      avatar: "🧑‍💻",
      skills: [
        { name: "Node.js", level: "green" },
        { name: "React", level: "blue" },
        { name: "Docker", level: "red" },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>🧩 Advanced Props Patterns</h1>

      <Card title="Composition with children">
        <p>This card uses the <code>children</code> prop to render anything inside it.</p>
        <p>The footer and title are separate props — <strong>mix and match!</strong></p>
      </Card>

      <h2>Alerts (children + default props)</h2>
      <Alert type="success">Deployment successful!</Alert>
      <Alert type="warning">API rate limit at 80%.</Alert>
      <Alert type="error">Build failed — check logs.</Alert>
      <Alert>This is a default info alert.</Alert>

      <h2>Buttons (variant + size props)</h2>
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger" size="sm">Delete</Button>
        <Button size="lg">Large</Button>
      </div>

      <h2>User Profiles (object & array props)</h2>
      {users.map((user) => (
        <UserProfile key={user.name} {...user} />
      ))}
    </div>
  );
}
