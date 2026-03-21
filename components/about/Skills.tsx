import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Skills() {
  return (
   <Section variant="light">
      <Container>
        <SectionHeader>Skills</SectionHeader>
          <div className="max-w-3xl">
            <SectionHeader as="h3" size="small">Technical Abilities</SectionHeader>
            <Text className="mt-4 text-muted">
              <strong>Languages:</strong> <br />Python, JavaScript, TypeScript, Java, C#, PHP, SQL, Swift
              <br />
              <strong>Frontend Development:</strong> <br />React, Angular, responsive UI design, component-based architecture
              <br />
              <strong>Backend Development:</strong> <br />Node.js, Express, Spring Boot, RESTful API design, authentication and middleware
              <br />
              <strong>Databases:</strong> <br />MongoDB, Postgres, relational database design, data modeling and structured data management
              <br />
              <strong>Machine Learning & Data:</strong> <br />scikit-learn, TensorFlow/Keras, pandas, NumPy, Matplotlib, data preprocessing and model evaluation
              <br />
              <strong>Tools & Technologies:</strong> <br />Git, Docker, Postman, TestContainers
              <br />
            </Text>
          </div>
          
           {/* Divider Line */}
          <div className="my-8 border-t border-border" />
          
          <div className="max-w-3xl">
            <SectionHeader as="h3" size="small">Applied Skills & Professional Strengths</SectionHeader>
            <Text className="mt-4 text-muted">
              Developing full-stack applications with end-to-end functionality from frontend to backend
              <br />
              Designing and integrating APIs to support data-driven systems
              <br />
              Building and evaluating machine learning models for real-world datasets
              <br />
              Automating workflows and reducing manual data processing through structured solutions
              <br />
              Translating complex requirements into clear, maintainable, and user-friendly systems
              <br />
              Public speaking and presentation experience through academic and research work
              <br />
              Ability to communicate technical concepts clearly to both technical and non-technical audiences
              <br />  
            </Text>
        </div>
      </Container>
    </Section>
  );
}