"use client";

import { useState, useEffect } from "react";

export default function Account() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/getUser");
      const user = await result.json();
      setEmail(user.email);
      setUsername(user?.user_metadata.username);
      console.log(user);
    };

    fetchData();
  }, []);

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div className="accountInfoWrapper">
      <div className="info email">
        <h3>Addresse email</h3>
        <p>{email}</p>
      </div>
      <div className="info username">
        <h3>Nom d'utilisateur</h3>
        <p>{username}</p>
      </div>
    </div>
  );
}
