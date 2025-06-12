import Link from "next/link";

export default function Home() {
  return (
    <>
      <main style={{ padding: '20px', 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '75vh' // Ensure the container takes at least the full height of the viewport 
       }}>
        Hi! Welcome to my blog. Here are some posts:
        <ol>
          <li>
            <Link href="/posts/1">Post 1</Link>
          </li>
          <li>
            <Link href="/posts/2">Post 2</Link>
          </li>
          <li>
            <Link href="/posts/3">Post 3</Link>
          </li>
                    <li>
            <Link href="/posts/4">Post 4</Link>
          </li>
         </ol>
      </main>
    </>
  );
}

// export default function Home() {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       minHeight: '100vh' // Ensure the container takes at least the full height of the viewport
//     }}>
//       <main style={{ flex: 1 }}>
//         Hi!
//       </main>
//       <footer style={{
//         marginTop: 'auto' // Push the footer to the bottom
//       }}>
//         Copyright &copy; {new Date().getFullYear()} Your Name
//       </footer>
//     </div>
//   );
// }
