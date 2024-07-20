import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import RoomCreate from "./roomcreate";
import APIUtils from "@/services/chat";

export default function ChatCreate() {
    const [settings, setSettings] = useState([]);
    const [selectedSetting, setSelectedSetting] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        if (isDialogOpen) {
            const fetchSettings = async () => {
                try {
                    const data = await APIUtils.userSettings(true);
                    setSettings(data);
                } catch (error) {
                    console.error('Error fetching settings:', error);
                }
            };

            fetchSettings();
        }
    }, [isDialogOpen]);

    const handleCreateSettings = async () => {
        try {
            const data = await APIUtils.ChatRoom(false, selectedSetting);
        } catch (error) {
            console.error('Error creating settings:', error);
        }
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button>채팅방 생성</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>채팅방 생성</DialogTitle>
                    <DialogDescription>
                        당신의 취향에 맞게 설정해주세요.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="settings" className="text-right">
                            설정 값
                        </Label>
                        <Select onValueChange={(value) => setSelectedSetting(value)}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="설정을 선택하세요" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>설정 목록</SelectLabel>
                                    {settings.map(setting => (
                                        <SelectItem key={setting.id} value={setting.id.toString()}>
                                            {setting.role}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right"></Label>
                        <RoomCreate />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleCreateSettings}>생성하기</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
