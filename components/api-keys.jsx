"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ApiKeys() {
  const [transactionId, setTransactionId] = useState("")
  const [result, setResult] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (transactionId.length !== 10 || !/^[a-zA-Z0-9]+$/.test(transactionId)) {
        setResult({
          success: false,
          message: "Invalid transaction ID format. Please enter a 10-character alphanumeric value.",
        })
        return
      }
      const response = await new Promise((resolve) =>
        setTimeout(() =>
          resolve({
            success: true,
            data: {
              transactionId,
              amount: "$50.00",
              status: "Completed",
              date: "2023-05-01",
            },
          }), 2000))
      setResult(response)
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred while processing the request. Please try again later.",
      })
    }
  }
  return (
    (<Card className="w-full max-w-md mx-auto mt-28 mb-48">
      <div className="text-center text-2xl font-bold mt-6">Beta feature</div> 
      <CardHeader>
        <CardTitle>API Generation</CardTitle>
        <CardDescription>Enter Your Secret hash to generate your API Key.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="transactionId" className="font-bold">Secret Hash</Label>
            <Input
              id="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter Your Hash ID"
              required />
          </div>
          <Button type="submit" className="w-full">
            Generate API
          </Button>
        </form>
        {result && (
          <div className="mt-6">
            {result.success ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Hash:</span>
                  <span>{result.data.hash}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Amount:</span>
                  <span>{result.data.amount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Status:</span>
                  <span>{result.data.status}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{result.data.date}</span>
                </div>
              </div>
            ) : (
              <div className="text-red-500">{result.message}</div>
            )}
          </div>
        )}
      </CardContent>
    </Card>)
  );
}
