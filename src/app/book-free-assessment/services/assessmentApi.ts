import axios from 'axios';

// Uses VITE_API_BASE_URL when set (e.g. local dev against a separate backend);
// otherwise falls back to whatever domain the site is currently served from,
// so the same build works correctly across environments (staging, prod, etc.)
// without needing a hardcoded URL.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `${window.location.origin}/`;

export const submitAssessment = async (data: any) => {

    const response = await axios.post(
        `${API_BASE_URL}api/student-enquiry`,
        data,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return response.data;
};