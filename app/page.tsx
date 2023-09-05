import { LoginButton, LogoutButton } from './_components/button/authButton'
import { getServerSession } from 'next-auth';
import { AppProvider } from './_providers';

export default async function Home() {
  const session = await getServerSession();

  return (
    <AppProvider>
      {!session ? <LoginButton /> : null}
      {session ? <LogoutButton /> : null}
    </AppProvider>
  )
}
