import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { NavGroup, NavButton } from './Styled'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {
  const { user, logout, loginWithRedirect } = useAuth0()
  if (user) {
    console.log(user)
  }

  const handleSignOut = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }

  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}`,
      },
    })
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.email}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
    </>
  )
}

export default Nav
