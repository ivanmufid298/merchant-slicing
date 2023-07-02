import axios from 'axios';

export interface ErrorProps {
  code: number | null;
  data: object | null;
  message: string;
}

const errorHandler = (error: any) => {
  if (typeof error === 'string') {
    return {
      code: null,
      data: null,
      message: error,
    };
  }

  if (axios.isAxiosError(error)) {
    const response = error.response;

    if (response?.status! >= 404) {
      return {
        code: response?.status,
        data: null,
        message: response?.data.error,
      } as ErrorProps;
    }

    return {
      code: response?.status,
      data: null,
      message: response?.data.error,
    } as ErrorProps;
  }

  if (error instanceof Error) {
    return {
      success: null,
      data: null,
      message: error.message,
    };
  }

  return {
    success: null,
    data: null,
    message: error?.message || 'Something went wrong',
  };
};

// eslint-disable-next-line import/prefer-default-export
export { errorHandler };
