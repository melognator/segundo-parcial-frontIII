import React from 'react'
import IconLink from './IconLink';

const SocialLinks = () => {

    const socialIcons = [
        {
            iconUrl: "/images/ico-facebook.png",
            alt: "Facebook",
            href: "https://www.facebook.com",
        },
        {
            iconUrl: "/images/ico-instagram.png",
            alt: "Instagram",
            href: "https://www.instagram.com",
        },
        {
            iconUrl: "/images/ico-whatsapp.png",
            alt: "Whatsapp",
            href: "https://www.whatsapp.com",
        },
        {
            iconUrl: "/images/ico-tiktok.png",
            alt: "TikTok",
            href: "https://www.tiktok.com",
        },
    
    ]

    return (
        <div className='social-icons-container'>
            {socialIcons.map(icon => (<IconLink {...icon} />))}
        </div>
    )
}

export default SocialLinks