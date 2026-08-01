import SectionHeading from '@/components/Helper/SectionHeading'
import { contactInfo, socialLinks } from '@/data'
import {Button} from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from 'react'

const Contact = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
        <SectionHeading 
        title_1="Get In" 
        title_2="Touch"
        description="Have a question or want to work together?"   
         />
         <div className="w-[80%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div>
                    <div className="space-y-8 ">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Lets Connect</h3>
                            <p className="text-muted-foreground">
                                I&apos;m always open to discussing new opportunities or potential collaborations.
                            </p>
                        </div>
                        <div className="space-y-4">{contactInfo.map((item)=>{
                            return <a href={item.href} key={item.label} target="_blank" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition all duration 300 group">
                                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                                <item.icon className="w-5 h-5 text-green-500 dark:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{item.label}</p>
                                    <p className="font-medium">{item.value}</p>
                                </div>
                            </a>
                        })}
                        </div>
                        {/* Social Icon */}
                        <div>
                            <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((link)=>{
                                    return <a 
                                    href={link.href} 
                                    key={link.label} 
                                    target="_blank" 
                                    className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-green-500 transition-colors">
                                        <link.icon className="w-5 h-5" />
                                    </a>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>
                            Fill out the form below and I&apos;ll get back to you as soon as possible.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Your name" />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Your email" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="Subject" />
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <textarea
                                    id="message"
                                    placeholder="Your message"
                                    className="min-h-25 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Send Message</Button>
                    </CardFooter>
                     </Card>
            </div>
         </div>
    </div>
  )
}

export default Contact