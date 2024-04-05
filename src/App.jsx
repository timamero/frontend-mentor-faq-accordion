import Card from './components/Card';
import Container from './components/Container';
import Layout from './layout/Layout';

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
