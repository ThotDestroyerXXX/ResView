import { useRef, useState } from "react";
import ExperienceAnalysis from "./sections/result/experience-analysis";
import Header from "./sections/result/header";
import OverallRating from "./sections/result/overall-rating";
import RatingBreakdown from "./sections/result/rating-breakdown";
import SkillAnalysis from "./sections/result/skill-analysis";
import Suggestion from "./sections/result/suggestion";
import type { Summary } from "./types";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export function Result({
  pdfName,
  summary,
}: Readonly<{ pdfName: string; summary: Summary }>) {
  const printRef = useRef(null);
  const [exporting, setExporting] = useState(false);
  const handleDownloadRef = async () => {
    setExporting(true);
    const element = printRef.current;
    if (!element) {
      setExporting(false);
      return;
    }

    const canvas = await html2canvas(element, {
      windowWidth: 1920,
      windowHeight: 1080,
    });

    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${pdfName}_ResView_Analysis.pdf`);
    setExporting(false);
  };
  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-8'>
        <Header handleDownload={handleDownloadRef} exporting={exporting} />
        <div className='grid lg:grid-cols-3 gap-6' ref={printRef}>
          <OverallRating overall={summary.overall} />
          <RatingBreakdown ratings={summary.ratings} />
          <SkillAnalysis skills={summary.skills_analysis} />
          <ExperienceAnalysis experience={summary.experience_analysis} />
          <Suggestion suggestion={summary.suggestions} />
        </div>
      </div>
    </div>
  );
}
