import { useState, useEffect } from 'react';


function App() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function healthCall() {
      try {
        const response = await fetch("/api/health");
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        const data = await response.json();
        setStatus(data.status);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")

      }

    }
    healthCall()
  }, [])

  if (error) {
    return <p>Couldn't load: {error}</p>
  }

  if (status === null) {
    return <p>Loading…</p>
  }

  return <p>Status {status}</p>
}

export default App
