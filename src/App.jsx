import Container from './components/Container';
import Layout from './components/Layout';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Layout>
        <Container>
          <Card title="FAQs" />
        </Container>
      </Layout>
    </div>
  );
}

export default App;
