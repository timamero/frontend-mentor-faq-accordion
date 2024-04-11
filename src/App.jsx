import {
  Accordion,
  AccordionDetails,
  AccordionItem,
} from './components/Accordion';
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
          <Accordion>
            <AccordionItem>Item placeholder</AccordionItem>
            <AccordionDetails>Details placeholder</AccordionDetails>
          </Accordion>
        </Card>
      </Container>
    </Layout>
  );
}

export default App;
