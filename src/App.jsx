import { Accordion } from './components/Accordion';
import Card from './components/Card';
import Container from './components/Container';
import Layout from './layout/Layout';
import { faqsData } from './data';

function App() {
  return (
    <Layout>
      <Container>
        <Card title="FAQs">
          <Accordion data={faqsData} />
        </Card>
      </Container>
    </Layout>
  );
}

export default App;
