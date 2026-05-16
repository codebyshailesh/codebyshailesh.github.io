import { useEffect, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [sending, setSending] = useState(false);

  async function sendEmail(e) {
    e.preventDefault();

    if (!name || !email || !message || !subject) {
      toast.error("All fields are required");
      return;
    }
    setSending(true);

    setIsDisable(true);

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.log("FAILED...", error);
      alert("Failed to send message");
    } finally {
      setIsDisable(false);
      setSending(false);
    }
  }

  useEffect(() => {
    if (name.trim() && email.trim() && message.trim()) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [name, email, message]);

  return (
    <div className="max-w-4xl my-8 mx-auto grid grid-cols-2 rounded-2xl border-2 border-primary overflow-hidden">
      {/* Left Side */}
      <div className="grid place-content-center bg-primary px-8 transition-colors duration-500 animate-slide-in-left [animation-delay:500ms]">
        <h1 className="text-5xl font-bold mt-3 mb-4 text-background dark:text-background">
          Let's
          <span className="text-foreground dark:text-foreground">Connect</span>
        </h1>
        <p className="text-foreground dark:text-muted mb-10 leading-relaxed">
          I'm currently open to new opportunities. Whether you have a project in
          mind or just want to say hi — my inbox is always open!
        </p>
      </div>

      {/* Right Side */}
      <div className="p-5 animate-slide-in-right [animation-delay:500ms]">
        <form className="space-y-5 text-left" onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-md bg-card dark:bg-card border border-border dark:border-border text-foreground dark:text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-card dark:bg-card border border-border dark:border-border text-foreground dark:text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 rounded-md bg-card dark:bg-card border border-border dark:border-border text-foreground dark:text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
          </div>
          <div>
            <textarea
              rows={4}
              placeholder="message ...."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-md bg-card dark:bg-card border border-border dark:border-border text-foreground dark:text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isDisable}
            className="w-full bg-primary dark:bg-primary text-primary-foreground dark:text-primary-foreground py-3.5 rounded-md font-medium hover:opacity-90 active:scale-95 transition-all duration-200 disabled:opacity-90"
          >
            {sending ? (
              <Loader2 className="animate-spin h-6 w-6 mx-auto" />
            ) : (
              "Send Message "
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
