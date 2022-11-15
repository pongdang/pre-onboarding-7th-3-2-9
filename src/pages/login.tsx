import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { useUserLogin } from '../hooks/useUser';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { login } = useUserLogin();
  const router = useRouter();

  const onLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({ email, password });
    router.push('/');
  };

  return (
    <>
      <form onSubmit={onLogin}>
        <input type="email" onChange={e => setEmail(e.target.value)} />
        <input type="password" onChange={e => setPassword(e.target.value)} />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
