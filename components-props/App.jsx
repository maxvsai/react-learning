import React from 'react';

// 🧩 LESSON: Components & Props
// Components are the building blocks of React.
// Props are how you pass data from parent to child.

// --- 1. A Simple Function Component ---
// Think of components as custom HTML elements you create yourself.
function Greeting() {
  return <h2>Hello, welcome to React! 👋</h2>;
}

// --- 2. Component with Props ---
// Props = "properties" — data passed in from the parent.
// They're READ-ONLY. Never modify props inside a component.
function UserCard({ name, role, level }) {
  return (
    <div style={{
      border: '2px solid #61dafb',
      borderRadius: '12px',
      padding: '16px',
      margin: '12px 0',
      backgroundColor: '#1a1a2e',
      color: '#e0e0e0'
    }}>
      <h3 style={{ color: '#61dafb', margin: '0 0 8px 0' }}>{name}</h3>
      <p style={{ margin: '4px 0' }}>🎯 Role: {role}</p>
      <p style={{ margin: '4px 0' }}>📊 Level: {level}</p>
    </div>
  );
}

// --- 3. Default Props ---
// You can set defaults using destructuring defaults.
function Badge({ text = 'Beginner', color = '#4caf50' }) {
  return (
    <span style={{
      backgroundColor: color,
      color: 'white',
      padding: '4px 12px',
      borderRadius: '16px',
      fontSize: '14px',
      fontWeight: 'bold'
    }}>
      {text}
    </span>
  );
}

// --- 4. Composing Components Together ---
// The real power: building complex UI from small, reusable pieces.
function TeamRoster({ members }) {
  return (
    <div>
      <h2 style={{ color: '#61dafb' }}>🏆 Team Roster</h2>
      {members.map((member) => (
        <UserCard
          key={member.id}
          name={member.name}
          role={member.role}
          level={member.level}
        />
      ))}
    </div>
  );
}

// --- 5. Children Prop ---
// The special "children" prop: whatever you put BETWEEN the tags.
function Card({ title, children }) {
  return (
    <div style={{
      border: '1px solid #333',
      borderRadius: '8px',
      padding: '20px',
      margin: '16px 0',
      backgroundColor: '#16213e'
    }}>
      <h3 style={{ color: '#e94560', marginTop: 0 }}>{title}</h3>
      {children}
    </div>
  );
}

// --- Main App: Putting It All Together ---
export default function App() {
  const teamMembers = [
    { id: 1, name: 'Max', role: 'Frontend Dev', level: 'Rising Star ⭐' },
    { id: 2, name: 'Alex', role: 'Backend Dev', level: 'Senior 🚀' },
    { id: 3, name: 'Sam', role: 'Designer', level: 'Lead 🎨' },
  ];

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#0f3460',
      minHeight: '100vh',
      color: '#e0e0e0'
    }}>
      <h1 style={{ color: '#e94560', textAlign: 'center' }}>
        🧩 Components & Props
      </h1>

      {/* Simple component - no props */}
      <Greeting />

      {/* Component with props */}
      <Card title="Badges with Default Props">
        <p>These badges use default and custom props:</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Badge />
          <Badge text="Intermediate" color="#ff9800" />
          <Badge text="Advanced" color="#e94560" />
        </div>
      </Card>

      {/* Composing components with array data */}
      <TeamRoster members={teamMembers} />

      {/* Children prop in action */}
      <Card title="💡 Key Takeaway">
        <p>Components are like <strong>LEGO blocks</strong>.</p>
        <p>Props are the <strong>instructions</strong> that tell each block how to look.</p>
        <p>You build complex UIs by snapping simple pieces together!</p>
      </Card>
    </div>
  );
}
