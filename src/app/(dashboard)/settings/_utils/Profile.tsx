import ProfileImage from "./_profile/ProfileImage";
import ProfileInfo from "./_profile/ProfileInfo";

export default function Profile(){
    return (
        <div className="flex flex-col gap-12 max-w-[432px]">
          <ProfileImage />
          <ProfileInfo />
        </div>
    )
}