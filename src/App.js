export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}

function PackagingList() {
  return <div className="list">List</div>;
}

// function PackageItem(){}

function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have X item on your list, and you already packed X (X%) 🚀</em>
    </footer>
  );
}
