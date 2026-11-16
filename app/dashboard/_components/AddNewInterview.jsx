"use client";

import { useState } from "react";
import { LoaderCircle, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { generateInterview } from "@/app/dashboard/actions";

export default function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { mockID } = await generateInterview({ jobPosition, jobDescription, jobExperience });
      setOpenDialog(false);
      setJobPosition("");
      setJobDescription("");
      setJobExperience("");
      window.location.assign(`/dashboard/interview/${encodeURIComponent(mockID)}`);
    } catch {
      setError("Interview generation failed. Check your details and try again. If the issue continues, contact the maintainer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button type="button" className="flex min-h-40 w-full flex-col items-center justify-center gap-2 rounded-lg border bg-secondary p-10 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200 hover:shadow-md" onClick={() => { setError(""); setOpenDialog(true); }} aria-label="Create a new interview">
        <Plus aria-hidden="true" />
        <span className="text-lg">Add New Interview</span>
      </button>
      <Dialog open={openDialog} onOpenChange={(open) => { if (!loading) setOpenDialog(open); }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Tell us about the interview</DialogTitle>
            <DialogDescription>Add the job role, technologies, and your years of experience.</DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div className="space-y-2">
              <label htmlFor="job-position" className="text-sm font-medium">Job role or position</label>
              <Input id="job-position" name="jobPosition" maxLength={255} placeholder="e.g. Software Engineer" required value={jobPosition} onChange={(event) => setJobPosition(event.target.value)} />
            </div>
            <div className="space-y-2">
              <label htmlFor="job-description" className="text-sm font-medium">Job description or tech stack</label>
              <Textarea id="job-description" name="jobDescription" maxLength={255} placeholder="e.g. React, Node.js, PostgreSQL" required value={jobDescription} onChange={(event) => setJobDescription(event.target.value)} />
            </div>
            <div className="space-y-2">
              <label htmlFor="job-experience" className="text-sm font-medium">Years of experience</label>
              <Input id="job-experience" name="jobExperience" type="number" min={0} max={15} step={1} placeholder="e.g. 2" required value={jobExperience} onChange={(event) => setJobExperience(event.target.value)} />
            </div>
            {error ? <p role="alert" className="text-sm text-destructive">{error}</p> : null}
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" className="rounded-md border px-4 py-2 text-sm" disabled={loading} onClick={() => setOpenDialog(false)}>Cancel</button>
              <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60">
                {loading ? <><LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />Generating...</> : "Start Interview"}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
