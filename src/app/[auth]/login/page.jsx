import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center dark:bg-mm-dark">
     <Card className="w-full max-w-sm dark:bg-mm-black">
      <CardHeader className="flex items-center">
        <Image src="/logo.png" width={100} height={100} alt="mmfg-logo" />
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your Credentials to Login.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Sign in</Button>
        </CardFooter>
     </Card>
    </div>
  )
}

export default LoginPage
