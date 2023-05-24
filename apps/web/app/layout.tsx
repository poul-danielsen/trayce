
// Roboto font for MUI components
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Client rendered layout
import ClientLayout from './layoutComponents/ClientLayout';

// Clerk provider
import { ClerkProvider } from '@clerk/nextjs'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
            <ClientLayout>
              {children}
            </ClientLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
