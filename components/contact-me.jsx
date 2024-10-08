import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactMe() {
  return (
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto p-4 md:p-8 mt-16 mb-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="text-muted-foreground">
            Fill out the form below and I will get back to you as soon as possible.
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" rows={5} />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
      <div className="h-[400px] md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8351288872545!2d-122.41697568471634!3d37.77493537975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4b5b%3A0xb10ed6d9b5050fa5!2sVercel%20HQ!5e0!3m2!1sen!2sus!4v1681927012613!5m2!1sen!2sus"
          className="w-full h-full rounded-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
