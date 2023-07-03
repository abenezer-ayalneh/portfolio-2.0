export const SocialMediaIcon = ({ icon }: { icon: string }) => {
  return (
    <div className='h-[2.4rem] w-[2.4rem] bg-white rounded-full flex justify-center items-center p-[0.5rem]'>
      <img src={icon} alt='phone number' />
    </div>
  );
};
