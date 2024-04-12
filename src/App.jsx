import { useState } from 'react';
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
  const [activeID, setActiveID] = useState(1);
  const accordionGroup = faqsData.map((obj) => (
    <div key={obj.id}>
      <AccordionItem isActive={activeID === obj.id}>
        {obj.question}
      </AccordionItem>
      <AccordionDetails isActive={activeID === obj.id}>
        {obj.answer}
      </AccordionDetails>
    </div>
  ));
  console.log('data', faqsData);
  return (
    <Layout>
      <Container>
        <Card title="FAQs">
          <Accordion>{accordionGroup}</Accordion>
        </Card>
      </Container>
    </Layout>
  );
}

export default App;
