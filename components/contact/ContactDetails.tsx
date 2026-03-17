"use client";

import { useState } from "react";
import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import AppLink from "@/components/ui/AppLink";

import { actionIcons } from "@/components/icons/actionIcons"

const GitHubIcon = actionIcons.github
const LinkedInIcon = actionIcons.linkedin
const EmailIcon = actionIcons.email

export default function ContactDetails() {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <Section variant="plain">
      <Container>
        <SectionHeader>Contact</SectionHeader>

        <Text className="mt-4 max-w-xl text-muted">
          If you'd like to collaborate, discuss a project, or learn more about my
          work, feel free to reach out.
        </Text>

      <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <AppLink
            href="mailto:penny.ahlstrom@georgebrown.ca"
            icon={<EmailIcon size={14} />}
            variant="muted"
          >
            Email
          </AppLink>

          <AppLink
            href="https://github.com/yourusername"
            external
            icon={<GitHubIcon size={14} />}
            variant="muted"
          >
            GitHub
          </AppLink>

          <AppLink
            href="https://linkedin.com/in/yourusername"
            external
            icon={<LinkedInIcon size={14} />}
            variant="muted"
          >
            LinkedIn
          </AppLink>
        </div>
      </Container>
    </Section>
  );
}