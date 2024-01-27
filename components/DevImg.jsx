import Image from "next/image";

const DevImg = ({containerStyles, imgSrc}) => {
    return (
        <div className={`${containerStyles}`}>
            <Image
                src={imgSrc}
                priority
                alt="dev-img"
                fill={true}
                layout={"fill"}
                objectFit={"cover"}
            />
        </div>
    );
};

export default DevImg;
