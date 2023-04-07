import React from 'react';
import {
  FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { 
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements';

const Footer = () => {
  return (
   <FooterContainer>
      <FooterSubscription>
          <FooterSubHeading>
          We don’t want to just give you and your loved ones beautiful & healthy relaxed when you come to see us comes down to the three
          </FooterSubHeading>
          <FooterSubText>
              You can unsubscribe at any time.
          </FooterSubText>
          <Form>
            <FormInput name="email" type="email" placeholder="Your Email" />
              <Button fontBig>
                Subscribe
              </Button>
          </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <SocialMedia>
          <SocialLogo to='/'>
            <SocialIcon />
              KIM CLEMENS DENTAL CLINIC
          </SocialLogo>
          <WebsiteRights>KIM CLEMENS DENTAL CLINIC @ 2023</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label="Facebook"> 
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label="Twitter"> 
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label="Instagram"> 
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label="Linkedin"> 
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMedia>
      </FooterLinksContainer>
   </FooterContainer>
  )
}

export default Footer
