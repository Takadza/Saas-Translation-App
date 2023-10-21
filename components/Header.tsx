import Logo from './Logo'
import DarkMoodToogle from './DarkMoodToogle'
import UserButton from './UserButton'
import { authOptions } from '@/auth'
import Link from 'next/link'
import { MessagesSquareIcon} from "lucide-react"
import { getServerSession } from "next-auth"


async function Header() {
 const session = await getServerSession(authOptions);
  return (
    <header  className='sticky top-0 bg-white dark:bg-gray-900'>
       <nav className='flex  flex-col sm:flex-row items-center p-5 pl-2 bg-white
       dark:bg-gray-900 max-w-7xl mx-auto'>
        <Logo/>

        <div className='flex-1 flex items-center justify-end space-x-4'> 
          {/**Language Select  */}

          {/**Sesson && .... */}
          {session ? (
            <>
            <Link
            href={"/chat"} prefetch={false}
            >
             <MessagesSquareIcon className='text-black dark:text-white'/>
             </Link>
            </>
          ): (
            <Link href="/pricing "> Pricing </Link>
          )}

          {/**Dark Mood Toogle  */}
          <DarkMoodToogle/>

          {/**User Button */}
          <UserButton session={session}/>
        </div>
       </nav>

       {/**Upgrade Banner  */}
    </header>
  )
}

export default Header