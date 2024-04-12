import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  const styleApp: React.CSSProperties = {
    display: "flex",
    maxWidth: "1620px",
    margin: "0 auto",
    width: "100%",
    height: "100vh",
    overflowY: "scroll",
  };
  return (
    <div className="wrapper" style={styleApp}>
      <Dashboard />
      <div
        className="wrapper"
        style={{ display: "flex", width: "100%", flexDirection: "column" }}
      >
        <Header />
        <Home />
      </div>
    </div>
  );
}
export default App;
