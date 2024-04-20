function Footer() {
  return (
    <footer className='mt-auto'>
      <section className='p-5 text-white py-12 bg-footer'>
        <div className='container mx-auto px-4 lg:max-w-1140'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='col-span-2 md:col-span-1 lg:col-span-1'>
              <a href='#' className='mb-4 mt-2'>
                <img
                  src='https://static.coherentcommons.com/img/logos/coherent-white.svg'
                  alt='Coherent Digital'
                  width='180'
                  height='49'
                />
              </a>
            </div>
            <div className='col-span-1 md:col-span-1 lg:col-span-1'>
              <h3 className='font-semibold mb-2'>About</h3>
              <ul className='list-unstyled text-small'>
                <li>
                  <a href='#'>Africa Commons</a>
                </li>
                <li>
                  <a href='#'>Our Vision</a>
                </li>
                <li>
                  <a href='#'>The Team</a>
                </li>
                <li>
                  <a href='#'>Accessibility & VPAT</a>
                </li>
              </ul>
            </div>
            <div className='col-span-1 md:col-span-1 lg:col-span-1'>
              <h3 className='font-semibold mb-2'>Membership</h3>
              <ul className='list-unstyled text-small'>
                <li>
                  <a href='#'>Request a Demo</a>
                </li>
                <li>
                  <a href='#'>Sales Inquiries</a>
                </li>
                <li>
                  <a href='#'>Help</a>
                </li>
              </ul>
            </div>
            <div className='col-span-2 md:col-span-1 lg:col-span-1 mb-5'>
              <h3 className='font-semibold mb-2'>Newsletter</h3>
              <form
                action='https://coherentdigital.us20.list-manage.com/subscribe/post?u=d55edcaa77ac7fe8cec6e9ad6&amp;id=e183ecd55b'
                method='post'
                id='mc-embedded-subscribe-form'
                name='mc-embedded-subscribe-form'
                className='validate'
                target='_blank'
                noValidate=''
                aria-label='Email address - link opens in a new tab'
              >
                <label
                  htmlFor='mce-EMAIL'
                  style={{
                    color: "transparent",
                    width: 0,
                    height: 0,
                    position: "absolute",
                  }}
                >
                  Email address
                </label>
                <input
                  type='email'
                  id='mce-EMAIL'
                  name='EMAIL'
                  className='block text-sm w-full h-auto py-2 px-3 text-base font-normal leading-normal text-gray-700 bg-white border border-gray-600 rounded mt-3'
                  placeholder='Email address'
                  style={{ zIndex: 10 }}
                />
                <button
                  className='btn text-sm hover-brand mt-2 w-full border rounded border-transparent py-2 px-2 font-light text-black text-center align-middle select-none bg-subscribeBtn'
                  name='subscribe'
                  type='submit'
                  id='mc-embedded-subscribe'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className=''>
            <div
              id='google_translate_element'
              style={{ display: "inline-block" }}
            >
              <div className='skiptranslate goog-te-gadget' dir='ltr'>
                <div id=':0.targetLanguage'>
                  <select
                    className='goog-te-combo text-black'
                    aria-label='Language Translator'
                    style={{ fontSize: "10pt" }}
                  >
                    <option value=''>Choose Language</option>
                    <option value='en'>English</option>
                  </select>
                </div>
                <span style={{ whiteSpace: "nowrap" }}>
                  <a
                    className='VIpgJd-ZVi9od-l4eHX-hSRGPd'
                    href='https://translate.google.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src='https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png'
                      width='37px'
                      height='14px'
                      style={{ paddingRight: "3px" }}
                      alt='Google Translator'
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <small className='copyright'>
              Copyright © Coherent Digital, LLC
            </small>
            <small className='copyright'>
              <a href='#' className='mx-1'>
                Terms of Use
              </a>
              ·
              <a href='#' className='mx-1'>
                Privacy Policy
              </a>
              ·
              <a href='#' className='mx-1'>
                File Upload Policy
              </a>
            </small>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
