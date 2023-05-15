import { FaTwitter } from "react-icons/fa";
import BasicBtn from "../BasicBtn";

export default function ShareOnTwitter({ title, url }: { title: string, url: string }) {
    const handleClick = () => {
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
    };

    return (
        <BasicBtn
            title={'Share on twitter'}
            clickFunc={handleClick}
            value={false}
            style={`aspect-square bg-very-dark dark:bg-very-light`}>
            <FaTwitter className="group-hover:scale-125" />
        </BasicBtn>
    );
};
