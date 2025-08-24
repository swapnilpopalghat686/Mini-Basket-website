// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("userName", name);
//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userPass", password);
//     navigate("/login");
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: 500 }}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button className="btn btn-primary" type="submit">Create Account</button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // update form data
    setFormData({ ...formData, [name]: value });

    // password validation regex
    if (name === "password") {
      const pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setIsPasswordValid(pattern.test(value));

      // check confirm password as well
      setIsPasswordMatched(value === formData.confirmPassword);
    }

    if (name === "confirmPassword") {
      setIsPasswordMatched(value === formData.password);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup Successful (dummy)!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formData.password.length > 0 && (
              <>
                {isPasswordValid ? (
                  <small className="text-success">✅ Strong Password</small>
                ) : (
                  <small className="text-danger">
                    ❌ Must contain uppercase, lowercase, number, special char,
                    min 8 chars
                  </small>
                )}
              </>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {formData.confirmPassword.length > 0 && (
              <>
                {isPasswordMatched ? (
                  <small className="text-success">✅ Password Matched</small>
                ) : (
                  <small className="text-danger">❌ Passwords do not match</small>
                )}
              </>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!isPasswordValid || !isPasswordMatched}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;