import Container from './components/Container';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Container>
          <h1>FAQs</h1>
          <p>What is Frontend Mentor</p>
        </Container>
        {/* <div style={{ zIndex: 1, position: 'relative' }}>
          <h1 style={{ margin: 0 }}>test content</h1>
          <p> test content </p>
        </div> */}
      </Layout>
    </div>
  );
}

export default App;
