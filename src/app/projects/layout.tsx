import type { Metadata } from "next";

const projectsUrl = "https://www.kishanmn.dev/projects";
const projectsTitle = "Projects";
const projectsDescription =
  "Selected projects by Kishan MN across AI tools, machine learning, full-stack development, analytics systems, and blockchain infrastructure.";
const previewImage = "/projects/Portfolio.png";

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
    images: [
      {
        url: previewImage,
        width: 2541,
        height: 1337,
        alt: "Kishan MN portfolio projects preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${projectsTitle} | Kishan MN`,
    description: projectsDescription,
    images: [previewImage],
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
