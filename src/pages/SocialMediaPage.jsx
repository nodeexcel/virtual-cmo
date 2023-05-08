import React, { useState } from "react";
import SocialMail from "../components/socialmedia/Mailed";
import SocialContent from "../components/socialmedia/SocialContent";
import SocialMediaPost from "../components/socialmedia/SocialMediaPost";
import SocialPlatform from "../components/socialmedia/SocialPlatforms";
import SocialTheme from "../components/socialmedia/SocialTheme";

function SocialMediaPage() {
  const [socialmedia, setSocialMedia] = useState(1);
  
  switch (socialmedia) {
    case 1:
      return <SocialPlatform setSocialMedia={setSocialMedia} />;
    case 2:
      return <SocialTheme setSocialMedia={setSocialMedia} />;
    case 3:
    return <SocialContent setSocialMedia={setSocialMedia}/>;
    case 4:
      return <SocialMediaPost setSocialMedia={setSocialMedia} />;
    case 5:
    return <SocialMail setSocialMedia={setSocialMedia}/>
    
    default:
      return <SocialPlatform />;
  }
}

export default SocialMediaPage;
