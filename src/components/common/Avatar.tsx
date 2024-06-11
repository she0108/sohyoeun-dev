import Image from "next/image";
import profileImage from "../../assets/images/profile.jpeg";

interface AvatarProps {
  size: number;
}

function Avatar({ size }: AvatarProps) {
  return (
    <Image
      src={profileImage}
      alt="profile image"
      width={size}
      height={size}
      className="rounded-full"
    />
  );
}

export default Avatar;
