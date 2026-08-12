import { NextResponse } from "next/server";
import { aboutData } from "@/lib/data";

type GitHubContributionsResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions?: number;
        };
      };
    };
  };
};

const fallbackContributions = aboutData.stats.githubContributions;

const getFallbackResponse = () => {
  return NextResponse.json({ contributions: fallbackContributions });
};

export async function GET() {
  if (!process.env.GITHUB_TOKEN) {
    return getFallbackResponse();
  }

  const query = `
    query {
      user(login: "Kishan0703") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),

      // Cache for one hour
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return getFallbackResponse();
    }

    const data = (await response.json()) as GitHubContributionsResponse;
    const contributions =
      data.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions;

    return NextResponse.json({
      contributions:
        typeof contributions === "number"
          ? contributions
          : fallbackContributions,
    });
  } catch {
    return getFallbackResponse();
  }
}
