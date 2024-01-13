import Person from "@/components/constants/Person/Person"
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import { Separator } from "@/components/ui/separator";

function Contact() {
    const [, setName] = useState('');
    const [, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform submit logic here

        // Reset inputs
        setName('');
        setEmail('');
    };

    return (
        <section className="hero items-center text-center justify-center md:items-center bg-base-200 sm:p-4 md:p-8 lg:p-12">
            <div className=" flex flex-col-reverse lg:flex-row gap-4 justify-between mt-4">
                <div>
                    <Person />
                </div>
                <Separator className="w-2 dark:bg-slate-50" orientation="vertical" />

                <motion.div
                    initial={{ y: 400 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", duration: 1.8 }}
                    className='card card-bordered dark:border-slate-200 px-10 py-2 space-y-6'
                >
                        <Card className="w-full text-left h-full border-0">
                            <CardHeader>
                                <CardTitle> Get in touch</CardTitle>
                                <CardDescription>Fill out the form below to send me an email and I will get back to you as soon as possible!
                                    Get your website or web application developed by me.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">Name</Label>
                                            <Input className="rounded-full"   placeholder="Name" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="Email">Framework</Label>
                                        <Input className="rounded-full"  placeholder="Email" />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button className="" onClick={handleSubmit}>Now</Button>
                            </CardFooter>
                        </Card>
                </motion.div>
                </div>
        </section>
    );
}

export default Contact;