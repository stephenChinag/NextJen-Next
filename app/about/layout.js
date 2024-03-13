export const metadata = {
  title: "Dante About App",
  description: "First About Page",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
