import {base} from "$app/paths";

interface post {
    date: string;
    title: string;
    description: string;
    image: string;
    href: string;
    tags: string[];
}

const posts:post[] = [{
    date: "09.06.2024",
    title: "CompTIA learning!",
    description: "I am currently studying for the CompTIA A+ certification. I am learning about computer hardware, software, networking, security and troubleshooting.",
    image: "https://comptiacdn.azureedge.net/webcontent/images/default-source/mainsitetemplateimages/comptia_logo_cmyk36b98240e2b544eabe240e93e723777e.svg?sfvrsn=da0cc6d4_2",
    href: `${base}/blog/comptia-learning`,
    tags: ["CompTIA", "A+", "Certification"]
}];

export default posts;