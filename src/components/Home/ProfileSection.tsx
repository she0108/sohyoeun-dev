import Image from "next/image";
import profileImage from "../../assets/images/profile.jpeg";

function ProfileSection() {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={profileImage}
        alt="profile image"
        className="w-full rounded-full"
      />
      <h1 className="text-3xl font-bold">sohyoeun</h1>
      <p className="text-base font-normal">빠르게 배우는 개발자</p>
    </div>
  );
}

export default ProfileSection;
