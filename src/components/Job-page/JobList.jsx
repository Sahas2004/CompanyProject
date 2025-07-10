import React from "react";
import JobCard from "./JobCard";
import "./JobList.css";

const jobs = [
  {
    title: "Full Stack Developer",
    category: "IT & Telecomms > Software - Developer",
    location: "Multiple Locations",
    type: "Permanent / Full Time",
    salary: "$100,000 - $120,000 AUD",
    
    description: "Join our healthtech company as a WordPress Developer...",
    
    featured: true,
    image: "https://via.placeholder.com/60"
  },
  {
    title: "Digital Content Creator",
    category: "Multimedia / Design > Content / Editorial",
    location: "India",
    type: "Permanent / Full Time",
    salary: "Negotiable",
    
    description: "Creative role for a digital content wizard...",
   
    featured: false,
    image: "https://via.placeholder.com/60"
  },
  {
    title: "Civil Construction Labourer",
    category: "Building & Construction > Labourer",
    location: "India",
    type: "Contract / Temp",
    salary: "Not disclosed",
    
    description: "Labourer role opening soon...",
    
    featured: false,
    image: "https://via.placeholder.com/60"
  },
  {
    title: "Civil Construction Labourer",
    category: "Building & Construction > Labourer",
    location: "India",
    type: "Contract / Temp",
    salary: "Not disclosed",
    
    description: "Labourer role opening soon...",
    
    featured: false,
    image: "https://via.placeholder.com/60"
  }
,
   {
    title: "Digital Content Creator",
    category: "Multimedia / Design > Content / Editorial",
    location: "India",
    type: "Permanent / Full Time",
    salary: "Negotiable",
    
    description: "Creative role for a digital content wizard...",
   
    featured: false,
    image: "https://via.placeholder.com/60"
  }
,
{
    title: "Civil Construction Labourer",
    category: "Building & Construction > Labourer",
    location: "India",
    type: "Contract / Temp",
    salary: "Not disclosed",
    
    description: "Labourer role opening soon...",
    
    featured: false,
    image: "https://via.placeholder.com/60"
  },
  {
    title: "Digital Content Creator",
    category: "Multimedia / Design > Content / Editorial",
    location: "India",
    type: "Permanent / Full Time",
    salary: "Negotiable",
    
    description: "Creative role for a digital content wizard...",
   
    featured: false,
    image: "https://via.placeholder.com/60"
  },
  {
    title: "Full Stack Developer",
    category: "IT & Telecomms > Software - Developer",
    location: "Multiple Locations",
    type: "Permanent / Full Time",
    salary: "$100,000 - $120,000 AUD",
    
    description: "Join our healthtech company as a WordPress Developer...",
    
    featured: true,
    image: "https://via.placeholder.com/60"
  },
  
];

const JobList = () => {
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default JobList;