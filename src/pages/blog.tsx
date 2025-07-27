import { useState } from "react";
import DefaultLayout from "@/layouts/default";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Link,
  Chip,
  Avatar,
  Tabs,
  Tab,
  Pagination,
  Input,
  Divider,
  Image
} from "@heroui/react";

// Sample blog data - replace with your actual data/API
const blogPosts = [
  {
    id: 1,
    title: "Solving Sensor Drift in IoT Applications",
    excerpt: "Exploring practical solutions to sensor calibration degradation in long-term IoT deployments and how to implement auto-correction algorithms.",
    author: {
      name: "Derek Fjell",
      avatar: "https://placehold.co/100/123758/FFFFFF?text=DF"
    },
    date: "May 10, 2025",
    category: "AI Trends",
    readTime: "8 min read",
    image: "https://placehold.co/600x400/123758/FFFFFF?text=Sensor+Drift"
  },
  {
    id: 2,
    title: "Procedural Cloud Generation for WebGL",
    excerpt: "A deep dive into generating realistic volumetric clouds with WebGL shaders, optimized for real-time rendering in browser environments.",
    author: {
      name: "Derek Fjell",
      avatar: "https://placehold.co/100/123758/FFFFFF?text=DF"
    },
    date: "April 28, 2025",
    category: "Dev Tips",
    readTime: "12 min read",
    image: "https://placehold.co/600x400/0DA6D4/FFFFFF?text=Procedural+Clouds"
  },
  {
    id: 3,
    title: "Optimizing Rotated Rectangle Collision Detection",
    excerpt: "A performant approach to handling rotated rectangle collisions in 2D game development with JavaScript and WebGL.",
    author: {
      name: "Derek Fjell",
      avatar: "https://placehold.co/100/123758/FFFFFF?text=DF"
    },
    date: "April 15, 2025",
    category: "Dev Tips",
    readTime: "10 min read",
    image: "https://placehold.co/600x400/C23F0E/FFFFFF?text=Rotated+Rectangles"
  },
  {
    id: 4,
    title: "Building a Virtualized 3D Mouse for Web Applications",
    excerpt: "Creating an intuitive 3D navigation interface for complex web applications using Three.js and pointer events.",
    author: {
      name: "Derek Fjell",
      avatar: "https://placehold.co/100/123758/FFFFFF?text=DF"
    },
    date: "March 30, 2025",
    category: "Dev Tips",
    readTime: "15 min read",
    image: "https://placehold.co/600x400/123758/FFFFFF?text=3D+Mouse"
  },
  {
    id: 5,
    title: "Unifying Gamepad and Keyboard Input in Web Games",
    excerpt: "Designing a flexible input system that seamlessly handles both keyboard and gamepad controllers for web-based games.",
    author: {
      name: "Derek Fjell",
      avatar: "https://placehold.co/100/123758/FFFFFF?text=DF"
    },
    date: "March 18, 2025",
    category: "Tech Reviews",
    readTime: "9 min read",
    image: "https://placehold.co/600x400/0DA6D4/FFFFFF?text=Input+Systems"
  },
  {
    id: 6,
    title: "Modern Encryption Approaches for Progressive Web Apps",
    excerpt: "Implementation strategies for client-side encryption in PWAs to ensure data security while maintaining offline functionality.",
    author: {
      name: "Derek Fjell",
      avatar: "https://placehold.co/100/123758/FFFFFF?text=DF"
    },
    date: "March 5, 2025",
    category: "Tech Reviews",
    readTime: "11 min read",
    image: "https://placehold.co/600x400/C23F0E/FFFFFF?text=PWA+Encryption"
  }
];

// Categories for filtering
const categories = ["All", "AI Trends", "Dev Tips", "Tech Reviews", "Career Growth"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Filter posts by selected category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Chip color="secondary" variant="flat" className="mb-4">Blog & Insights</Chip>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Ideas</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Sharing knowledge on full stack development, AI innovations, and modern technology solutions.
            Deep dives into problems I've solved and techniques worth sharing.
          </p>
        </div>
      </section>

      {/* Categories and Search */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <Tabs 
            aria-label="Blog categories" 
            color="primary" 
            radius="full" 
            size="lg"
            selectedKey={selectedCategory}
            onSelectionChange={(key) => {
              setSelectedCategory(key.toString());
              setCurrentPage(1);
            }}
          >
            {categories.map((category) => (
              <Tab key={category} title={category} />
            ))}
          </Tabs>
          
          <div className="w-full md:w-72">
            <Input
              type="search"
              placeholder="Search posts..."
              radius="full"
              startContent={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-default-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentPosts.map((post) => (
            <Card key={post.id} className="w-full h-full shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="p-0 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform hover:scale-105 duration-500"
                  width={600}
                  height={400}
                />
              </CardHeader>
              <CardBody className="px-6 py-5">
                <div className="flex justify-between items-center mb-3">
                  <Chip color={post.category === "AI Trends" ? "secondary" : 
                          post.category === "Dev Tips" ? "primary" : 
                          post.category === "Tech Reviews" ? "warning" : "success"} 
                        variant="flat" 
                        size="sm"
                  >
                    {post.category}
                  </Chip>
                  <span className="text-small text-default-500">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-default-500 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <Avatar
                    src={post.author.avatar}
                    size="sm"
                    className="mr-2"
                  />
                  <div className="flex justify-between items-center w-full">
                    <span className="text-small font-medium">{post.author.name}</span>
                    <span className="text-small text-default-500">{post.date}</span>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="px-6 py-4 border-t border-default-100">
                <Button
                  as={Link}
                  href={`/blog/${post.id}`}
                  color="primary"
                  variant="flat"
                  radius="full"
                  className="w-full"
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <Pagination 
              total={totalPages} 
              initialPage={currentPage}
              onChange={setCurrentPage}
              color="primary"
              size="lg"
              radius="full"
              showControls
            />
          </div>
        )}
      </section>

      {/* Newsletter Signup */}
      {/* <section className="max-w-7xl mx-auto px-4 py-16 mt-12">
        <div className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-6 opacity-90">
                Get the latest articles, tutorials, and tech insights delivered directly to your inbox.
                I'll send updates when new content is published - no spam, just valuable tech knowledge.
              </p>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-secondary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Coding tutorials and walkthroughs</span>
              </div>
              <div className="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-secondary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>AI and emerging tech trends</span>
              </div>
              <div className="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-secondary-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Exclusive resources and tools</span>
              </div>
            </div>
            <div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-xl font-medium mb-4">Subscribe to the Newsletter</h3>
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  radius="lg"
                  variant="bordered"
                  className="mb-4"
                />
                <Button
                  color="secondary"
                  size="lg"
                  radius="lg"
                  className="w-full font-medium"
                >
                  Subscribe
                </Button>
                <p className="text-xs mt-3 opacity-80 text-center">
                  By subscribing, you agree to receive updates. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Related Links */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <Divider className="my-8" />
        <div className="flex flex-wrap justify-center gap-4">
          <Button as={Link} href="/portfolio" size="lg" radius="full" variant="bordered" color="primary">
            View Portfolio
          </Button>
          {/* <Button as={Link} href="/toolkits" size="lg" radius="full" variant="bordered" color="success">
            Toolkits
          </Button> */}
          <Button as={Link} href="/contact" size="lg" radius="full" variant="solid" color="secondary">
            Contact Me
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
