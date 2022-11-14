import { get } from './axiosInstance';

export const fetchUserList = async () => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2Njg0MjM2OTUsImV4cCI6MTY2ODQyNzI5NSwic3ViIjoiMTAyIn0.eOSEcusAPF3tC50B5rWjnyZzppexQYF4U4b93JUIDM4';

  const data = await get({
    url: '/api/users',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(data);

  return data;
};
