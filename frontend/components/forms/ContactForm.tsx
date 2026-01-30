"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { submitContact, type ContactPayload } from "@/lib/api";

const initial: ContactPayload = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type Errors = Partial<Record<keyof ContactPayload, string>>;

function validate(d: ContactPayload): Errors {
  const e: Errors = {};
  if (!d.name.trim()) e.name = "Name is required.";
  if (!d.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))
    e.email = "Please enter a valid email.";
  if (!d.subject.trim()) e.subject = "Subject is required.";
  if (!d.message.trim()) e.message = "Message is required.";
  return e;
}

export function ContactForm() {
  const [data, setData] = useState<ContactPayload>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (k: keyof ContactPayload) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(data);
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      await submitContact(data);
      setStatus("success");
      setData(initial);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <Input
        label="Name"
        value={data.name}
        onChange={handleChange("name")}
        error={errors.name}
        placeholder="Your name"
        required
      />
      <Input
        label="Email"
        type="email"
        value={data.email}
        onChange={handleChange("email")}
        error={errors.email}
        placeholder="you@example.com"
        required
      />
      <Input
        label="Subject"
        value={data.subject}
        onChange={handleChange("subject")}
        error={errors.subject}
        placeholder="What is this about?"
        required
      />
      <Input
        label="Message"
        multiline
        value={data.message}
        onChange={handleChange("message")}
        error={errors.message}
        placeholder="Your message..."
        required
      />
      {status === "success" && (
        <p className="text-sm text-green-600 dark:text-green-400" role="status">
          Thank you! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500 dark:text-red-400" role="alert">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
