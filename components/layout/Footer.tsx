//import Link from "next/link";
import Container from "./Container";
import AppLink from "@/components/ui/AppLink"
import Text from "@/components/ui/Text"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
         <div className="flex items-center justify-between py-8">

          <Text variant="muted">
            © {new Date().getFullYear()} Penny Ahlstrom
          </Text>

          <div className="flex items-center gap-6">
            <AppLink
              href="https://github.com/yourusername"
              external
              variant="muted"
            >
              GitHub
            </AppLink>

            <AppLink
              href="https://linkedin.com/in/yourusername"
              external
              variant="muted"
            >
              LinkedIn
            </AppLink>

            <AppLink href="/contact" variant="muted">
              Contact
            </AppLink>
          </div>

        </div>
      </Container>
    </footer>
  )
}

// import Link from "next/link";
// import Container from "./Container";

// export default function Footer() {
//   return (
//     <footer className="border-t border-gray-200 bg-white">
//       <Container className="flex flex-col gap-4 py-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
//         <p>© 2026 Penny Ahlstrom. All rights reserved.</p>

//         <div className="flex items-center gap-4">
//           <Link href="/projects" className="transition hover:text-black">
//             Projects
//           </Link>
//           <Link href="/resume" className="transition hover:text-black">
//             Resume
//           </Link>
//           <Link href="/contact" className="transition hover:text-black">
//             Contact
//           </Link>
//         </div>
//       </Container>
//     </footer>
//   );
// }