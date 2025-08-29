"use client"
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"
import { LoaderCircle } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/lib/db';
import { interviews } from '@/utils/schema';
import { Textarea } from '@/components/ui/textarea';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { chatSession } from '@/utils/GeminiAiModel';

function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobExperience, setJobExperience] = useState('');

    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const {user} = useUser();

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const InputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDescription}, Years of Experience: ${jobExperience}. Generate ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions with answers in this exact JSON format: {"questions":[{"question":"Q1","answer":"A1"},{"question":"Q2","answer":"A2"}]}`;

            const result = await chatSession.sendMessage(InputPrompt);
            const response = result.response.text();
            const cleanJson = response
                .replace(/```json/g, '')
                .replace(/```/g, '')
                .replace(/\n/g, '')
                .replace(/\r/g, '')
                .replace(/\t/g, '')
                .trim();

            const parsedJson = JSON.parse(cleanJson);
            console.log("Parsed JSON:", parsedJson);

            if(parsedJson) {
                const resp = await db.insert(interviews)
                .values({
                    mockID: uuidv4(),
                    jsonMockResp: cleanJson,
                    jobPosition: jobPosition,
                    jobDescription: jobDescription,
                    jobExperience: jobExperience,
                    createdBy: user?.primaryEmailAddress?.emailAddress,
                    createdAt: moment().format('DD-MM-YYYY')
                });
                console.log("Inserted ID:", resp);
                if(resp){
                    setOpenDialog(false);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    }
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary
      hover:scale-105 hover:shadow-md hover:bg-gray-200 cursor-pointer transition-all duration-300'
      onClick={() => setOpenDialog(true)}
      >
        <h2 className='text-lg text-center'>Add New</h2>
      </div>
      <Dialog open={openDialog}>
  <DialogContent className='max-w-2xl'>
    <DialogHeader>
      <DialogTitle className='text-2xl font-bold'>Tell us more about the interview</DialogTitle>
      <DialogDescription>
        Add Details about your job position/role and years of experience
      </DialogDescription>
    </DialogHeader>

    <form onSubmit={onSubmit} className="mt-4">
      <div className='space-y-4'>
        <div>
          <label>Job Role/Position</label>
          <Input type='text' placeholder='Ex. Software Engineer' required
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}    
          />
        </div>

        <div>
          <label>Job Description/ Tech Stack</label>
          <Textarea placeholder='Ex. React, Node, MongoDB' required
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Years of Experience</label>
          <Input placeholder='Ex. 5 years' type='number' max={15} min={0} required
            value={jobExperience}
            onChange={(e) => setJobExperience(e.target.value)}
          />
        </div>
      </div>

      <div className='flex gap-5 justify-end mt-6'>
        <button type='button' variant='ghost' onClick={() => setOpenDialog(false)}>Cancel</button>
        <button type='submit' disabled={loading}>
          {loading ? (
            <div className="flex items-center gap-2">
              <LoaderCircle className='animate-spin' size={16}/>
              <span>Generating...</span>
            </div>
          ) : "Start Interview"}
        </button>
      </div>
    </form>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview
