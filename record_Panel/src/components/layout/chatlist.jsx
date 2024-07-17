import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Chatcreate from "./chatcreate";


function ChatList() {
    return (
        <div className="flex h-full flex-col">
            <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-card/50 px-4 dark:bg-card-dark/50">
                <h3 className="text-lg font-medium">채팅 목록</h3>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <PlusIcon className="h-5 w-5" />
                        </Button>
                    </DialogTrigger>
                    <Chatcreate />
                </Dialog>
            </div>
            <div className="flex-1 overflow-auto">
                <div className="grid gap-2 p-4">
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-md bg-card/50 px-3 py-2 transition-colors hover:bg-card/75 dark:bg-card-dark/50 dark:hover:bg-card-dark/75"
                    >
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>AC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                            <h4 className="font-medium truncate">John Doe</h4>
                            <p className="text-sm text-muted-foreground truncate">
                                Hey, how's it going?
                            </p>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                            3
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ChatList;

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
