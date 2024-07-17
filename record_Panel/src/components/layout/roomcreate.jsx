import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    Dialog,
    DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createUserSettings } from "@/services/chat";

export default function RoomCreate() {
    const [formData, setFormData] = useState({
        role: "",
        tone: "",
        goal: "",
        length: "",
        topics: "",
        mbti: "",
        pers: "",
        humor: "",
        engagement_level: "",
        synonym_usage: "",
        emotion_detection: false,
        learning_feedback: false,
        notification_frequency: "",
        language_dialect: "",
        mood_adaptability: "",
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createUserSettings(formData);
            console.log(response); // 성공 시 서버 응답 데이터 출력
            // 필요 시 추가적인 성공 처리 로직 추가
        } catch (error) {
            console.error(error); // 에러 처리 로직
        }
    };

    return (
        <Dialog>
        <DialogTrigger asChild className="col-span-3">
        <Button variant="outline">AI 설정</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1035px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>채팅방 생성</DialogTitle>
                <DialogDescription>
                    당신의 취향에 맞게 설정해주세요.
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="role" className="text-right">
                            규칙
                        </Label>
                        <Input
                            id="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="호칭을 입력하세요 (예: 친구, 선생님)"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="tone" className="text-right">
                            응답 방식
                        </Label>
                        <Input
                            id="tone"
                            value={formData.tone}
                            onChange={handleChange}
                            placeholder="응답 방식을 입력하세요 (예: 격식 있는, 캐주얼한)"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="goal" className="text-right">
                            목표
                        </Label>
                        <Textarea
                            id="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            placeholder="목표를 입력하세요"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="length" className="text-right">
                            응답 시간
                        </Label>
                        <Input
                            id="length"
                            value={formData.length}
                            onChange={handleChange}
                            placeholder="응답 시간을 입력하세요 (예: 즉시, 몇 초 후)"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="topics" className="text-right">
                            취미
                        </Label>
                        <Input
                            id="topics"
                            value={formData.topics}
                            onChange={handleChange}
                            placeholder="취미를 입력하세요 (예: 영화, 음악)"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="mbti" className="text-right">
                            MBTI
                        </Label>
                        <Input
                            id="mbti"
                            value={formData.mbti}
                            onChange={handleChange}
                            placeholder="MBTI를 입력하세요"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="pers" className="text-right">
                            성격
                        </Label>
                        <Textarea
                            id="pers"
                            value={formData.pers}
                            onChange={handleChange}
                            placeholder="성격을 입력하세요"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="humor" className="text-right">
                            유머 감각
                        </Label>
                        <Input
                            id="humor"
                            value={formData.humor}
                            onChange={handleChange}
                            placeholder="유머 감각을 입력하세요 (예: 유머 없음, 적당한 유머)"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="engagement_level" className="text-right">
                            적극성
                        </Label>
                        <Input
                            id="engagement_level"
                            value={formData.engagement_level}
                            onChange={handleChange}
                            placeholder="적극성을 입력하세요 (예: 수동적, 중간)"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="synonym_usage" className="text-right">
                            동의어 사용 빈도
                        </Label>
                        <Input
                            id="synonym_usage"
                            value={formData.synonym_usage}
                            onChange={handleChange}
                            placeholder="동의어 사용 빈도를 입력하세요 (예: 거의 사용 안 함, 자주 사용)"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="emotion_detection" className="text-right">
                            감정 인식
                        </Label>
                        <Input
                            type="checkbox"
                            id="emotion_detection"
                            checked={formData.emotion_detection}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="learning_feedback" className="text-right">
                            학습/피드백
                        </Label>
                        <Input
                            type="checkbox"
                            id="learning_feedback"
                            checked={formData.learning_feedback}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="notification_frequency" className="text-right">
                            알림 빈도
                        </Label>
                        <Input
                            id="notification_frequency"
                            value={formData.notification_frequency}
                            onChange={handleChange}
                            placeholder="알림 빈도를 입력하세요 (예: 매일, 매주)"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="language_dialect" className="text-right">
                            언어 및 방언
                        </Label>
                        <Input
                            id="language_dialect"
                            value={formData.language_dialect}
                            onChange={handleChange}
                            placeholder="언어 및 방언을 입력하세요 (예: 표준어, 특정 방언)"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="mood_adaptability" className="text-right">
                            기분 변화 대응
                        </Label>
                        <Input
                            id="mood_adaptability"
                            value={formData.mood_adaptability}
                            onChange={handleChange}
                            placeholder="기분 변화 대응을 입력하세요 (예: 높은 적응성, 중간 적응성)"
                            className="col-span-3"
                        />
                    </div>
                </div>
                
                <DialogFooter>
                    <Button type="submit">채팅방 생성</Button>
                </DialogFooter>
            </form>
        </DialogContent>
        </Dialog>

    );
}
