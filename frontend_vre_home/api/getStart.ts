import { serverAxios } from './config';

export function submitEmployeeRequestApi(data: {
  username: string;
  email: string;
}) {
  return serverAxios({
    method: 'post',
    url: '/accounts',
    data: data,
  });
}

export function submitContractRequestApi(data: {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  contractDescription: string;
  interestDescription: string;
}) {
  const {
    firstName,
    lastName,
    email,
    institution,
    contractDescription,
    interestDescription,
  } = data;
  return serverAxios({
    method: 'post',
    url: '/accounts/contract',
    data: {
      first_name: firstName,
      last_name: lastName,
      email,
      contract_description: contractDescription,
      interest_description: interestDescription,
      instituation: institution, // backend typo
    },
  });
}
