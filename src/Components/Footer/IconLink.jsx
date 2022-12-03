import React from 'react'

const IconLink = ({ href, iconUrl, alt }) => {
  return (
    <a key={alt} href={href}><img src={iconUrl} alt={alt} /></a>
  )
}

export default IconLink