import React from 'react';

function AppStoreButton({link}) {
    const buttonStyle = {
        display: 'inline-block',
        overflow: 'hidden',
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13,
        borderBottomLeftRadius: 13,
        width: 250,
        height: 83,
    };

    const imageStyle = {
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13,
        borderBottomLeftRadius: 13,
        width: 250,
        height: 83,
    };

  return (
    <a href={link} style={buttonStyle}>
        <img src="https://tools.applemediaservices.com/api/badges/download-on-the-mac-app-store/black/en-us?size=250x83&amp;releaseDate=1628985600&h=7880b0b495ada896eb4c0331158b6189" alt="Download on the Mac App Store" style={imageStyle}/>
    </a>
  );
}

export default AppStoreButton;
