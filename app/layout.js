import './globals.css';

export const metadata = {
  title: 'AngularJS Adventure Academy',
  description: 'Learn AngularJS from scratch with playful ES6-powered adventures and hands-on challenges.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
