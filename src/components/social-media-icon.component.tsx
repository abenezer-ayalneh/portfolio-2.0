export const SocialMediaIcon = ({ icon }:{icon: string}) => {
  return (
    <div className="h-[3.125rem] w-[3.125rem] bg-white rounded-full flex justify-center items-center">
      <img src={icon} alt="phone number" />
    </div>
  );
};
