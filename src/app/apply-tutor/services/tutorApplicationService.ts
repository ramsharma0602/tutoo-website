import axios from 'axios';

// Uses VITE_API_BASE_URL when set (e.g. local dev against a separate backend);
// otherwise falls back to whatever domain the site is currently served from,
// so the same build works correctly across environments (staging, prod, etc.)
// without needing a hardcoded URL.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `${window.location.origin}/`;

export const submitTutorApplication = async (data: FormData) => {

  const response = await axios.post(
    `${API_BASE_URL}api/become-tutor/store`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data;
};


export const getBoards = async () => {

  const response = await axios.get(
    `${API_BASE_URL}api/get-boards`,
  );

  return Array.isArray(response.data?.data) ? response.data.data : [];
};

export const getClasses = async () => {

  const response = await axios.get(
    `${API_BASE_URL}api/get-categories`,
  );

  return Array.isArray(response.data?.data) ? response.data.data : [];
};

export const getSubjects = async (class_id: number, board_id: number) => {
  const response = await axios.get(
    `${API_BASE_URL}api/get-subject?category_id=${class_id}&board_id=${board_id}`
  );

  return Array.isArray(response.data?.data) ? response.data.data : [];
};