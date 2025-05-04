import { Accordion, AccordionGroup, AccordionItem, AccordionDetails } from './components/Accordion';
import Card from './components/Card';
import Container from './components/Container';
import Layout from './layout/Layout.tsx';
import { faqsData } from './data';

// TODO: Restructure the components so that AccordionItem and AccordionDetails are imported and used in App
function App() {
  return (
    <Layout>
      <Container>
        <Card title="FAQs">
          <Accordion>
            {faqsData.map((faq) => (
              <AccordionGroup key={faq.id}>
                <AccordionItem id={String(faq.id)}>
                  {faq.question}
                </AccordionItem>
                <AccordionDetails id={String(faq.id)}>
                  {faq.answer}
                </AccordionDetails>
              </AccordionGroup>
            ))}
          </Accordion>
        </Card>
      </Container>
    </Layout>
  );
}
            // {faqsData.map((faq) => (
            //   <AccordionGroup
            //     key={faq.id}
            //     id={String(faq.id)}
            //     item={faq.question}
            //     details={faq.answer}
            //   />
            // ))}
export default App;
