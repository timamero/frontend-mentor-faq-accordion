import Container from './components/Container';
import Layout from './components/Layout';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Layout>
        <Container>
          <Card title="FAQs">
            <p>What is Frontend Mentor</p>
          </Card>
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
