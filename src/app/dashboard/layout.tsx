export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{height: '100px', background: 'green'}}>
        {children}
    </div>
  );
}
