
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
  } from "react-share";

  import React from 'react';
  
  function SharedButtons(props) {
      return (
          <>
              <FacebookShareButton url={"https://www.kredi.com.tr/yapi-kredi/play"}   children={<div>fdsfd</div>} >
                  <span>gfdsg</span>
              </FacebookShareButton>
          </>
      );
  }
  
  export default SharedButtons;