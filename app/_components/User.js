import Image from "next/image";
import { getUserInfo } from "../_lib/data-services";

export default async function User({ userId }) {
  const user = await getUserInfo(userId);

  const { personaname: userName, avatarfull: avatar, steamid: steamId } = user;
  return (
    <div className="w-[1080px] px-[96px] py-[48px]  ">
      <div className="bg-primary-600 flex gap-4 py-6 px-6 rounded-sm">
        <div className="relative h-[128px] w-[128px] rounded-full border-4 border-accent-500 overflow-hidden">
          <a href={avatar} alt="Photo of something" target="blank">
            <Image
              src={avatar}
              fill
              alt="Image"
              className="hover:blur-sm object-cover transition-all"
            />
          </a>
          <span className="absolute text-2xl font-bold text-primary-50 top-[50%] right-[50%] translate-x-[50%] translate-y-[50%] view-image-text">
            View
          </span>
        </div>
        <div className="flex flex-col gap-1 px-4 py-2 bg-primary-700 rounded-sm">
          <p className="text-2xl text-accent-500">{userName}</p>
          <p className="text-sm text-primary-100">{steamId}</p>
        </div>
      </div>
    </div>
  );
}
