import { useEffect } from "react";
import { useFormikContext } from "formik";

import { getSubjects } from "./services/assessmentApi";

export interface AssessmentSubject {
    id: number;
    name: string;
}

interface FormValues {
    boardId: string;
    classId: string;
    subjects: string[];
    subject_ids: number[];
}

interface SubjectFetcherProps {
    setSubjects: React.Dispatch<React.SetStateAction<AssessmentSubject[]>>;
    setLoadingSubjects: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubjectFetcher({
    setSubjects,
    setLoadingSubjects,
}: SubjectFetcherProps) {
    const { values, setFieldValue } =
        useFormikContext<FormValues>();

    useEffect(() => {
        const boardId = Number(values.boardId);
        const classId = Number(values.classId);

        // Reset if board or class is not selected
        if (!boardId || !classId) {
            setSubjects([]);
            setFieldValue("subjects", []);
            setFieldValue("subject_ids", []);

            return;
        }

        const fetchSubjects = async () => {
            try {
                setLoadingSubjects(true);

                const response = await getSubjects(
                    classId,
                    boardId
                );

                const formattedSubjects = response.map((item: any) => ({
                    id: item.subject.id,
                    name: item.subject.name,
                }));

                setSubjects(formattedSubjects);
            } catch (error) {
                console.error("Failed to fetch subjects:", error);
                setSubjects([]);
            } finally {
                setLoadingSubjects(false);
            }
        };

        // Clear previously selected subjects — they belong to the old board/class combo
        setFieldValue("subjects", []);
        setFieldValue("subject_ids", []);

        fetchSubjects();

    }, [
        values.boardId,
        values.classId,
        setFieldValue,
        setSubjects,
        setLoadingSubjects,
    ]);

    return null;
}
