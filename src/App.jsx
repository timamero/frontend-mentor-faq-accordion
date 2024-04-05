import Accordion from './components/Accordion';
import Card from './components/Card';
import Container from './components/Container';
import Layout from './layout/Layout';
import { faqsData } from './data';

function App() {
  console.log('data', faqsData);
  return (
    <Layout>
      <Container>
        <Card title="FAQs">
          <Accordion />
        </Card>
      </Container>
    </Layout>
  );
}

export default App;
