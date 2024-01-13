import { MdAttachMoney } from "react-icons/md";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { PiPaintBucketFill } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { SiMarketo } from "react-icons/si";














let CardData= [
    
        {
"icon":<MdAttachMoney size={80}/>,
"Title":"Value for Money",
"desc":"Unrivaled value for money—innovative solutions, transparent pricing, and top-notch quality ensuring your investment translates into exceptional results."
    },
        {
"icon":<RiLightbulbFlashFill size={80} />,
"Title":"Creative Versatility",
"desc":"Proficiency in a wide range of creative services, including web development, graphic design, video editing, and artistic expressions."
    },
        {
"icon":<TbTruckDelivery size={80} />,
"Title":" Time-Efficient Delivery ",
"desc":"Adherence to timelines without compromising quality, ensuring timely delivery of projects."
    }
]

const Services=[
    {
        "icon":<MdWeb size={60}/>
        ,
        "title":"Web Development",
        "desc":"Elevate your online presence with Evo Design Labs' dynamic and responsive web development solutions, tailored to your unique brand."

    },
    {
        "icon":<PiPaintBucketFill size={60} />
        ,
        "title":"Graphic Design",
        "desc":"Captivate your audience with visually stunning graphics, meticulously crafted by Evo Design Labs to reflect and enhance your brand identity."

    },
    {
        "icon":<BiSolidVideos size={60} />
        ,
        "title":"Video Editing",
        "desc":"Transform raw footage into compelling visual stories. Evo Design Labs adds cinematic flair, ensuring your videos leave a lasting impression."

    },
    {
        "icon":<MdDesignServices size={60} />
        ,
        "title":"Logo Design",
        "desc":"Make a memorable first impression with Evo Design Labs' logo creation service. Craft a unique visual identity that resonates with your brand"

    },
    {
        "icon":<RiPagesFill size={60} />
        ,
        "title":"UI/UX Design",
        "desc":"Ensure a seamless and delightful user experience with Evo Design Labs' UI/UX design expertise, blending functionality with aesthetic appeal."

    },
    {
        "icon":<SiMarketo size={60} />
        ,
        "title":"Digital Marketing",
        "desc":"Amplify your online presence and reach your target audience effectively with Evo Design Labs' strategic and results-driven digital marketing solutions."

    }
]


let JsonData={CardData,Services}

export default  (
    JsonData
)