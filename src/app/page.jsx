import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckSquare, DollarSign, Eye, GraduationCap, Instagram, Star, Users, Video, VideoIcon, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import templates from '@/data/all-templates.json'
import AddonHoverCard from "@/components/addon-hover-card"
import { ReadMoreDialog } from "@/components/read-more"
import ReviewsSection from "@/components/reviews-comp"

const cardInfo = [
  {
    icon: <Video className="w-8 h-8 mx-auto mb-2" />,
    area: 'Content Creation',
    info: 'Track and measure your content creation progress across platforms.'
  },
  {
    icon: <BookOpen className="w-8 h-8 mx-auto mb-2" />,
    area: 'Academics',
    info: 'Track and measure your content creation progress across platforms.'
  },
  {
    icon: <DollarSign className="w-8 h-8 mx-auto mb-2" />,
    area: 'Fitness & Finances',
    info: 'Track and measure your content creation progress across platforms.'
  },
  {
    icon: <CheckSquare className="w-8 h-8 mx-auto mb-2" />,
    area: 'Tasks, Habits, Journal',
    info: 'Track and measure your content creation progress across platforms.'
  },
]

const stats = [
  {
    icon: <Youtube className="h-8 w-8 md:w-12 md:h-12 mb-2" />,
    stats: '176K+',
    area: 'YouTube Followers',
  },
  {
    icon: <Instagram className="h-8 w-8 md:w-12 md:h-12 mb-2" />,
    stats: '29K+',
    area: 'Instagram Followers',
  },
  {
    icon: <GraduationCap className="h-8 w-8 md:w-12 md:h-12 mb-2" />,
    stats: '2023',
    area: 'IIT Hyderabad',
  },
]

export default function NotionTemplateLanding() {

  return (
    <div className="flex items-center justify-center">
      <main className="w-full min-h-screen flex flex-col items-center justify-center ">

        <section id="hero" className="items-center justify-center bg-white py-12">

          <div className="container mx-auto space-y-4 lg:max-w-7xl xl:max-w-[90rem] xl:px-20 xl:space-y-12">
            <div className="pb-1">
              <h1 className="text-2xl md:text-3xl font-semibold text-center md:pt-2 font-poppins ">
                Become the Main Character of Your Life
              </h1>
              <p className="text-lg text-gray-800 text-center pt-4 mb-6">
                Welcome to Protagonist Syndrome.
              </p>
            </div>

            <div className="flex flex-col xl:flex-row gap-4">
              <div className="w-full xl:w-1/2 relative p-2 flex items-center">
                <Image
                  src={"https://rowan-donut-ffc.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F170a0660-4ab7-4462-a6bc-d2ab83238013%2Fda856a28-9d2b-4e3f-aaea-f93f6768988c%2Fprotagonist_blueprint_thumb.webp?table=block&id=1231975d-b166-8082-b884-c4494c1df13a&spaceId=170a0660-4ab7-4462-a6bc-d2ab83238013&width=1420&userId=&cache=v2"}
                  alt="Notion Template Preview"
                  width={1380}
                  height={720}
                  className="aspect-video object-contain rounded-md w-full h-fit"
                />
              </div>
              <div className="w-full xl:w-1/2 p-4 md:p-8 flex flex-col justify-center">
                {/* <Badge variant="secondary" className="mb-2 self-start">Special Offer</Badge> */}
                <h2 className="text-2xl md:text-4xl md:leading-[3rem] font-bold mb-4 tracking-tight">
                  <span className="block">The Ultimate Notion Template to</span>
                  <span className="bg-[#253d30] py-1 px-1 text-white">Run Your Life Like a PRO</span>
                </h2>
                <p className="text-base text-gray-800 mb-6">
                  Become the main hero of your story in 180 days.
                </p>
                <p className="text-base text-gray-800 mb-6">
                  Protagonist Blueprint also includes (
                  <span className="mx-1 font-semibold hover:cursor-pointer">
                    <AddonHoverCard template={templates[2]}>Academic Weapon</AddonHoverCard>
                  </span>
                  +
                  <span className="mx-1 font-semibold hover:cursor-pointer">
                    <AddonHoverCard template={templates[1]}>Content brain</AddonHoverCard>
                  </span>
                  ) templates worth of ₹1,100/- for free!
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-primary">₹849</span>
                  <span className="text-sm text-muted-foreground line-through">₹1,950</span>
                </div>
                <div className="md:w-96 flex flex-col sm:flex-row gap-4">
                  <Link href={templates[0].cta} className="w-full" target="_blank">
                    <Button size="" className="w-full sm:w-full order-2 md:order-1">
                      Buy Now
                    </Button>
                  </Link>
                  <ReadMoreDialog template={templates[0]} />
                </div>
              </div>
            </div>
          </div>

        </section>

        <section id='about' className="flex flex-col items-center justify-start py-12 w-full bg-gray-100">
          <div className="container mx-auto px-4 space-y-10 md:space-y-20 max-w-4xl">

            <Image
              src="/images/about.png"
              alt="Creator Journey"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-96"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <Users className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-4 text-[#253d30]" />
                <p className="text-2xl font-bold text-[#253d30] ">29K+</p>
                <p className="text-gray-900">Instagram Followers</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-4 text-[#253d30]" />
                <p className="text-2xl font-bold text-[#253d30] ">177K+</p>
                <p className="text-gray-900">YouTube Subscribers</p>
              </div>
              <div className="text-center">
                <VideoIcon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-4 text-[#253d30]" />
                <p className="text-2xl font-bold text-[#253d30] ">200+</p>
                <p className="text-gray-900">YouTube Videos</p>
              </div>
              <div className="text-center">
                <Eye className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-4 text-[#253d30]" />
                <p className="text-2xl font-bold text-[#253d30] ">19M</p>
                <p className="text-gray-900">Total Views</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6">
                <span className="font-bold text-[#253d30] font-lato">Hey, I&apos;m Sankho!</span> Let me share a secret that&apos;s been key to my success. It&apos;s all about tracking, measuring, and organizing the key stats of my life. I do it all with Notion, an incredible tool — but I know it can be daunting to set up from scratch.
              </p>
              <p className="text-lg mb-6">
                That&apos;s why I&apos;ve created this collection of my favorite templates, the ones that quite literally run my life. Let them help you, too!
              </p>
            </div>
          </div>
        </section>

        <section id="templates" className="bg-white py-12">
          <div className="container mx-auto px-4 space-y-14 max-w-7xl ">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold font-poppins">Discover All Premium Notion Templates</h2>
              <p className="text-lg text-gray-800">
                Enhance your Productivity with our Exclusive Notion Templates
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {templates.map((item) => (
                <Card className='max-w-lg flex flex-col justify-between' key={item.slug} >
                  <CardHeader className="space-y-4 rounded-md">
                    <Image
                      src={item.imageUrl}
                      alt={`Template ${item.title}`}
                      width={400}
                      height={300}
                      className="w-auto object-contain rounded-md"
                    />
                    <CardTitle className='w-full flex flex-col md:flex-row  items-center justify-between text-xl font-bold text-[#253d30]'>
                      {item.title}
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground font-normal line-through">{item.originalPrice ? `${item.originalPrice}` : null}</span>
                        <span className="text-lg font-semibold">{item.price ? `${item.price}` : 'Free'}</span>
                      </div>
                    </CardTitle>
                    <CardDescription className='text-gray-800'>
                      {item.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto gap-2 flex items-center justify-between">
                    <ReadMoreDialog template={item} />
                    <Link href={item.cta} className='w-full'>
                      <Button className="w-full">{item.price ? 'Buy Now' : 'Free Access'}</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ReviewsSection />

        <section className="w-full py-12">
          <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl font-semibold mb-4 font-poppins">Ready to Take Control of Your Story ?</h2>
            <Link href={'#hero'}>
              <Button size="lg">Get Your Templates Now</Button>
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}