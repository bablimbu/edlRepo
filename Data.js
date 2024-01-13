import { MdAttachMoney } from "react-icons/md";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";








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
        "icon":"icon-1",
        "title":"service1",
        "desc":"desc1"

    },
    {
        "icon":"icon-2",
        "title":"service2",
        "desc":"desc2"

    },
    {
        "icon":"icon-3",
        "title":"service3",
        "desc":"desc3"

    },
    {
        "icon":"icon-4",
        "title":"service4",
        "desc":"desc4"

    },
    {
        "icon":"icon-5",
        "title":"service5",
        "desc":"desc5"

    },
    {
        "icon":"icon-6",
        "title":"service6",
        "desc":"desc6"

    }
]


let JsonData={CardData,Services}

export default  (
    JsonData
)