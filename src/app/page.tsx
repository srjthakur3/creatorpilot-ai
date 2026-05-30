import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoveRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
              CreatorPilot AI: Your AI Co-Pilot for Viral Content Creation
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Effortlessly generate scripts, hooks, titles, hashtags, and scene breakdowns.
              Transform your ideas into engaging content faster than ever.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/signup">
                  Get Started for Free
                  <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-accent text-accent hover:text-foreground">
                <Link href="/login">
                  Login to Your Account
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-accent">
              <Image
                src="https://picsum.photos/seed/creatorpilot1/1200/800"
                alt="CreatorPilot AI Dashboard Preview"
                fill
                className="object-cover"
                priority
                data-ai-hint="abstract technology background"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-4">
                <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
              Unlock Your Creative Potential
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              All the tools you need to streamline your content creation workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="font-headline">Script Generator</CardTitle>
                <CardDescription>Generate engaging video scripts in seconds.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Input your topic and language, and let AI craft a compelling script ready for production.</p>
              </CardContent>
              <CardFooter>
                <Link href="/signup" className="text-primary hover:underline">
                  Try it Now <MoveRight className="inline-block h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="font-headline">Hook Generator</CardTitle>
                <CardDescription>Craft attention-grabbing hooks that boost watch time.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Create viral hooks that instantly capture your audience's attention and keep them watching.</p>
              </CardContent>
              <CardFooter>
                <Link href="/signup" className="text-primary hover:underline">
                  Try it Now <MoveRight className="inline-block h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="font-headline">SEO Title Generator</CardTitle>
                <CardDescription>Optimize your titles for maximum discoverability.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Generate SEO-friendly titles that rank higher and attract more viewers.</p>
              </CardContent>
              <CardFooter>
                <Link href="/signup" className="text-primary hover:underline">
                  Try it Now <MoveRight className="inline-block h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="font-headline">Hashtag Generator</CardTitle>
                <CardDescription>Discover relevant hashtags to expand your reach.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Get a curated list of trending and relevant hashtags for your content.</p>
              </CardContent>
              <CardFooter>
                <Link href="/signup" className="text-primary hover:underline">
                  Try it Now <MoveRight className="inline-block h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="font-headline">Scene Breakdown Generator</CardTitle>
                <CardDescription>Visualize your content scene by scene.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Easily plan your video shoots with detailed visual and audio scene descriptions.</p>
              </CardContent>
              <CardFooter>
                <Link href="/signup" className="text-primary hover:underline">
                  Try it Now <MoveRight className="inline-block h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-card flex flex-col justify-between">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <CardTitle className="font-headline">All-in-One Dashboard</CardTitle>
                <CardDescription>Manage all your AI-generated content in one place.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A clean and intuitive interface to generate, review, and organize your creative assets.</p>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="text-primary hover:underline">
                  Go to Dashboard <MoveRight className="inline-block h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
              Flexible Plans for Every Creator
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that best fits your needs.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Free Plan Card */}
            <Card className="w-full max-w-md bg-card border border-accent">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Free Plan</CardTitle>
                <CardDescription>Perfect for getting started.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold font-headline text-primary">$0<span className="text-base font-normal text-muted-foreground">/month</span></div>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>Basic Script Generation (Limited)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>1 Viral Hook per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>5 SEO Titles per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>10 Hashtags per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>Limited Scene Breakdowns</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-card">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan Card */}
            <Card className="w-full max-w-md bg-card relative border-2 border-primary shadow-lg shadow-primary/30">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-card-foreground rounded-full text-xs font-bold font-headline tracking-wider animate-bounce">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Pro Plan</CardTitle>
                <CardDescription>For serious creators.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold font-headline text-primary">$29<span className="text-base font-normal text-muted-foreground">/month</span></div>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>Unlimited Script Generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>Unlimited Viral Hooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>Unlimited SEO Titles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>Unlimited Hashtags</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span>Unlimited Scene Breakdowns</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full text-lg">
                  <Link href="/signup">Upgrade to Pro</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-t from-secondary/10 to-background">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            Ready to Elevate Your Content?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of creators already using CreatorPilot AI to produce amazing content.
            Sign up today and start creating.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="text-lg px-12 py-4">
              <Link href="/signup">
                Create Your Free Account
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/10 text-muted-foreground text-center">
        <div className="container px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} CreatorPilot AI. All rights reserved.</p>
          <nav className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
