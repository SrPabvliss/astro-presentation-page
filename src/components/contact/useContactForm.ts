import { useState } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ;
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('idle');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          subject: formData.subject,
          message: formData.message,
          to_name: 'Pablo',
        },
        PUBLIC_KEY
      );
      setSendStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return { formData, handleChange, handleSubmit, isSending, sendStatus };
} 