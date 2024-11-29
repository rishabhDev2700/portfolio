import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
    return (
        <main className='min-h-[70vh]'>
            <Card className='lg:w-1/3 mx-auto lg:mx-auto mt-12 m-2 p-8 shadow-md shadow-neutral-300 dark:shadow-black dark:bg-neutral-950' >
                <CardTitle className="text-xl mb-4 text-purple-600">Get in Touch</CardTitle>
                <form action="https://formcarry.com/s/RLZEr4ON5CG" method='post' encType="multipart/form-data">
                    <Label className="my-2" >Email</Label>
                    <Input className="my-2" type="email" placeholder="@example.com" name="Email" required />
                    <Label className="my-2">Name</Label>
                    <Input className="my-2" type="text" placeholder="Full name" name="Name" required />
                    <Label>Service</Label>
                    <Select name='service' required>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Services</SelectLabel>
                                <SelectItem value="Web development">Web development</SelectItem>
                                <SelectItem value="Mobile development">Mobile development</SelectItem>
                                <SelectItem value="Learn Programming">Learn Programming</SelectItem>

                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Label className="my-2">Message</Label>
                    <Textarea className="my-2" id="message" placeholder="Your Query" rows="10" name="Message" required></Textarea>
                    <Button className="my-2">Send</Button>
                </form>
            </Card>
        </main>
    )
}
