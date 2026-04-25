"use client";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { useUser } from '@clerk/nextjs'
function Navbar() {
  const { user } = useUser()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/" >   <h2>PrompterPro  </h2></a>
        </div>
        <div className="nav-menu">
          <a href="/pricing" className="nav-link">Pricing</a>
          <a href="/about" className="nav-link">About</a>
          <a href="#download" className="nav-link">Download</a>
        </div>
        <div className="nav-auth">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn-signin">Sign In</button>

            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className='flex gap-2'> <h4>{user?.fullName}</h4>
              <UserButton /></div>

          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Navbar