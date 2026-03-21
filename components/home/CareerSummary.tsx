import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function CareerSummary() {
  return (
    <Section variant="plain">
      <Container>
        <SectionHeader>Career Summary</SectionHeader>

        <ul className="mt-8 space-y-4 pl-5 marker:text-muted">

          <Text as="li" className="text-muted">
            Built Java (Spring Boot) microservices with REST-based communication, 
            Docker containerization, and integration testing using TestContainers.
          </Text>

          <Text as="li" className="text-muted">
           Developed full-stack applications using React, Node.js, Express, and MongoDB, 
           implementing authentication, CRUD functionality, and API integration.
          </Text>

          <Text as="li" className="text-muted">
            Designed and implemented RESTful APIs to support data-driven applications, 
            including search and filtering features.
          </Text>
            
            <Text as="li" className="text-muted">
            Built and evaluated machine learning models in Python (scikit-learn) 
            for classification and regression tasks, applying preprocessing, 
            feature engineering, and cross-validation techniques.
          </Text>
            
            <Text as="li" className="text-muted">
            Trained and tested neural networks (TensorFlow/Keras), 
            experimenting with architecture and hyperparameters to understand model performance and generalization.
          </Text>

          <Text as="li" className="text-muted">
            Streamlined data processing workflows using Excel, 
            reducing manual effort by approximately 40–50% across datasets of 1,000+ records.
          </Text>

          <Text as="li" className="text-muted">
            Conducted research applying statistical analysis and R, 
            resulting in a Thesis Prize nomination.
          </Text>
        </ul>
      </Container>
    </Section>
  );
}