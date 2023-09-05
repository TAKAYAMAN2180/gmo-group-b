import { LoginButton, LogoutButton } from './_components/button/authButton'
import { getServerSession } from 'next-auth';
import { AppProvider } from './_providers';
import { GoogleCalenderCreate } from "@/app/_lib/GoogleCalendar";
import { writeFileSync } from 'fs';
import { options } from './options';
import { useEffect } from 'react';

interface UserEntity {
  email: string;
  accessToken?: string;
  refreshToken?: string;
}

export default async function Home() {
  const session = await getServerSession(options);
  const user = session?.user as UserEntity;
  const accessToken = user?.accessToken ?? "";
  const refreshToken = user?.refreshToken ?? "";


  useEffect(() => {
    const data = GoogleCalenderCreate(accessToken, refreshToken);
    writeFileSync('./calendar3.json', JSON.stringify(data));
  }, [accessToken, refreshToken]);


  return (
    <AppProvider>
      {!session ? <LoginButton /> : null}
      {session ? <LogoutButton /> : null}
    </AppProvider>
  )
}
