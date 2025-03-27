import { useRef, useState } from "react";

const RenderProb = () => {
  console.log("Component Rendered");

  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const name = useRef<HTMLInputElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div>
      <h2 className="font-mono text-xl font-medium italic">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            // value={formData.name}
            // onChange={(e) => handleChange(e)}
            ref={name}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={(e) => handleChange(e)}
            ref={email}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            // value={formData.password}
            // onChange={(e) => handleChange(e)}
            ref={password}
            required
          />
        </div>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {isSubmitted && (
        <div>
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {name.current?.value}
            {name.current?.type}
          </p>
          <p>
            <strong>Email:</strong> {email.current?.value}
          </p>
          <p>
            <strong>Password:</strong> {password.current?.value}
          </p>
        </div>
      )}
    </div>
  );
};

export default RenderProb;
