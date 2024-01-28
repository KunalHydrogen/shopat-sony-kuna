import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {useRootLoaderData} from '~/root';


export default function Signin({isLoggedIn, cart, activeLinkStyle}) {
    return (
      <nav className="header-ctas" role="navigation">
        <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
          <Suspense fallback="Sign in">
            <Await resolve={isLoggedIn} errorElement="Sign in">
              {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
            </Await>
          </Suspense>
        </NavLink>
      </nav>
    );
  }