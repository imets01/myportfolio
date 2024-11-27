﻿"use client";
import React, { useState } from "react";
import { Input, Textarea } from "@/components/ui/form";
import { LitUpButton } from "@/components/ui/button"; // Assuming you have this button
import emailjs from "emailjs-com"; // A popular email service to handle sending emails

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To show status of the form submission (success/error)

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_d07s0lk", // Replace with your emailJS service ID
        "template_wlpyc4w", // Replace with your emailJS template ID
        formData,
        "HAQewVbE5UEx9zabM" // Replace with your emailJS user ID
      );
      console.log(result.text); // For debugging

      // Set status to success and clear form
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error.text);
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section className="mb-16">
      <h2 className="text-lg font-semibold md:text-4xl mb-4 text-primary max-w-4xl">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Your Name"
          className="bg-secondary"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-secondary text-cyan-200"
          value={formData.email}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          className="bg-secondary"
          value={formData.message}
          onChange={handleChange}
        />
        <LitUpButton type="submit">Send Message</LitUpButton>
      </form>
      {status && <p className="mt-4 text-lg text-center">{status}</p>}
    </section>
  );
}