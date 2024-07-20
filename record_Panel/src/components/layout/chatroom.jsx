import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";


export default function Component() {

    return (

                <div className="flex flex-1 flex-col">
                    <div className="flex h-14 items-center justify-between border-b bg-card px-4 sm:px-6 dark:bg-card-dark">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <h3 className="text-lg font-medium">John Doe</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <PhoneIcon className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <VideoIcon className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <MoveHorizontalIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-auto p-4">
                        <div className="grid gap-4">
                            <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>AC</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-2 rounded-md bg-card/50 p-3 dark:bg-card-dark/50">
                                    <p>Hey, how's it going?</p>
                                    <div className="text-xs text-muted-foreground">
                                        <time dateTime="2023-07-04T12:34:56">12:34 PM</time>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 justify-end">
                                <div className="grid gap-2 rounded-md bg-primary p-3 text-primary-foreground">
                                    <p>Pretty good, thanks for asking!</p>
                                    <div className="text-xs text-primary-foreground/80">
                                        <time dateTime="2023-07-04T12:35:12">12:35 PM</time>
                                    </div>
                                </div>
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>AC</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>AC</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-2 rounded-md bg-card/50 p-3 dark:bg-card-dark/50">
                                    <p>
                                        That's great to hear! Did you have any plans for the
                                        weekend?
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <time dateTime="2023-07-04T12:36:02">12:36 PM</time>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 justify-end">
                                <div className="grid gap-2 rounded-md bg-primary p-3 text-primary-foreground">
                                    <p>
                                        I was thinking of going to the beach, maybe catch a movie
                                        later.
                                    </p>
                                    <div className="text-xs text-primary-foreground/80">
                                        <time dateTime="2023-07-04T12:36:45">12:36 PM</time>
                                    </div>
                                </div>
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>AC</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>AC</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-2 rounded-md bg-card/50 p-3 dark:bg-card-dark/50">
                                    <p>
                                        Sounds like a great plan! Let me know if you want to join.
                                    </p>
                                    <div className="text-xs text-muted-foreground">
                                        <time dateTime="2023-07-04T12:37:12">12:37 PM</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky bottom-0 z-10 border-t bg-card px-4 py-3 dark:bg-card-dark">
                        <div className="relative">
                            <Textarea
                                placeholder="Type your message..."
                                className="min-h-[48px] w-full resize-none rounded-xl border border-input bg-transparent p-3 pr-16 text-foreground shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="absolute right-3 top-3"
                            >
                                <SendIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
    );
}

function MoveHorizontalIcon(props) {
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
            <polyline points="18 8 22 12 18 16" />
            <polyline points="6 8 2 12 6 16" />
            <line x1="2" x2="22" y1="12" y2="12" />
        </svg>
    );
}

function PhoneIcon(props) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function PlusIcon(props) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}

function SendIcon(props) {
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
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}

function SunIcon(props) {
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
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    );
}

function VideoIcon(props) {
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
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    );
}
