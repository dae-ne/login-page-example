import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface Inputs {
  email: string;
  password: string;
  remember: boolean;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    remember: yup.bool(),
  })
  .required();

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return { register, handleSubmit: handleSubmit(onSubmit), errors };
};
