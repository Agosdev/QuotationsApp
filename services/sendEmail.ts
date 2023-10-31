import { Methods } from '@/enums';
import axios from 'axios';

const sendEmail = async (email: string, subject: string, message: string) => {
  return axios({
    method: Methods.POST,
    url: '/api/sendEmail',
    data: {
      email: email,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;