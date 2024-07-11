import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, isAuthenticated } from "@/services/member";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/chat");
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/chat");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="dark bg-background text-foreground min-h-[100dvh] flex items-center justify-center">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="text-muted-foreground">관리자 페이지</p>
        </div>
        <div className="space-y-4">
          {error && <div className="text-red-500">{error}</div>}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-muted text-foreground"
              required
            />
          </div>
          <Button onClick={handleLogin} className="w-full">
            로그인
          </Button>
        </div>
        <div className="text-center text-sm">
          관리자 신청
          <p className="text-muted-foreground">chiomin0128@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
