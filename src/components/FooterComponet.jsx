
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterComponet() {
  return (
    <Footer container className='bg-gray-900 mt-8'>
      <div className="w-full  bg-gray-800">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='sm:flex  justify-between '>
              <img
              src='https://fbcd.co/images/products/71a0cf367add375691cb38e3b9603d56_resize.png'
              alt='Not Found'
              className='hidden md:block w-32 h-20'
              ></img>
              <p className='text-slate-100 font-bold text-2xl my-6 font-serif mx-2'>EzzyStore</p>
              
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 mx-2">
            <div>
              <FooterTitle title="about" className='text-slate-200 font-semibold' />
              <FooterLinkGroup col>
                <FooterLink href="#">Flowbite</FooterLink>
                <FooterLink href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" className='text-slate-200 font-semibold' />
              <FooterLinkGroup col>
                <FooterLink href="#">Github</FooterLink>
                <FooterLink href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" className='text-slate-200 font-semibold' />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between my-2 mx-2">
          <FooterCopyright href="#" by="Kuldeepkushwah™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center mx-3">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponet;