"use client";

import { useState } from "react";
// import { Metadata } from "next";
import { COLORS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

// export const metadata: Metadata = {
//   title: 'Contact Us | Sridhi Enterprises',
//   description: 'Get in touch with Sridhi Enterprises for any queries or support.',
// }

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Form Submitted",
      description: "We've received your message and will get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`text-4xl font-bold mb-8 text-${COLORS.primary}`}>
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className={`mb-4 text-${COLORS.text}`}>
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
          <div className={`bg-${COLORS.white} p-6 rounded-lg shadow-md mb-6`}>
            <h2
              className={`text-2xl font-semibold mb-4 text-${COLORS.primary}`}
            >
              Contact Information
            </h2>
            <p className={`mb-2 text-${COLORS.text}`}>
              <strong>Address:</strong> 123 Distribution Lane, New Delhi, India
              110001
            </p>
            <p className={`mb-2 text-${COLORS.text}`}>
              <strong>Phone:</strong> +91 123 456 7890
            </p>
            <p className={`mb-2 text-${COLORS.text}`}>
              <strong>Email:</strong> info@sridhienterprises.com
            </p>
          </div>
          <div className={`bg-${COLORS.white} p-6 rounded-lg shadow-md`}>
            <h2
              className={`text-2xl font-semibold mb-4 text-${COLORS.primary}`}
            >
              Business Hours
            </h2>
            <p className={`mb-2 text-${COLORS.text}`}>
              <strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM
            </p>
            <p className={`mb-2 text-${COLORS.text}`}>
              <strong>Saturday:</strong> 10:00 AM - 4:00 PM
            </p>
            <p className={`mb-2 text-${COLORS.text}`}>
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>
        <div className={`bg-${COLORS.white} p-6 rounded-lg shadow-md`}>
          <h2 className={`text-2xl font-semibold mb-4 text-${COLORS.primary}`}>
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
