import React from "react";


const Contact = () => {

  //   e.preventDefault();


  //   const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  //   const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  //   const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;



  //   emailjs
  //     .sendForm(
  //       SERVICE_ID,
  //       TEMPLATE_ID,
  //       form.current,
  //       PUBLIC_KEY

  //     )
  //     .then(
  //       () => {
  //         alert("Message sent successfully!");
  //       },
  //       () => {
  //         alert("Failed to send message. Please try again.");
  //       }


  //     );

  //   e.target.reset(); // Clear form after submission
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    e.target.submit(); // submit the form after showing alert
  };
  return (
    <section id="contact" className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/gouravchouhan6103@gmail.com"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_next" value="http://localhost:5173/" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New message from portfolio contact form" />
        <input type="text" name="_honey" style={{ display: "none" }} />

        <input type="text" name="from_name" placeholder="Your Name" className="w-full p-2 border rounded" required />
        <input type="email" name="from_email" placeholder="Your Email" className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Your Message" rows="5" className="w-full p-2 border rounded" required></textarea>
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Contact Me</button>
      </form>

    </section>
  );
};

export default Contact;
