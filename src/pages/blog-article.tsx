;
import DefaultLayout from "@/layouts/default";
import {
  Button,
  Link,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Avatar,
  Divider,
  Image,
  Breadcrumbs,
  BreadcrumbItem,
  Tooltip,
  Snippet,
  Tabs,
  Tab
} from "@heroui/react";
// import { useParams } from "react-router-dom";

// Sample blog post data - replace with your actual data fetching logic
const blogPost = {
  id: 1,
  title: "Solving Sensor Drift in IoT Applications",
  excerpt: "Exploring practical solutions to sensor calibration degradation in long-term IoT deployments and how to implement auto-correction algorithms.",
  content: `
    <h2>Understanding Sensor Drift</h2>
    <p>One of the most challenging aspects of maintaining long-term IoT deployments is dealing with sensor drift. Over time, even the highest quality sensors begin to produce readings that gradually deviate from true values due to a variety of factors:</p>
    
    <ul>
      <li>Environmental conditions (temperature fluctuations, humidity)</li>
      <li>Component aging</li>
      <li>Physical degradation of sensing elements</li>
      <li>Chemical contamination</li>
    </ul>
    
    <p>For critical applications in industrial settings, healthcare, or environmental monitoring, this drift can lead to inaccurate data, false alarms, and ultimately, incorrect decision-making.</p>
    
    <h2>Implementing Auto-Correction Algorithms</h2>
    
    <p>The solution to sensor drift requires a combination of hardware considerations and software algorithms. Let's explore a practical approach to implementing an auto-correction system:</p>
    
    <h3>1. Baseline Reference System</h3>
    
    <p>The first step is establishing a reliable baseline. This typically involves:</p>
    
    <blockquote>
      "For any auto-correction system to work effectively, you need a reliable reference point. Without this, your corrections might actually introduce more errors than they solve."
    </blockquote>
    
    <p>In most cases, this means deploying higher-quality reference sensors alongside your regular sensor network, albeit in smaller numbers due to cost considerations.</p>
    
    <h3>2. Drift Detection Algorithm</h3>
    
    <p>Once you have reference measurements, you can implement drift detection. Here's a simplified example in TypeScript:</p>
  `,

  codeExample: `
// Real-time drift detection function
function detectDrift(
  sensorReading: number, 
  referenceReading: number, 
  driftThreshold: number = 0.05
): DriftResult {
  // Calculate percentage difference
  const difference = Math.abs(sensorReading - referenceReading);
  const percentDrift = difference / referenceReading;
  
  // Check if drift exceeds threshold
  const isDrifting = percentDrift > driftThreshold;
  
  return {
    isDrifting,
    percentDrift,
    rawDifference: difference,
    timestamp: new Date().toISOString()
  };
}

// Apply correction to a sensor reading based on calibration model
function applyDriftCorrection(
  reading: number,
  calibrationModel: CalibrationModel
): number {
  // Linear correction model (simplified example)
  return reading * calibrationModel.scaleFactor + calibrationModel.offset;
}

// Update calibration model based on new reference data
function updateCalibrationModel(
  currentModel: CalibrationModel,
  sensorData: number[],
  referenceData: number[]
): CalibrationModel {
  // Implement linear regression or other fitting algorithm
  const { slope, intercept } = linearRegression(sensorData, referenceData);
  
  return {
    scaleFactor: slope,
    offset: intercept,
    lastUpdated: new Date().toISOString()
  };
}
`,

  contentAfterCode: `
    <h3>3. Adaptive Calibration Strategy</h3>
    
    <p>For optimal results, implement an adaptive calibration strategy that:</p>
    
    <ul>
      <li>Performs periodic automatic recalibration against reference sensors</li>
      <li>Adjusts calibration frequency based on observed drift rates</li>
      <li>Employs sensor fusion techniques to improve accuracy</li>
      <li>Maintains a history of calibration adjustments for analysis</li>
    </ul>
    
    <h2>Real-World Implementation</h2>
    
    <p>I recently implemented this approach for an environmental monitoring system deployed across multiple industrial facilities. The results were impressive:</p>
    
    <ul>
      <li>Reduced measurement error by 78% compared to uncorrected sensors</li>
      <li>Extended the effective lifespan of sensors by 2.5x</li>
      <li>Decreased manual calibration requirements by 60%</li>
    </ul>
    
    <p>The system uses a combination of machine learning techniques and traditional statistical methods to continuously improve its correction models.</p>
    
    <h2>Conclusion</h2>
    
    <p>While sensor drift presents a significant challenge for IoT deployments, implementing an intelligent auto-correction system can dramatically improve data quality and extend the useful life of your sensor network. The key is building a solution that's adaptive, self-improving, and carefully validated against reliable reference measurements.</p>
    
    <p>In my next article, I'll dive deeper into specific machine learning models that have proven particularly effective for different types of environmental sensors.</p>
  `,
  
  author: {
    name: "Derek Fjell",
    avatar: "https://placehold.co/100/123758/FFFFFF?text=DF",
    bio: "Full-stack developer and IoT specialist with a focus on sensor systems and data processing pipelines. I've worked on large-scale deployments across industrial and environmental monitoring applications."
  },
  date: "May 10, 2025",
  category: "AI Trends",
  readTime: "8 min read",
  image: "https://placehold.co/1200x600/123758/FFFFFF?text=Sensor+Drift",
  tags: ["IoT", "Sensors", "Machine Learning", "Data Processing"],
  relatedPosts: [
    {
      id: 2,
      title: "Procedural Cloud Generation for WebGL",
      excerpt: "A deep dive into generating realistic volumetric clouds with WebGL shaders, optimized for real-time rendering in browser environments.",
      image: "https://placehold.co/600x400/0DA6D4/FFFFFF?text=Procedural+Clouds",
      category: "Dev Tips"
    },
    {
      id: 3,
      title: "Optimizing Rotated Rectangle Collision Detection",
      excerpt: "A performant approach to handling rotated rectangle collisions in 2D game development with JavaScript and WebGL.",
      image: "https://placehold.co/600x400/C23F0E/FFFFFF?text=Rotated+Rectangles",
      category: "Dev Tips"
    }
  ]
};

export default function BlogArticlePage() {
  // const params = useParams();

  return (
    <DefaultLayout>
      {/* Article Header */}
      <section className="w-full bg-gradient-to-b from-primary-900 to-primary-800 py-12 md:py-16 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <Breadcrumbs className="mb-6">
            <BreadcrumbItem>
              <Link href="/" color="foreground" className="opacity-80 hover:opacity-100">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/blog" color="foreground" className="opacity-80 hover:opacity-100">
                Blog
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{blogPost.title}</BreadcrumbItem>
          </Breadcrumbs>
          
          <Chip color="secondary" variant="flat" className="mb-4">
            {blogPost.category}
          </Chip>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {blogPost.title}
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <Avatar
              src={blogPost.author.avatar}
              size="md"
              className="border-2 border-white"
            />
            <div>
              <p className="font-medium">{blogPost.author.name}</p>
              <p className="text-sm opacity-80">{blogPost.date} · {blogPost.readTime}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="w-full bg-content1 py-6 -mt-6 rounded-t-3xl">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative -mt-16">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              width={1200}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Side Share Bar - Desktop Only */}
            <div className="hidden md:flex flex-col gap-3 sticky top-24 h-fit">
              <Tooltip content="Share on Twitter" placement="right">
                <Button
                  isIconOnly
                  variant="flat"
                  color="primary"
                  aria-label="Share on Twitter"
                  className="rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Button>
              </Tooltip>
              
              <Tooltip content="Share on LinkedIn" placement="right">
                <Button
                  isIconOnly
                  variant="flat"
                  color="primary"
                  aria-label="Share on LinkedIn"
                  className="rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </Button>
              </Tooltip>
              
              <Tooltip content="Share by Email" placement="right">
                <Button
                  isIconOnly
                  variant="flat"
                  color="primary"
                  aria-label="Share by Email"
                  className="rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                  </svg>
                </Button>
              </Tooltip>
              
              <Divider className="my-2" />
              
              <Tooltip content="Save Article" placement="right">
                <Button
                  isIconOnly
                  variant="flat"
                  color="secondary"
                  aria-label="Save Article"
                  className="rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5-3 5 3 5-3 5 3V4c0-1.103-.897-2-2-2zm0 16.764l-3-1.8-5 3-5-3-3 1.8V4h16v14.764z" />
                  </svg>
                </Button>
              </Tooltip>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Article Text */}
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              {/* Code Example */}
              <div className="my-8">
                <Snippet
                  symbol=""
                  codeString={blogPost.codeExample}
                  className="rounded-lg text-sm"
                >
                    <span>{blogPost.codeExample}</span>
                </Snippet>
              </div>
              
              {/* Rest of Article */}
              <div className="prose prose-lg dark:prose-invert max-w-none mb-10"
                dangerouslySetInnerHTML={{ __html: blogPost.contentAfterCode }}
              />
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 my-8">
                {blogPost.tags.map((tag) => (
                  <Chip key={tag} variant="flat" color="primary" size="sm">{tag}</Chip>
                ))}
              </div>
              
              {/* Author Bio Card */}
              <Card className="my-12 bg-content2">
                <CardBody className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <Avatar
                    src={blogPost.author.avatar}
                    size="lg"
                    className="border-2 border-primary-500"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Written by {blogPost.author.name}</h3>
                    <p className="text-foreground-500">{blogPost.author.bio}</p>
                    <Button
                      as={Link}
                      href={`/about`}
                      variant="flat"
                      color="secondary"
                      className="mt-4"
                      size="sm"
                    >
                      View Profile
                    </Button>
                  </div>
                </CardBody>
              </Card>
              
              {/* Mobile Share Bar */}
              <div className="flex md:hidden justify-center gap-3 my-8">
                <Button
                  variant="flat"
                  color="primary"
                  aria-label="Share on Twitter"
                  className="rounded-full"
                  startContent={
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  }
                >
                  Tweet
                </Button>
                <Button
                  variant="flat"
                  color="primary"
                  aria-label="Share on LinkedIn"
                  className="rounded-full"
                  startContent={
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  }
                >
                  Share
                </Button>
                <Button
                  variant="flat" 
                  color="secondary"
                  aria-label="Save Article"
                  className="rounded-full"
                  startContent={
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5-3 5 3 5-3 5 3V4c0-1.103-.897-2-2-2zm0 16.764l-3-1.8-5 3-5-3-3 1.8V4h16v14.764z" />
                    </svg>
                  }
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Insight Card */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
            <CardBody>
              <h3 className="text-2xl font-bold mb-3">Key Insight</h3>
              <p className="text-lg">
                Sensor drift correction isn't just about algorithms—it's about designing systems that can gracefully adapt to inevitable physical changes. The best solutions combine periodic recalibration with statistical models that improve over time.
              </p>
              <Button
                as={Link}
                href="/toolkits/sensor-drift-correction"
                variant="flat"
                color="secondary"
                className="mt-4"
              >
                Explore Toolkit
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
      
      {/* Related Articles */}
      <section className="py-12 bg-content1">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPost.relatedPosts.map((post) => (
              <Card key={post.id} isHoverable className="h-full">
                <CardHeader className="p-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover transition-transform hover:scale-105 duration-500"
                    width={600}
                    height={400}
                  />
                </CardHeader>
                <CardBody>
                  <Chip color={post.category === "AI Trends" ? "secondary" : 
                        post.category === "Dev Tips" ? "primary" : 
                        post.category === "Tech Reviews" ? "warning" : "success"} 
                        variant="flat" 
                        size="sm"
                        className="mb-2"
                  >
                    {post.category}
                  </Chip>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-foreground-500">{post.excerpt}</p>
                </CardBody>
                <CardFooter>
                  <Button
                    as={Link}
                    href={`/blog/post/${post.id}`}
                    color="primary"
                    variant="flat"
                    className="w-full"
                  >
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comment & Next Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Tabs aria-label="Blog options" color="primary" size="lg" radius="md">
            <Tab key="comments" title="Comments (3)">
              <Card className="my-4">
                <CardBody>
                  <p className="text-center py-8">Comments functionality would be implemented here.</p>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="suggestions" title="What to Read Next">
              <Card className="my-4 dark:bg-content2">
                <CardBody>
                  <h3 className="text-xl font-bold mb-4">Suggested Topics Based on Your Reading</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      as={Link}
                      href="/blog?category=AI+Trends"
                      variant="flat"
                      color="primary"
                      className="h-auto py-4 justify-start"
                      startContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      }
                    >
                      <div className="text-left">
                        <p className="font-bold">AI Trends</p>
                        <p className="text-sm text-foreground-500">Latest developments in artificial intelligence</p>
                      </div>
                    </Button>
                    
                    <Button
                      as={Link}
                      href="/blog?category=IoT"
                      variant="flat"
                      color="secondary"
                      className="h-auto py-4 justify-start"
                      startContent={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      }
                    >
                      <div className="text-left">
                        <p className="font-bold">IoT Development</p>
                        <p className="text-sm text-foreground-500">Smart devices and connected systems</p>
                      </div>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
          
          <div className="flex justify-between items-center mt-12">
            <Button
              as={Link}
              href="/blog"
              variant="light"
              startContent={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              }
            >
              Back to Blog
            </Button>
            
            <Button
              as={Link}
              href="/subscribe"
              color="secondary"
              variant="flat"
              endContent={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              }
            >
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}