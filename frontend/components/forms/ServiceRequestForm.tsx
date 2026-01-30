"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  submitServiceRequest,
  type ServiceRequestPayload,
} from "@/lib/api";

const SERVICE_TYPES = [
  "Barangay Clearance",
  "Certificate of Indigency",
  "Certificate of Residency",
  "Business Permit",
  "Other",
];

const initial: ServiceRequestPayload = {
  service_type: "",
  requester_name: "",
  requester_email: "",
  details: "",
};

type Errors = Partial<Record<keyof ServiceRequestPayload, string>>;

function validate(d: ServiceRequestPayload): Errors {
  const e: Errors = {};
  if (!d.service_type) e.service_type = "Please select a service.";
  if (!d.requester_name?.trim()) e.requester_name = "Name is required.";
  if (!d.requester_email?.trim()) e.requester_email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.requester_email))
    e.requester_email = "Please enter a valid email.";
  if (!d.details?.trim()) e.details = "Please provide details.";
  return e;
}

export function ServiceRequestForm() {
  const [data, setData] = useState<ServiceRequestPayload>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (k: keyof ServiceRequestPayload) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      await submitServiceRequest(data);
      setStatus("success");
      setData(initial);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div className="space-y-1">
        <label
          htmlFor="service_type"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Service type
        </label>
        <select
          id="service_type"
          value={data.service_type}
          onChange={handleChange("service_type")}
          className="w-full rounded-lg border border-zinc-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-primary focus:border-primary"
          aria-invalid={!!errors.service_type}
        >
          <option value="">Select a service</option>
          {SERVICE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.service_type && (
          <p className="text-sm text-red-500 dark:text-red-400" role="alert">
            {errors.service_type}
          </p>
        )}
      </div>
      <Input
        label="Your name"
        value={data.requester_name}
        onChange={handleChange("requester_name")}
        error={errors.requester_name}
        placeholder="Full name"
        required
      />
      <Input
        label="Email"
        type="email"
        value={data.requester_email}
        onChange={handleChange("requester_email")}
        error={errors.requester_email}
        placeholder="you@example.com"
        required
      />
      <Input
        label="Details"
        multiline
        value={data.details}
        onChange={handleChange("details")}
        error={errors.details}
        placeholder="Describe your request..."
        required
      />
      {status === "success" && (
        <p className="text-sm text-green-600 dark:text-green-400" role="status">
          Request submitted. We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500 dark:text-red-400" role="alert">
          Something went wrong. Please try again or visit us in person.
        </p>
      )}
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting…" : "Submit request"}
      </Button>
    </form>
  );
}
