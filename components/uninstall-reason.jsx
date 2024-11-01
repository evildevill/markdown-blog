"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function UninstallReason() {
  const [reason, setReason] = useState("other");
  const [comments, setComments] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous message
    setError(false); // Clear previous error
    setLoading(true);

    const feedbackData = {
      reason,
      additionalFeedback: comments,
    };

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Feedback submitted successfully!");
        setReason("other");
        setComments("");
      } else {
        setError(true);
        setMessage(result.message || "An error occurred.");
      }
    } catch (err) {
      setError(true);
      setMessage("Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">We&apos;re sorry to see you go. 🙂💔</h1>
          <p className="mt-2 text-muted-foreground">Please let us know why you&apos;re uninstalling so we can improve.</p>
        </div>
        <Card>
          <CardContent className="grid gap-4">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2 mt-5">
                <Label htmlFor="reason">Reason for uninstalling</Label>
                <Select
                  id="reason"
                  value={reason}
                  onValueChange={setReason}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not-useful">Not useful for my needs</SelectItem>
                    <SelectItem value="bugs-issues">Bugs or issues</SelectItem>
                    <SelectItem value="too-complex">Too complex to use</SelectItem>
                    <SelectItem value="found-better-alternative">Found a better alternative</SelectItem>
                    <SelectItem value="privacy-concerns">Privacy Concerns</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 mt-5">
                <Label htmlFor="comments">Additional comments</Label>
                <Textarea
                  id="comments"
                  placeholder="Let us know how we can improve"
                  rows={4}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
              <CardFooter className="flex justify-end mt-5">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Feedback"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
        {message && (
          <div className={`mt-4 text-center ${error ? "text-red-500" : "text-green-500"}`}>
            {message}
          </div> 
        )}
      </div>
    </div>
  );
}
