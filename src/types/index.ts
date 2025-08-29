import type {
  DropzoneInputProps,
  DropzoneRootProps,
  FileWithPath,
} from "react-dropzone";

export type DropzoneComponentProps = {
  getRootProps: () => DropzoneRootProps;
  getInputProps: () => DropzoneInputProps;
  acceptedFiles: readonly FileWithPath[];
};

export type Summary = {
  overall: {
    score: number;
    rating_text:
      | "Poor"
      | "Below Average"
      | "Average"
      | "Above Average"
      | "Excellent";
    stars: 1 | 2 | 3 | 4 | 5;
    summary: string;
  };
  ratings: {
    clarity_formatting: number;
    skills_relevance: number;
    experience_strength: number;
    overall_presentation: number;
  };
  skills_analysis: [
    {
      name: string;
      color: string;
      value: number;
    }
  ];
  experience_analysis: [
    {
      category: string;
      score: number;
    }
  ];
  suggestions: {
    strengths: string[];
    improvements: string[];
  };
};
