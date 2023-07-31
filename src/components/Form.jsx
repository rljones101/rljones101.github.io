import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [isSending, setIsSending] = useState(false);

  const BASE_URL =
    "https://7h7dom83hd.execute-api.us-east-2.amazonaws.com/staging";

  const [isShowingNotification, setIsShowingNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    if (!data.email && !data.subject && !data.name && !data.message) {
      setNotificationMessage({
        emoji: "💥",
        message: "You must fill out all the fields!",
      });
      setIsShowingNotification(true);
      return;
    }
    const message = {
      to: "rickljones36@gmail.com",
      from: "rickljones36@gmail.com",
      subject: data.subject,
      html: `
      <p><strong>From:</strong> ${data.email}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p>${data.message}</p>`,
    };
    try {
      setIsSending(true);
      await fetch(`${BASE_URL}/send-mail`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(message),
      });
      setNotificationMessage({ emoji: "📧", message: "Your email was sent!" });
      setIsShowingNotification(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  function handleCloseNotificaiton() {
    setIsShowingNotification(false);
    setNotificationMessage({});
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col relative  p-8 border border-blue-200 m-8  shadow-lg  bg-blue-50 ${
        isSending ? "opacity-75" : ""
      }`}>
      {isShowingNotification && (
        <div className="absolute top-10 flex justify-center items-center w-full">
          <div className="bg-white py-4 px-4 flex justify-between items-center gap-4 text-lg shadow-lg shadow-blue-100 rounded-lg border-l-4 border-blue-500">
            <span>{notificationMessage.emoji}</span>
            <p>{notificationMessage.message}</p>
            <button
              className="rounded-full bg-blue-500 hover:bg-blue-400 w-6 h-6 text-white flex items-center justify-center"
              onClick={() => handleCloseNotificaiton()}>
              &times;
            </button>
          </div>
        </div>
      )}
      <label className="uppercase font-bold mb-2">Email</label>
      <input
        type="text"
        placeholder="Your email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="bg-blue-50 shadow-inner border border-blue-200 py-2 px-4 border-l-4 border-l-blue-500 mb-8"
      />
      {errors.email && (
        <p className="text-red-500 -mt-6">A valid email is required.</p>
      )}
      <label className="uppercase font-bold mb-2">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        {...register("name", { required: true })}
        className="bg-blue-50 shadow-inner border border-blue-200 py-2 px-4 border-l-4 border-l-blue-500 mb-8"
      />
      {errors.name && <p className="text-red-500 -mt-6">A name is required.</p>}
      <label className="uppercase font-bold mb-2">Subject</label>
      <input
        type="text"
        name="subject"
        placeholder="Add a subject..."
        {...register("subject", { required: true })}
        className="bg-blue-50 shadow-inner border border-blue-200 py-2 px-4 border-l-4 border-l-blue-500 mb-8"
      />
      {errors.subject && (
        <p className="text-red-500 -mt-6">A subject is required.</p>
      )}
      <label className="uppercase font-bold mb-2">Message</label>
      <textarea
        rows={5}
        placeholder="Add a message..."
        {...register("message", { required: true })}
        className="bg-blue-50 shadow-inner border border-blue-200 py-2 px-4 border-l-4 border-l-blue-500 mb-8"
      />
      {errors.message && (
        <p className="text-red-500 -mt-8">A message is required.</p>
      )}
      <button
        type="submit"
        disabled={isSending}
        className="font-bold bg-gradient-to-b from-blue-500 to-blue-700 hover:bg-blue-600 hover:scale-105 shadow-none hover:shadow-lg hover:shadow-gray-600 transition-all text-white py-2 px-4 uppercase rounded-lg button-code max-w-fit self-end">
        Send Message
      </button>
    </form>
  );
};

export default Form;
