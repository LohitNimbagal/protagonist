import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckSquare, DollarSign, GraduationCap, Instagram, Star, Video, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import templates from '@/data/all-templates.json'
import AddonHoverCard from "@/components/addon-hover-card"
import { ReadMoreDialog } from "@/components/read-more"
import ReviewsSection from "@/components/reviews-comp"

const cardInfo = [
  {
    icon: <Video className="w-8 h-8 mx-auto text-[#283f33] mb-2" />,
    area: 'Content Creation',
    info: 'Track and measure your content creation progress across platforms.'
  },
  {
    icon: <BookOpen className="w-8 h-8 mx-auto text-[#283f33] mb-2" />,
    area: 'Academics',
    info: 'Track and measure your content creation progress across platforms.'
  },
  {
    icon: <DollarSign className="w-8 h-8 mx-auto text-[#283f33] mb-2" />,
    area: 'Fitness & Finances',
    info: 'Track and measure your content creation progress across platforms.'
  },
  {
    icon: <CheckSquare className="w-8 h-8 mx-auto text-[#283f33] mb-2" />,
    area: 'Tasks, Habits, Journal',
    info: 'Track and measure your content creation progress across platforms.'
  },
]

const stats = [
  {
    icon: <Youtube className="h-8 w-8 md:w-12 md:h-12 text-[#253d30] mb-2" />,
    stats: '176K+',
    area: 'YouTube Followers',
  },
  {
    icon: <Instagram className="h-8 w-8 md:w-12 md:h-12 text-[#253d30] mb-2" />,
    stats: '29K+',
    area: 'Instagram Followers',
  },
  {
    icon: <GraduationCap className="h-8 w-8 md:w-12 md:h-12 text-[#253d30] mb-2" />,
    stats: '2023',
    area: 'IIT Hyderabad',
  },
]


export default function NotionTemplateLanding() {

  return (
    <div className="flex items-center justify-center text-[#253d30]">
      <main className="w-full min-h-screen flex flex-col items-center justify-center space-y-2">

        <section id="hero" className="bg-white py-12">

          <div className="container mx-auto max-w-7xl">
            <h1 className="text-2xl md:text-3xl font-bold text-center md:pt-2">
              Become the Main Character of Your Life
            </h1>
            <p className="text-lg text-muted-foreground text-center pt-4 mb-6">
              Welcome to Protagonist Syndrome.
            </p>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 relative p-2 flex items-center">
                <Image
                  src={"https://rowan-donut-ffc.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F170a0660-4ab7-4462-a6bc-d2ab83238013%2Fda856a28-9d2b-4e3f-aaea-f93f6768988c%2Fprotagonist_blueprint_thumb.webp?table=block&id=1231975d-b166-8082-b884-c4494c1df13a&spaceId=170a0660-4ab7-4462-a6bc-d2ab83238013&width=1420&userId=&cache=v2"}
                  alt="Notion Template Preview"
                  width={1380}
                  height={720}
                  className="aspect-video object-contain rounded-md w-full h-fit"
                />
              </div>
              <div className="w-full lg:w-1/2 p-4 md:p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="mb-2 self-start text-[#2a4135]">Special Offer</Badge>
                <h2 className="text-2xl md:text-4xl md:leading-[3rem] font-bold mb-4">
                  <span className="block">The Ultimate Notion Template to</span>
                  <span className="bg-[#253d30] py-1 px-1 text-white">Run Your Life Like a PRO</span>
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Become the main hero of your story in 180 days.
                </p>
                <p className="text-base text-muted-foreground mb-6">
                  Protagonist Blueprint also includes (
                  <span className="mx-1 text-[#253d30] font-semibold hover:cursor-pointer">
                    <AddonHoverCard template={templates[2]}>Academic Weapon</AddonHoverCard>
                  </span>
                  +
                  <span className="mx-1 text-[#253d30] font-semibold hover:cursor-pointer">
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
                    <Button size="" className="w-full sm:w-full bg-[#253d30] order-2 md:order-1">
                      Buy Now
                    </Button>
                  </Link>
                  <ReadMoreDialog template={templates[0]} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full bg-gray-50 flex flex-col items-center justify-center py-12">

          <div className="container mx-auto px-4 space-y-14 max-w-4xl text-center">
            <Image
              src={"https://rowan-donut-ffc.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F170a0660-4ab7-4462-a6bc-d2ab83238013%2Fe3796402-4146-4c2a-9ca0-19de0c6217c6%2FScreenshot_2024-10-18_at_9.08.09_AM.png?table=block&id=1231975d-b166-8032-b472-dddf9c7ea40e&spaceId=170a0660-4ab7-4462-a6bc-d2ab83238013&width=1420&userId=&cache=v2"}
              alt="Creator Journey"
              width={1980}
              height={1080}
              className="rounded-lg object-cover w-full h-auto"
            />

            <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
              {stats.map(stat => (
                <div className="flex flex-col text-center items-center" key={stat.area}>
                  {stat.icon}
                  <span className="text-lg md:text-2xl font-bold">{stat.stats}</span>
                  <span className="text-xs md:text-sm text-muted-foreground">{stat.area}</span>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="text-xl md:text-3xl font-bold">
                Hey, I am Sankho,
                <br />
                <span className="font-semibold">
                  let me tell you a secret that helped me achieve all this.
                </span>
                <br />
              </h3>
              <h3 className="text-xl md:text-3xl font-bold">
                It comes from being able to track, measure and organise all the stats of my life.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardInfo.map(card => (
                <Card className="text-center" key={card.area}>
                  <CardHeader>
                    {card.icon}
                    <CardTitle className="text-xl font-semibold">{card.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{card.info}</p>
                  </CardContent>
                </Card>
              ))
              }
            </div>

            <div className="space-y-8 text-xl md:text-3xl">
              <h3 className=" font-semibold">
                I use Notion to do all this, it&apos;s an incredible tool but haunting to start from scratch.
              </h3>
              <h3 className=" font-bold">
                That&apos;s why I&apos;ve made this collection of my favourite templates that quite literally run my life.
              </h3>
            </div>
          </div>

        </section>

        <section id="templates" className="bg-white py-12">
          <div className="container mx-auto px-4 space-y-14 max-w-7xl ">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Discover All Premium Notion Templates</h2>
              <p className="text-lg text-muted-foreground">
                Enhance your Productivity with our Exclusive Notion Templates
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <CardTitle className='w-full flex items-center justify-between text-xl font-bold'>
                      {item.title}
                      <span className="text-lg font-semibold">{item.price ? `${item.price}` : 'Free'}</span>
                    </CardTitle>
                    <CardDescription>
                      {item.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto gap-2 flex items-center justify-between">
                    <Link href={item.cta} className='w-full'>
                      <Button className="w-full">{item.price ? 'Buy Now' : 'Free Access'}</Button>
                    </Link>
                    <ReadMoreDialog template={item} />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        

        <ReviewsSection />

        <section className="w-full py-12">
          <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Story?</h2>
            <Link href={'#hero'}>
              <Button size="lg">Get Your Templates Now</Button>
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}