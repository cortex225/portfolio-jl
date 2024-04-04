import Image from "next/image";

const DevImg = ({containerStyles, imgSrc}) => {
    return (
        <div className={`${containerStyles}`}>
            <Image
                src={imgSrc}
                priority
                alt="dev-img"
                fill
                layout={"fill"}
                objectFit={"fit"}
            />
        </div>
    );
};

export default DevImg;
