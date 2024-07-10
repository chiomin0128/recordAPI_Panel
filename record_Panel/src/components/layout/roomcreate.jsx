import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function RoomCreate() {
    return (
        <DialogContent className="sm:max-w-[1035px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle>채팅방 생성</DialogTitle>
                <DialogDescription>
                    당신의 취향에 맞게 설정해주세요.
                </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="role" className="text-right">
                        규칙
                    </Label>
                    <Input
                        id="role"
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
                        placeholder="동의어 사용 빈도를 입력하세요 (예: 거의 사용 안 함, 자주 사용)"
                        className="col-span-3"
                    />
                </div>
                <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="emotion_detection" className="text-right">
                        감정 인식
                    </Label>
                    <Input
                        id="emotion_detection"
                        placeholder="감정 인식을 사용 여부를 입력하세요 (예: 사용, 사용 안 함)"
                        className="col-span-3"
                    />
                </div>
                <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="learning_feedback" className="text-right">
                        학습/피드백
                    </Label>
                    <Input
                        id="learning_feedback"
                        placeholder="학습/피드백 사용 여부를 입력하세요 (예: 사용, 사용 안 함)"
                        className="col-span-3"
                    />
                </div>
                <div className="grid items-center grid-cols-4 gap-4">
                    <Label htmlFor="notification_frequency" className="text-right">
                        알림 빈도
                    </Label>
                    <Input
                        id="notification_frequency"
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
                        placeholder="기분 변화 대응을 입력하세요 (예: 높은 적응성, 중간 적응성)"
                        className="col-span-3"
                    />
                </div>
            </div>
            
            <DialogFooter>
                <Button type="submit">채팅방 생성</Button>
            </DialogFooter>
        </DialogContent>
    );
}
