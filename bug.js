```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello Next.js!</div>
  );
}
```

This simple Next.js 15 app might unexpectedly throw an error if there's a problem with the file system, such as insufficient permissions or a full disk.  The error might not be immediately obvious because it's not directly related to the code itself.