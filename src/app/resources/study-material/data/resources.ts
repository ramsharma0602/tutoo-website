export interface StudyResource {
  id: string;

  title: string;

  board: string;

  className: string;

  subject: string;

  type:
    | "Notes"
    | "Worksheet"
    | "Sample Paper"
    | "Question Bank"
    | "Practice Test";

  fileType: "PDF" | "DOC";

  size: string;

  downloads: number;

  featured?: boolean;

  image: string;
}