/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lddpdNBW8De
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="dark bg-background text-foreground min-h-[100dvh] flex items-center justify-center">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="text-muted-foreground">관리자 페이지</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className="bg-muted text-foreground"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
            </div>
            <Input
              id="password"
              type="password"
              className="bg-muted text-foreground"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            로그인
          </Button>
        </div>
        <div className="text-center text-sm ">
          관리자 신청
          <p className="text-muted-foreground">chiomin0128@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
