import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Layout>
        <div style={{ zIndex: 1, position: 'relative' }}>
          <h1 style={{ margin: 0 }}>test content</h1>
          <p> test content </p>
        </div>
      </Layout>
    </div>
  );
}

export default App;
