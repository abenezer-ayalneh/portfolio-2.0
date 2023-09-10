import { FormEvent, useRef, useState } from 'react';

export const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleFormSubmit = async (event: FormEvent | undefined) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
      setIsSubmitting(true);

      try {
        const response = await fetch(
          'https://formsubmit.co/ajax/7f836068829d2e4bd8487383f30acdae',
          {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
            body: JSON.stringify({
              firstName: firstNameRef.current?.value,
              lastName: lastNameRef.current?.value,
              email: emailRef.current?.value,
              message: messageRef.current?.value,
              _honey: null,
              _captcha: false,
            }),
          },
        );

        if (response.ok) {
          formRef.current?.reset()
          setFormSubmitted(true)
          setTimeout(() => {
            setFormSubmitted(false)
          }, 10000);
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsSubmitting(false)
      }
      
    }
  };
  return (
    <form
      className="py-[1.25rem] px-[0.94rem] lg:p-[1.88rem] mb-[1.25rem] text-[#D9D9D9]"
      style={{
        borderRadius: '0.125rem',
        background:
          'linear-gradient(134deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 0%, rgba(16, 36, 41, 0.30) 100%)',
        backdropFilter: 'blur(29px)',
      }}
      ref={formRef}
      onSubmit={handleFormSubmit}
    >
      {/* Honeypot */}
      <input type='text' name='_honey' className='hidden' />
      {/* Disable Captcha */}
      <input type='hidden' name='_captcha' value={"false"}/>
      
      <p className="text-[1.375rem] lg:text-[1.75rem] text-[#D9D9D9] font-bold leading-[125%]">
        Contact Me!
      </p>
      <div className="flex flex-col justify-start w-full pt-10">
        <p className="text-[0.875rem] lg:text-[1.3rem] leading-none">
          First Name
        </p>
        <input
          required
          ref={firstNameRef}
          type="text"
          placeholder="John"
          className="w-full my-2 px-2 py-2 border-[0.5px] border-[#444] bg-black/20 focus:outline-none focus:border-[#888] rounded-md"
        />
      </div>
      <div className="flex flex-col justify-start w-full pt-2">
        <p className="text-[0.875rem] lg:text-[1.3rem] leading-none">
          Last Name
        </p>
        <input
          required
          ref={lastNameRef}
          type="text"
          placeholder="Doe"
          className="w-full my-2 px-2 py-2 border-[0.5px] border-[#444] bg-black/20 focus:outline-none focus:border-[#888] rounded-md"
        />
      </div>
      <div className="flex flex-col justify-start w-full pt-2">
        <p className="text-[0.875rem] lg:text-[1.3rem] leading-none">Email</p>
        <input
          required
          ref={emailRef}
          type="email"
          placeholder="email@example.com"
          className="w-full my-2 px-2 py-2 border-[0.5px] border-[#444] bg-black/20 focus:outline-none focus:border-[#888] rounded-md"
        />
      </div>
      <div className="flex flex-col justify-start w-full pt-2">
        <p className="text-[0.875rem] lg:text-[1.3rem] leading-none">Message</p>
        <textarea
          ref={messageRef}
          placeholder="Hey there,&#10;I wanted to contact you to ..."
          rows={8}
          className="w-full my-2 px-2 py-2 border-[0.5px] border-[#444] bg-black/20 focus:outline-none focus:border-[#888] rounded-md resize-none"
        />
      </div>
      <div className="flex justify-start items-center w-full pt-2 gap-4">
        <button
          className="px-10 py-3 bg-[#7ED95730] hover:bg-[#7ED95750] text-white rounded-md w-full lg:w-auto"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {formSubmitted && <p className='text-[0.875rem] lg:text-[1.3rem] leading-none text-[#7ED95780]'>Message sent successfully!</p>}
      </div>
    </form>
  );
};
