import Image from 'next/image'
import Link  from "next/link"
import { auth, signOut } from '@/auth'

const Navbar = async() => {
    const session = await auth()


  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
     <nav className='flex justify-betwee items-center'>
        <Link href="/">
        <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className='flex items-center gap-5'>
            {session && session?.user ? (
                <>
                <Link href="/learn/create">
                <span>Create</span>
                </Link>

                <button onClick={signOut}>
                    <span>Logout</span>
                </button>

                    <Link href={'/user/${session ?.id}'}>
                        <span>{session?.user?.name}</span>

                    </Link>

                </>
            )}
        </div>
     </nav>
    </header>
  )
}

export default Navbar
