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
          <div>
            {faqsData.map((faq) => (
              <div key={faq.id}>
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </Layout>
  );
}

export default App;
