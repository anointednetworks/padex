
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Form validation function
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting contact form:', formData);
      
      // Insert the form data into Supabase
      const { data, error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString()
        }]);
      
      console.log('Contact form submission response:', { data, error });
      
      if (error) {
        throw error;
      }
      
      // Success!
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Something went wrong",
        description: "Error: " + (error.message || 'Unknown error'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-100 p-6 sm:p-8 rounded-2xl shadow-sm border border-blue-100 relative">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base font-medium">Your Name</Label>
          <div className="transition-all duration-300 hover:shadow-md rounded-lg overflow-hidden">
            <Input 
              id="name"
              name="name"
              type="text" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" 
              className={`w-full p-3 border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-300 hover:border-blue-200 transition-all z-10 relative bg-white ${errors.name ? 'border-red-500' : ''}`}
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-medium">Your Email</Label>
          <div className="transition-all duration-300 hover:shadow-md rounded-lg overflow-hidden">
            <Input 
              id="email"
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" 
              className={`w-full p-3 border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-300 hover:border-blue-200 transition-all z-10 relative bg-white ${errors.email ? 'border-red-500' : ''}`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message" className="text-base font-medium">Your Message</Label>
          <div className="transition-all duration-300 hover:shadow-md rounded-lg overflow-hidden">
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message" 
              className={`w-full p-3 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 hover:border-blue-200 transition-all z-10 relative bg-white ${errors.message ? 'border-red-500' : ''}`}
              rows={3}
            />
          </div>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        
        <div className="relative rounded-lg overflow-hidden">
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white p-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] z-10 relative"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
