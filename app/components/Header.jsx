import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {useRootLoaderData} from '~/root';
import {
  PredictiveSearchForm,
  PredictiveSearchResults,
} from '~/components/Search';
import Pincode from './Pincode';
import IconsHeader from './IconsHeader';
import Signin from './Signin';
/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart}) {
  const {shop, menu} = header;
  return (
    <header className="header">
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <div className="HeaderOne">
        {/* <strong>{shop.name}</strong> */}

        <svg xmlns="http://www.w3.org/2000/svg" width="230" height="35" viewBox="0 0 277 47">
                  <g id="Logo" transform="translate(-6.088 2.021)">
                    <path id="Path_576" data-name="Path 576" d="M3.612,17.971c.067,4.251,4.06,5.349,7.647,5.349,3.759,0,6.414-1.438,6.414-4.031,0-2.164-1.7-3.057-4.418-3.515l-5.387-.893C5.04,14.413.818,13.286.813,8.663c0-4.322,3.42-7.212,9.5-7.217,4.752,0,9.772,1.724,10.111,7.446H16.9C16.6,7.025,15.538,4.5,9.854,4.5c-2.593,0-5.521,1.1-5.516,3.893,0,1.461.965,2.627,3.888,3.124l5.822.993c1.858.334,7.145,1.232,7.15,6.08,0,6.056-5.416,7.785-10.2,7.785-5.349,0-10.9-1.853-10.909-8.406Z" transform="translate(6 4.178)" fill-rule="evenodd"></path>
                    <path id="Path_577" data-name="Path 577" d="M14.985,2.767c6.777,0,10.106,4.279,10.111,9.3s-3.319,9.309-10.1,9.309S4.883,17.1,4.883,12.076s3.319-9.3,10.1-9.309m0,2.789c-4.819,0-6.581,3.362-6.577,6.519s1.762,6.51,6.581,6.51,6.581-3.358,6.581-6.519-1.762-6.51-6.586-6.51" transform="translate(24.11 9.594)" fill-rule="evenodd"></path>
                    <path id="Path_578" data-name="Path 578" d="M9.523,3.366h3.324V5.993h.072c1.557-2.436,4.313-3.229,6.811-3.229,4.189-.01,7.312,1.791,7.312,6.137l.014,11.869-3.324,0,0-11.2c0-2.56-1.6-4.021-5.153-4.021-3.028,0-5.722,1.762-5.717,5.187l.01,10.039-3.334,0Z" transform="translate(42.684 9.552)" fill-rule="evenodd"></path>
                    <path id="Path_579" data-name="Path 579" d="M29.279,2.886H33L23.906,23.3c-1.662,3.687-2.961,4.322-6.047,4.322-.831,0-1.672-.067-2.531-.129V24.7c.6.033,1.122.134,1.925.134,2.063,0,2.565-.439,3.625-2.66l.759-1.6L13.58,2.891h3.83L23.4,16.651Z" transform="translate(57.938 9.475)" fill-rule="evenodd"></path>
                    <path id="Path_580" data-name="Path 580" d="M41.008,10.576c-.53-3.291-3.133-6.08-8.115-6.08-5.617.01-9.18,3.238-9.17,9.715,0,4.485,2.436,9.1,8.984,9.1,4.15,0,7.3-2,8.3-6.62l3.525-.01c-.568,5.259-5.091,9.681-11.864,9.681-5.98.01-12.466-3.286-12.466-12.528,0-6.911,4.313-12.4,12.423-12.4,4.757,0,11.305,2.02,11.907,9.137H41.008Z" transform="translate(82.364 4.104)" fill-rule="evenodd"></path>
                    <path id="Path_581" data-name="Path 581" d="M29.256,13.067a6.162,6.162,0,0,0,6.419,5.507c1.9,0,4.485-.626,5.621-3.09h3.525a9.417,9.417,0,0,1-8.974,5.889c-6.787,0-10.111-4.279-10.111-9.3s3.315-9.309,10.1-9.313c4.585,0,9.442,2.66,9.442,9.867v.43Zm12.5-2.6c-.5-3.157-2.971-4.919-6.09-4.915-3.057,0-5.817,1.8-6.309,4.924Z" transform="translate(104.179 9.544)" fill-rule="evenodd"></path>
                    <path id="Path_582" data-name="Path 582" d="M30.258,3.36h3.329V5.982h.072a7.767,7.767,0,0,1,6.806-3.229c4.193,0,7.317,1.791,7.317,6.142l0,11.869-3.319,0,0-11.21c0-2.555-1.6-4.021-5.153-4.021-3.028,0-5.717,1.772-5.717,5.2l0,10.035-3.319,0Z" transform="translate(121.638 9.506)" fill-rule="evenodd"></path>
                    <path id="Path_583" data-name="Path 583" d="M37.925,1.757h3.319l0,5.349,4.981,0V9.695H41.25V20.436c0,1.395,1,1.891,2.694,1.891a13.33,13.33,0,0,0,2.293-.234v2.794a21.506,21.506,0,0,1-3.716.239c-3.267,0-4.59-1.6-4.59-4.122V9.7H34.339l-.01-2.589,3.6,0Z" transform="translate(137.04 5.472)" fill-rule="evenodd"></path>
                    <path id="Path_584" data-name="Path 584" d="M40.433,13.056c.267,3.592,3.463,5.516,6.424,5.512,1.891,0,4.48-.63,5.612-3.085H56a9.411,9.411,0,0,1-8.974,5.884c-6.777.01-10.111-4.279-10.111-9.3s3.324-9.309,10.106-9.318c4.585,0,9.438,2.656,9.438,9.867v.43Zm12.5-2.593C52.44,7.3,49.98,5.538,46.857,5.548c-3.057,0-5.817,1.791-6.319,4.915Z" transform="translate(148.096 9.518)" fill-rule="evenodd"></path>
                    <path id="Path_585" data-name="Path 585" d="M41.438,3.354h3.315l0,3.19h.072a6.727,6.727,0,0,1,5.98-3.8,6.387,6.387,0,0,1,1.891.205l0,3.582A9.338,9.338,0,0,0,50.35,6.21c-3.291,0-5.588,1.93-5.583,5.717v8.845H41.448Z" transform="translate(164.381 9.48)" fill-rule="evenodd"></path>
                    <rect id="Rectangle_1442" data-name="Rectangle 1442" width="44.962" height="47" transform="translate(238.125 -2.021)"></rect>
                    <path id="Path_586" data-name="Path 586" d="M52.125.735A3.644,3.644,0,0,0,50.9.544a1.719,1.719,0,0,0-1.918,1.774,2.051,2.051,0,0,0,1.336,1.871c.642.354.95.619.95,1.066,0,.5-.358.736-.88.736a3.292,3.292,0,0,1-1.168-.237l-.247,1.029a4.578,4.578,0,0,0,1.434.233,1.788,1.788,0,0,0,2.02-1.806c0-1.061-.577-1.471-1.443-1.983-.642-.382-.847-.573-.847-.973,0-.5.424-.68.829-.68a2.676,2.676,0,0,1,.94.177Zm4.837,3.854c0-1.508-.712-2.416-1.946-2.416s-1.946.9-1.946,2.416.708,2.425,1.946,2.425c1.22,0,1.946-.917,1.946-2.425m-1.131,0c0,.9-.219,1.485-.819,1.485s-.824-.587-.824-1.485c0-.875.219-1.476.824-1.476s.819.605.819,1.476m2.02-2.309V6.908h1.117V4.4c0-.945.331-1.285.712-1.285.517,0,.6.456.6,1.21V6.912H61.4V3.854c0-1.01-.391-1.676-1.317-1.676a1.161,1.161,0,0,0-1.122.642H58.94V2.28Zm5.218,0H61.85l1.485,4.562-.568,1.774h1.164L65.974,2.28H64.792l-.843,3.091h-.014ZM50.291,19.127h1.816l.4,1.527h1.215L51.986,14.4H50.431L48.7,20.659h1.2Zm.884-3.775h.019l.666,2.742H50.519Zm6.61,5.3V16.027H56.664v2.5c0,.954-.317,1.289-.7,1.289-.521,0-.6-.456-.6-1.206V16.027H54.243v3.044c0,1.019.4,1.685,1.313,1.685a1.143,1.143,0,0,0,1.117-.642H56.7v.535h1.089Zm.633-3.691h.61v2.393c0,.875.344,1.345,1.262,1.345a4.475,4.475,0,0,0,.642-.047v-.926a3.16,3.16,0,0,1-.326.028c-.349,0-.461-.093-.461-.722V16.962h.787v-.936h-.787V14.8H59.029v1.229h-.61Zm3.231-2.756v6.447h1.127V18.145c0-.945.321-1.285.708-1.285.5,0,.6.456.6,1.21v2.588H65.2V17.6c0-1.01-.4-1.676-1.308-1.676a1.165,1.165,0,0,0-1.1.638h-.009V14.207Zm8.3,4.129c0-1.518-.712-2.416-1.946-2.416s-1.946.894-1.946,2.416c0,1.5.7,2.425,1.946,2.425,1.22,0,1.946-.926,1.946-2.425m-1.131,0c0,.894-.214,1.48-.819,1.48s-.824-.587-.824-1.48c0-.875.219-1.476.824-1.476s.819.605.819,1.476m4.371-2.4a2.543,2.543,0,0,0-.279-.014,1,1,0,0,0-.964.619h-.019v-.517H70.834v4.627h1.122V18.42c0-1.164.4-1.559.9-1.559a.993.993,0,0,1,.284.037Zm.647,4.716h1.127V16.027H73.837Zm-.023-5.363h1.173V14.207H73.814Zm4.9.852a3.512,3.512,0,0,0-1.243-.219,1.451,1.451,0,0,0-1.643,1.41c0,.7.377,1.033,1.192,1.415.535.247.717.4.717.675,0,.293-.214.4-.577.4a3.922,3.922,0,0,1-1.187-.223l-.191.931a4.338,4.338,0,0,0,1.387.233c.824,0,1.676-.363,1.676-1.415,0-.782-.461-1.1-1.234-1.462-.563-.256-.68-.358-.68-.628s.251-.4.554-.4a3.072,3.072,0,0,1,1.005.2Zm4.446,2.565v-.414c0-1.4-.433-2.374-1.755-2.374-1.345,0-1.946,1.113-1.946,2.425a2.171,2.171,0,0,0,2.3,2.416,3.5,3.5,0,0,0,1.033-.149l-.112-.908a2.53,2.53,0,0,1-.852.116,1.13,1.13,0,0,1-1.252-1.108h2.588Zm-1.774-1.946c.517,0,.7.5.7,1.038v.042H80.568c.056-.614.293-1.08.815-1.08m5.172-.307h-.023a1.206,1.206,0,0,0-1.01-.531c-1.057,0-1.667,1.061-1.667,2.416s.587,2.425,1.643,2.425a1.216,1.216,0,0,0,1.066-.605h.009v.5h1.1V14.207H86.555v2.248Zm-1.583,1.881c0-.843.242-1.476.768-1.476.554,0,.866.624.866,1.476s-.307,1.48-.866,1.48c-.526,0-.768-.633-.768-1.48M49.206,34.4h1.615c1.727,0,2.7-1.22,2.7-3.156s-.964-3.1-2.7-3.1H49.206Zm1.154-5.232h.386c1.141,0,1.62.838,1.62,2.095s-.479,2.109-1.62,2.109h-.386Zm7.583,3.286v-.41c0-1.392-.433-2.369-1.755-2.369-1.345,0-1.946,1.1-1.946,2.425a2.17,2.17,0,0,0,2.295,2.411,3.375,3.375,0,0,0,1.033-.149l-.107-.9a2.681,2.681,0,0,1-.857.116,1.137,1.137,0,0,1-1.252-1.113h2.588ZM56.171,30.5c.517,0,.7.5.7,1.033v.047H55.356c.056-.61.293-1.08.815-1.08m4.683.982c-1.238,0-2.351.223-2.351,1.578A1.3,1.3,0,0,0,59.871,34.5a1.1,1.1,0,0,0,1.066-.591h.023a3.37,3.37,0,0,0,.07.484h1a10.481,10.481,0,0,1-.047-1.052v-2c0-1.117-.633-1.676-1.871-1.676a4.3,4.3,0,0,0-1.122.149l.116.917a3.393,3.393,0,0,1,.94-.135c.568,0,.815.293.815.773v.116Zm0,.768v.326c0,.526-.247,1.066-.731,1.066-.34,0-.521-.251-.521-.638,0-.587.447-.754,1.117-.754ZM63.046,34.4h1.117V27.958H63.046Zm5.721-1.946v-.41c0-1.392-.433-2.369-1.755-2.369-1.341,0-1.946,1.1-1.946,2.425a2.17,2.17,0,0,0,2.295,2.411,3.349,3.349,0,0,0,1.033-.149l-.116-.9a2.6,2.6,0,0,1-.843.116,1.142,1.142,0,0,1-1.262-1.113h2.593ZM66.994,30.5c.512,0,.694.5.694,1.033v.047H66.175c.056-.61.3-1.08.819-1.08m5.014-.819a2.607,2.607,0,0,0-.279-.014,1,1,0,0,0-.964.619h-.019v-.512H69.652V34.4h1.122V32.166c0-1.173.4-1.564.894-1.564a1,1,0,0,1,.289.037Z" transform="translate(192.445 2.89)" fill="#fff"></path>
                  </g>
                </svg>
                <div className="First_div">                <PredictiveSearchForm>
          {({fetchResults, inputRef}) => (
            <div class="Search_wrapper_two">
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
              />
              &nbsp;
              {/* <button type="submit">Search</button> */}
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
        </div>
        <Pincode />
        <IconsHeader />
        <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
             </div>
          
      </NavLink>
      <div className="Nav-Wrapper">
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
      />
    </div>   
    </header>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 * }}
 */
export function HeaderMenu({menu, primaryDomainUrl, viewport}) {
  const {publicStoreDomain} = useRootLoaderData();
  const className = `header-menu-${viewport}`;

  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={closeAside}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
    
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={closeAside}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <a className="header-menu-mobile-toggle" href="#mobile-menu-aside">
      <h3>☰</h3>
    </a>
  );
}

function SearchToggle() {
  return <a href="#search-aside">Search</a>;
}

/**
 * @param {{count: number}}
 */
function CartBadge({count}) {
  return <a href="#cart-aside">Cart {count}</a>;
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

/** @typedef {Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>} HeaderProps */
/** @typedef {'desktop' | 'mobile'} Viewport */

/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('./Layout').LayoutProps} LayoutProps */
