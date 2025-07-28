import { useState } from "react";
import DefaultLayout from "@/layouts/default";
import { 
  Button,  
  Card, 
  CardBody, 
  Link, 
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  Input,
  Textarea
} from "@heroui/react";

export default function ContactPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    // TODO: Replace simulated call with an api call to my Mailu server
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      onOpen(); // Show success modal
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
      {/* Header Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-tr from-primary-900 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Chip color="secondary" variant="flat" className="mb-4">Get In Touch</Chip>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-secondary-400">Together</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Have a project in mind or looking to collaborate? I'm here to transform your ideas into reality.
            Don't hesitate to reach out — let's create something amazing.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <Card className="p-2 shadow-xl">
                <CardBody className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Input
                          label="Your Name"
                          placeholder="John Doe"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          color={errors.name ? "danger" : "primary"}
                          variant="bordered"
                          radius="sm"
                          isRequired
                          errorMessage={errors.name}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Input
                          label="Email Address"
                          placeholder="johndoe@example.com"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          color={errors.email ? "danger" : "primary"}
                          variant="bordered"
                          radius="sm"
                          isRequired
                          errorMessage={errors.email}
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Input
                        label="Subject"
                        placeholder="Project Inquiry / Job Opportunity"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="bordered"
                        radius="sm"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <Textarea
                        label="Your Message"
                        placeholder="Tell me about your project, goals, or any questions you have..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        color={errors.message ? "danger" : "primary"}
                        variant="bordered"
                        radius="sm"
                        minRows={5}
                        isRequired
                        errorMessage={errors.message}
                        className="w-full"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      radius="md"
                      className="w-full md:w-auto px-8"
                      isLoading={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <Card className="p-2 shadow-xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 h-full">
                <CardBody className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
                  
                  <div className="space-y-8">
                    {/* Email */}
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-secondary-500">
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        Email
                      </h3>
                      <Link 
                        href="mailto:derek@fjellworks.dev" 
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                        showAnchorIcon
                      >
                        derek@fjellworks.dev
                      </Link>
                    </div>
                    
                    {/* Social Media */}
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-secondary-500">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
                        </svg>
                        Social Media
                      </h3>
                      <div className="flex space-x-3">
                        <Button
                          as={Link}
                          href="https://github.com/leafstreamcreation"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="flat"
                          color="primary"
                          radius="full"
                          size="md"
                          className="min-w-0 w-12 h-12"
                          aria-label="GitHub"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </Button>
                        <Button
                          as={Link}
                          href="https://linkedin.com/in/fjelldereksoftware"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="flat"
                          color="primary"
                          radius="full"
                          size="md"
                          className="min-w-0 w-12 h-12"
                          aria-label="LinkedIn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </Button>
                        {/* <Button
                          isDisabled
                          as={Link}
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="flat"
                          color="primary"
                          radius="full"
                          size="md"
                          className="min-w-0 w-12 h-12"
                          aria-label="Twitter"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </Button> */}
                      </div>
                    </div>
                    
                    {/* Divider */}
                    <Divider className="my-8" />
                    
                    {/* Schedule a Meeting */}
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-secondary-500">
                          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                        </svg>
                        Schedule a Meeting
                      </h3>
                      <p className="text-foreground-600 dark:text-foreground-400 mb-4">
                        Prefer a face-to-face discussion? Book a time that works for you.
                      </p>
                      <Button
                        isDisabled
                        as={Link}
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="secondary"
                        variant="solid"
                        radius="md"
                        size="lg"
                        className="w-full"
                        startContent={
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                          </svg>
                        }
                      >
                        Book a 30-minute call
                      </Button>
                    </div>
                  </div> 
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-center pt-6">
            <div className="mx-auto bg-success-100 dark:bg-success-900 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-success-600 dark:text-success-400">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Message Sent Successfully!</h2>
          </ModalHeader>
          <ModalBody className="text-center px-8">
            <p className="text-lg">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible.
            </p>
          </ModalBody>
          <ModalFooter className="justify-center pb-6">
            <Button 
              color="primary" 
              variant="solid" 
              onPress={onClose}
              radius="md"
              size="lg"
              className="px-8"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}
