// import { Image } from "react-datocms";
import Image from 'next/image'
import avatar from '../../assets/avatar.png'
// types
import { ResponsiveImage } from "models/datoCMS";

type Props = {
  imageData: ResponsiveImage;
};

const BlogPostHeaderImage = ({ imageData }: Props) => {
  return (
    <div className="relative max-w-4xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-8">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        layout="responsive"
        objectFit="cover"
        className="w-full h-full object-cover rounded-xl"
        // data={imageData}
        src={imageData}
      />
    </div>
  );
};

export default BlogPostHeaderImage;
