"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { submitContact, type ContactPayload, ApiError } from "@/lib/api";
import { CheckCircle2 } from "lucide-react";

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

function isDirty(data: ContactPayload): boolean {
  return (
    data.name !== initial.name ||
    data.email !== initial.email ||
    data.subject !== initial.subject ||
    data.message !== initial.message
  );
}

export function ContactForm() {
  const [data, setData] = useState<ContactPayload>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty(data) && status !== "success") {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [data, status]);

  const handleChange = (k: keyof ContactPayload) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(data);
    if (Object.keys(err).length) {
      setErrors(err);
      setErrorMessage(null);
      return;
    }
    setErrors({});
    setErrorMessage(null);
    setStatus("loading");
    try {
      await submitContact(data);
      setStatus("success");
      setData(initial);
    } catch (raw) {
      setStatus("error");
      if (raw instanceof ApiError) {
        setErrorMessage(raw.message);
        if (raw.errors && Object.keys(raw.errors).length) {
          setErrors((prev) => ({ ...prev, ...raw.errors }));
        }
      } else {
        setErrorMessage("Something went wrong. Please try again or contact us directly.");
      }
    }
  };

  const handleClear = () => {
    setData(initial);
    setErrors({});
    setErrorMessage(null);
    setStatus("idle");
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
        helperText="We'll reply to this email."
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
        <div
          className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-green-700"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" aria-hidden />
          <p className="text-sm font-medium">
            Thank you! Your message has been sent.
          </p>
        </div>
      )}
      {status === "error" && errorMessage && (
        <p className="text-sm text-red-500" role="alert">
          {errorMessage}
        </p>
      )}
      <div className="flex flex-wrap gap-3">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={handleClear}
          disabled={status === "loading" || !isDirty(data)}
        >
          Clear
        </Button>
      </div>
    </form>
  );
}
