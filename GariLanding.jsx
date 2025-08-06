import { useState } from "react";

export default function GariLanding() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email enviado:", email);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        GARI: Encontrá y compartí lugares para estacionar
      </h1>
      <p style={{ marginBottom: "1rem" }}>
        La app que conecta a conductores con personas que tienen cocheras o espacios libres en Castelar y zona oeste.
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Unirme</button>
      </form>
    </div>
  );
}
