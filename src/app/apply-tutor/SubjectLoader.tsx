import { useEffect } from "react";
import { useFormikContext } from "formik";

import { getSubjects } from "./services/tutorApplicationService";
import type { Subject } from "./TutorApplicationForm";

interface Option {
    id: number;
    name: string;
}

interface FormValues {
    boardId: string;
    classId: string;
    subjectId: string;
}

interface SubjectLoaderProps {
    setSubjects: React.Dispatch<
        React.SetStateAction<Subject[]>
    >;

    setLoadingSubjects: React.Dispatch<
        React.SetStateAction<boolean>
    >;
}

export default function SubjectLoader({
    setSubjects,
    setLoadingSubjects,
}: SubjectLoaderProps) {
    const { values, setFieldValue } =
        useFormikContext<FormValues>();

    useEffect(() => {
        const boardId = Number(values.boardId);
        const classId = Number(values.classId);

        // Reset if board or class is not selected
        if (!boardId || !classId) {
            setSubjects([]);
            setFieldValue("subjectId", "");

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

        // Clear previous selection
        setFieldValue("subjectId", "");

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