import { Accordion, AccordionGroup } from './components/Accordion';
import Card from './components/Card';
import Container from './components/Container';
import Layout from './layout/Layout.tsx';
import { faqsData } from './data';

function App() {
  return (
    <Layout>
      <Container>
        <Card title="FAQs">
          <Accordion>
            {faqsData.map((faq) => (
              <AccordionGroup
                key={faq.id}
                id={faq.id}
                item={faq.question}
                details={faq.answer}
              />
            ))}
          </Accordion>
        </Card>
      </Container>
    </Layout>
  );
}

export default App;
