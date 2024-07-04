/**
 * v0 by Vercel.
 * @see https://v0.dev/t/53a5bSnJn3I
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatPage() {
  return (
    <div className="flex h-[100dvh] bg-background text-foreground">
      <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8 gap-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <div className="font-semibold">John Doe</div>
              <div className="text-sm text-muted-foreground">
                john@example.com
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <SettingsIcon className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <BellIcon className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </header>
        <div className="flex-1 grid grid-cols-[1fr_300px] gap-6">
          <div className="flex flex-col bg-muted rounded-lg p-4 md:p-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Chat with AI</h1>
              <p className="text-muted-foreground">
                Engage in a conversation with our AI assistant.
              </p>
            </div>
            <div className="flex-1 mt-4 bg-background rounded-lg p-4 md:p-6 overflow-y-auto" />
            <div className="mt-4">
              <Input
                placeholder="Type your message..."
                className="bg-muted text-foreground w-full"
              />
            </div>
          </div>
          <div className="flex flex-col bg-muted rounded-lg p-4 md:p-6 gap-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Chat History</h2>
              <p className="text-muted-foreground">
                View your previous conversations with the AI.
              </p>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="flex items-center gap-4 p-2 rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 grid gap-0.5">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">
                    Hello, how can I help you today?
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">10:30 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
