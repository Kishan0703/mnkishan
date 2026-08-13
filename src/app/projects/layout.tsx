import type { Metadata } from "next";

const projectsUrl = "https://www.kishanmn.dev/projects";
const projectsTitle = "Projects";
const projectsDescription =
  "Selected projects by Kishan MN across AI tools, machine learning, full-stack development, analytics systems, and blockchain infrastructure.";

export const metadata: Metadata = {
  title: projectsTitle,
  description: projectsDescription,
  alternates: {
    canonical: projectsUrl,
  },
  openGraph: {
    title: `${projectsTitle} | Kishan MN`,
    description: projectsDescription,
    url: projectsUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${projectsTitle} | Kishan MN`,
    description: projectsDescription,
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
