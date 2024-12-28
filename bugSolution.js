```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation that might throw an error
    const checkFileSystem = async () => {
      try {
        // Replace with your actual file system check (e.g., accessing a file)
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay
        // throw new Error('Simulated file system error'); // Uncomment to test
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    checkFileSystem();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error:</h1>
        <pre>{error.message}</pre>
      </div>
    );
  }

  return (
    <div>Hello Next.js!</div>
  );
}
```